import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Text, View, FlatList } from 'react-native';
import { firebase } from '../../firebase/config';

// Component Imports
import Search from '../../components/Search';
import SearchButton from '../../components/buttons/SearchButton';
import MediumCard from '../../components/cards/MediumCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';

// Redux Imports
import { useDispatch , useSelector } from 'react-redux';
import { getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';


export default function PreviousMatchSessionsScreen({navigation}) {
 
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

    db.collection('sessions')
    .where('teamId', '==', teamID)
    .where('sessionType', '==', "gym")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        sessions.push({
          ...doc.data(),
          key: doc.id,
        });
      });

      setSessions(sessions);
      dispatch(sessionsAdded(sessions));

    });

   
  }, [sessions]);

  sessionSelected = item =>
  {
    setActiveSession(item);
    dispatch(activeSessionRemove());
    dispatch(activeSessionAdded(item));

     console.log('session selected item ==> : ', item);

     let sessionType = item.item.sessionType;
     if(sessionType === 'match')
     {
      //navigation.navigate('ViewUpcomingMatchSession')
     }
  }

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{marginLeft: 20}} >
            <Ionicons onPress={() => navigation.navigate('Session')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={global_styles.screen_container}>
      <View style={global_styles.search_section}>
        <Search />
        <SearchButton>
          <MaterialIcons
            name='filter-list'
            size={24}
            color="#caccd0" />
        </SearchButton>
      </View>
      
      <Text style={{...global_styles.title, marginBottom: 10, marginTop: 30 }}>Previous gym</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <MediumCard onPress={() => this.sessionSelected({ item })}>
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
              <OverflowMenuButton onPress={() => activeModal(true, { item })} />
            </View>
          </MediumCard>
        )} />
    </View>
  ) 
}