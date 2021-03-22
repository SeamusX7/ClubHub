
import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { firebase } from '../../firebase/config';
import { SafeAreaView, Modal } from 'react-native';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import modal_styles from '../../assets/styles/ModalStyle';
import NewSessionModal from './NewSessionModal';

import SquareCard from '../../components/cards/SquareCard';
import SquareCardRight from '../../components/cards/SquareCardRight';
import SquareCardLeft from '../../components/cards/SquareCardLeft';
import square_card_styles from '../../assets/styles/SquareCardStyle';
import MediumCard from '../../components/cards/MediumCard';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';
import FloatingModalButton from '../../components/buttons/FloatingModalButton';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';


export default function SessionScreen({ navigation }) {

  const [sessions, setSessions] = useState([]);
  const db = firebase.firestore(); 

  useEffect(() => {

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
      dispatch(sessionsAdded(sessions));

    });

   
  }, [sessions]);

  const teamID = useSelector(getActiveTeamKey);
  const [modalOpen, setModalOpen] = useState(false);
  const openModalButton = <FloatingModalButton onPress={() => setModalOpen(true)} />
  const uType = useSelector(getUserType);

  const closeModal = (fact) => {
    setModalOpen(false);
  }

  const dispatch = useDispatch();
 
  

  sessionSelected = item => {
    dispatch(activeSessionRemove());
    dispatch(activeSessionAdded(item));
    let sessionType = item.item.sessionType;
    if (sessionType === 'match') {
      navigation.navigate('ViewUpcomingMatchSession')
    }
    else if (sessionType === 'gym') {
      navigation.navigate('ViewUpcomingGymSession')
    }
    else if (sessionType === 'training') {
      navigation.navigate('ViewUpcomingTrainingSession')
    }
  }

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 20 }} >
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

      <Text style={{ ...global_styles.title, marginBottom: 10 }}>Previous sessions</Text>
      <View style={square_card_styles.square_card_container}>
        <SquareCardLeft onPress={() => navigation.navigate('PreviousMatchSessions')}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Matches</Text>
        </SquareCardLeft>
        <SquareCard onPress={() => navigation.navigate('PreviousTrainingSessions')}>
          <Ionicons
            name="md-football"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Training</Text>
        </SquareCard>
        <SquareCardRight onPress={() => navigation.navigate('PreviousGymSessions')}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={34}
            color="#5386e4"
            style={square_card_styles.square_card_icon} />
          <Text style={square_card_styles.square_card_title}>Gym</Text>
        </SquareCardRight>
      </View>

      <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 30 }}>Upcoming sessions</Text> 

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
              {item.sessionType == "match" ? <Text style={medium_card_styles.medium_card_primary_text}>vs. {item.opposition}</Text> : <Text style={medium_card_styles.medium_card_primary_text}>{item.sessionType}</Text>}
              <Text style={medium_card_styles.medium_card_secondary_text}>{item.timeStamp.toDate().toDateString()} | {item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
            </View>
            <View style={medium_card_styles.medium_card_overflow_container}>
            </View>
          </MediumCard>
        )}
      />



      {[uType === "coach" ? openModalButton : null]}
    </View>
  )
}