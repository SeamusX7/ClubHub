import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Text, View, FlatList, Modal, SafeAreaView } from 'react-native';
import { firebase } from '../../firebase/config';

// Component Imports
import Search from '../../components/Search';
import SearchButton from '../../components/buttons/SearchButton';
import MediumCard from '../../components/cards/MediumCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';
import CancelButton from '../../components/buttons/CustomButton';
import HalfModalButton from '../../components/buttons/HalfModalButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import half_modal_styles from '../../assets/styles/HalfModalStyle';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';


export default function PreviousMatchSessionsScreen({ navigation }) {

  const teamID = useSelector(getActiveTeamKey);
  const [modalOpen, setModalOpen] = useState(false);
  const [sessionIdKey, setSessionIdKey] = useState('session id');
  const uType = useSelector(getUserType);


  const activeModal = (fact, key) => {
    setSessionIdKey(key.item.key);
    closeModal(fact);
  }

  const closeModal = (fact) => {
    setModalOpen(false);
  }

  const dispatch = useDispatch();
  const sessionsArray = useSelector(getSessions);
  const db = firebase.firestore();
  const [sessions, setSessions] = useState([]); // Initial empty array of sessions
  const [activeSession, setActiveSession] = useState([]);


  console.log('sessionsArray ===> : ', sessionsArray);

  useEffect(() => {
    var today = new Date();
    const subscriber = db
      .collection('sessions')
      .where('teamId', '==', teamID)
      .where('sessionType', '==', "gym")
      .where('timeStamp', '<', today)
      .onSnapshot(querySnapshot => {
        const sessions = [];
        querySnapshot.forEach(documentSnapshot => {
          sessions.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setSessions(sessions);
      });
          // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  // useEffect(() => {

  //   db.collection('sessions')
  //     .where('teamId', '==', teamID)
  //     .where('sessionType', '==', "gym")
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         sessions.push({
  //           ...doc.data(),
  //           key: doc.id,
  //         });
  //       });

  //       setSessions(sessions);
  //       dispatch(sessionsAdded(sessions));

  //     });


  // }, [sessions]);

  sessionSelected = item => {
    setActiveSession(item);
    dispatch(activeSessionRemove());
    dispatch(activeSessionAdded(item));

    console.log('session selected item ==> : ', item);

    let sessionType = item.item.sessionType;
    if (sessionType === 'gym') {
      navigation.navigate('ViewPreviousGymSession')
    }
  }

  const [OverflowModalOpen, setOverflowModalOpen] = useState(false);

  const closeOverflowModal = () => {
    setOverflowModalOpen(false);
  }

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{ marginLeft: 20 }} >
            <Ionicons onPress={() => navigation.navigate('Session')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={global_styles.screen_container}>

      <Modal
        visible={OverflowModalOpen}
        transparent={true}
        animationType='slide'>
        <SafeAreaView style={half_modal_styles.halfModalContentSmall} >
          <View style={half_modal_styles.halfModalView}>

            <HalfModalButton text='Session Information' primaryIconName='information-outline' />

            <HalfModalButton text='Delete Session' primaryIconName='trash-can-outline' />

            <CancelButton text="Cancel" onPress={() => closeOverflowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

      <View style={global_styles.search_section}>
        <Search />
        <SearchButton>
          <MaterialIcons
            name='filter-list'
            size={24}
            color="#caccd0" />
        </SearchButton>
      </View>

      <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 30 }}>Previous gym</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <MediumCard onPress={() => this.sessionSelected({ item })}>
            <View style={medium_card_styles.medium_card_icon_container}>
              {item.sessionType == "match" ? <MaterialCommunityIcons name='trophy-outline' size={24} color='#5386e4' />
                : item.sessionType == "training" ? <Ionicons name='md-football' size={24} color='#5386e4' />
                  : <MaterialCommunityIcons name='dumbbell' size={24} color='#5386e4' />}
            </View>
            <View style={medium_card_styles.medium_card_info_container}>
              {item.sessionType=="match" ? <Text style={medium_card_styles.medium_card_primary_text}>vs. {item.opposition}</Text> : <Text style={medium_card_styles.medium_card_primary_text}>{item.title}</Text>}
              <Text style={medium_card_styles.medium_card_secondary_text}>{item.timeStamp.toDate().toDateString()} | {item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
            </View>
            <View style={medium_card_styles.medium_card_overflow_container}>
              {/* <OverflowMenuButton onPress={() => activeModal(true, { item })} /> */}
              <OverflowMenuButton onPress={() => setOverflowModalOpen(true)} />
            </View>
          </MediumCard>
        )} />
    </View>
  )
}