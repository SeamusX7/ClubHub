import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native';
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
import Search from '../../components/Search';
import SearchButton from '../../components/SearchButton';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';


export default function PreviousMatchSessionsScreen({navigation}) {
 
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
  const sessionsArray = useSelector(getSessions);
  const db = firebase.firestore();
  const [sessions, setSessions] = useState([]); // Initial empty array of sessions
  const [activeSession, setActiveSession] = useState([]);

  
  console.log('sessionsArray ===> : ', sessionsArray);

  useEffect(() => {

    db.collection('sessions')
    .where('teamId', '==', teamID)
    .where('sessionType', '==', "training")
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
        headerRight: () => (
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={styles.container}>
      <View style={global_styles.searchSection}>
        <Search />
        <SearchButton>
          <MaterialIcons
            name='filter-list'
            size={24}
            color="#b7b7b7" />
        </SearchButton>
      </View>
      
      <Text style={{...global_styles.title, marginBottom: 4, marginTop: 30 }}>Previous matches</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <Card
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
      />

    </View>
  )
  
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    marginRight: 20,
  }
});