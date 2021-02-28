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
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={styles.container}>

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
      <View style={large_card_style.container}>
        <TouchableOpacity onPress={() => navigation.navigate('PreviousMatchSessions')} style={large_card_style.largeLeftCard}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Matches</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PreviousTrainingSessions')} style={large_card_style.largeCenterCard}>
          <Ionicons
            name="md-football"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Training</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PreviousGymSessions')} style={large_card_style.largeRightCard}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Gym</Text>
        </TouchableOpacity>
      </View>

      <Text style={{...global_styles.title, marginBottom: 4, marginTop: 30 }}>Upcoming sessions</Text>
      <FlatList
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
      />


{[uType === "coach" ? openModalButton : null]}

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