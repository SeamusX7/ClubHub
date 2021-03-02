import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { firebase } from '../../firebase/config';
import { SafeAreaView, Modal } from 'react-native';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import Card from '../../components/Card';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';
import FlatButton from '../../components/CreateButton';
import modal_styles from '../../assets/styles/ModalStyle';
import NewSessionModal from './NewSessionModal';

import SquareCard from '../../components/cards/SquareCard';
import square_card_styles from '../../assets/styles/SquareCardStyle';
import MediumCard from '../../components/cards/MediumCard';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import OverflowMenuButton from '../../components/OverflowMenuButton';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';


export default function SessionScreen({navigation}) {
  // const [modalOpen, setModalOpen] = useState(false);
  // const closeModal = () => {
  //   setModalOpen(false);
  const teamID = useSelector(getActiveTeamKey);
   

    
  const [modalOpen, setModalOpen] = useState(false);
  const [sessionIdKey, setSessionIdKey] = useState('session id');

  const openModalButton = <FlatButton onPress={() => setModalOpen(true)}/>
  const uType = useSelector(getUserType);


  const activeModal = (fact, key) => {
    setSessionIdKey(key.item.key);
    closeModal(fact);
  }

  const closeModal = (fact) => {
    setModalOpen(false);
  }

  const dispatch = useDispatch();


    //dispatch(activeSessionRemove());
  const db = firebase.firestore();
  const [sessions, setSessions] = useState([]); // Initial empty array of sessions
  const [activeSession, setActiveSession] = useState([]);

   

   useEffect(() => {

     // dispatch(activeSessionRemove());

    db.collection('sessions')
    .where('teamId', '==', teamID)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        
        sessions.push({
          ...doc.data(),
          key: doc.id,
        });
        
      });

      setSessions(sessions);
      dispatch(sessionsAdded({sessions}));

    });
    
    
   }, [sessions]);

  sessionSelected = item =>
  {
    setActiveSession(item);
    dispatch(activeSessionRemove());
    dispatch(activeSessionAdded(item));
    // const activeSessionKey = useSelector(getactiveSessionKey);
     let sessionType = item.item.sessionType;
     if(sessionType === 'match')
     {
      navigation.navigate('ViewUpcomingMatchSession')
     }
  }

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{marginRight: 20}} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={global_styles.screen_container}>

      <Modal
        visible={modalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>New session</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setModalOpen(false)} />
            </View>
            <NewSessionModal closeModal={closeModal} />
          </View>
        </SafeAreaView>
      </Modal>

      <Text style={{...global_styles.title, marginBottom: 10}}>Previous sessions</Text>
      <View style={square_card_styles.square_card_container}>
        <SquareCard onPress={() => navigation.navigate('PreviousMatchSessions')}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Matches</Text>
        </SquareCard>
        <SquareCard onPress={() => navigation.navigate('PreviousTrainingSessions')}>
          <Ionicons
            name="md-football"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Training</Text>
        </SquareCard>
        <SquareCard onPress={() => navigation.navigate('PreviousGymSessions')}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Gym</Text>
        </SquareCard>
      </View>

      <Text style={{...global_styles.title, marginBottom: 10, marginTop: 30 }}>Upcoming sessions</Text>

      {/* <MediumCard>
            
      </MediumCard> */}

      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <MediumCard onPress={() => this.sessionSelected({item})}>
            <View style={medium_card_styles.medium_card_icon_container}>
              {item.sessionType=="match" ? <MaterialCommunityIcons name='trophy-outline' size={24} color='#5386e4' />
                : item.sessionType=="training" ? <Ionicons name='md-football' size={24} color='#5386e4' />
                : <MaterialCommunityIcons name='dumbbell' size={24} color='#5386e4' /> }
            </View>
            <View style={medium_card_styles.medium_card_info_container}>
              {item.sessionType=="match" ? <Text style={medium_card_styles.medium_card_primary_text}>vs. {item.opposition}</Text> : <Text style={medium_card_styles.medium_card_primary_text}>{item.title}</Text>}
              <Text style={medium_card_styles.medium_card_secondary_text}>{item.timeStamp.toDate().toDateString()} | {item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
            </View>
            <View style={medium_card_styles.medium_card_overflow_container}>
              <OverflowMenuButton />
            </View>
          </MediumCard>
        )}
      />

      
      {/* <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <Card
            // onPress={() => x.props.navigation.navigate('TabNavigator')}
            onPress={() => this.sessionSelected({item})}>
            <View style={card_styles.container}>
              <View style={card_styles.circle} >
                {item.sessionType=="match" ? <MaterialCommunityIcons name='trophy-outline' size={20} color='#5386e4' style={card_styles.icon} />
                  : item.sessionType=="training" ? <Ionicons name='md-football' size={20} color='#5386e4' style={{...card_styles.icon, marginTop:11, marginLeft:2}} />
                  : <MaterialCommunityIcons name='dumbbell' size={20} color='#5386e4' style={card_styles.icon} /> }
              </View>
              <View style={card_styles.textView} >
                {item.sessionType=="match" ? <Text style={card_styles.textOne}>vs. {item.opposition}</Text> : <Text style={card_styles.textOne}>{item.title}</Text>}
                <Text style={card_styles.textTwo}>{item.timeStamp.toDate().toDateString()} | {item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
              </View>
              <View style={card_styles.more} >
                <MoreButton onPress={() => activeModal(true, { item })} />
              </View>
            </View>
          </Card>
        )}
      /> */}


{[uType === "coach" ? openModalButton : null]}

    </View>
  )
}
