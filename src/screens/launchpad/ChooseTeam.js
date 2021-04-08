import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, Modal, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

// Component Imports
import CreateTeamForm from './CreateTeamForm';
import JoinTeamForm from './JoinTeamForm';
import DisplayTeams from './DisplayTeams';
import DisplayTeamsForPlayer from './DisplayTeamsForPlayer';
import FloatingModalButton from '../../components/buttons/FloatingModalButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import global_styles from '../../assets/styles/GlobalStyle';

// Redux Imports
import { getUserId, getUserType, getUserName } from '../../store/user';
import { useSelector } from 'react-redux';

export default function ChooseTeamScreen(props) {
  const userID = useSelector(getUserId);
  const userType = useSelector(getUserType);
  const userName = useSelector(getUserName);
  const [managerModalOpen, setManagerModalOpen] = useState(false);
  const [playerModalOpen, setPlayerModalOpen] = useState(false);
  const openManagerModalButton = <FloatingModalButton onPress={() => setManagerModalOpen(true)} />
  const openPlayerModalButton = <FloatingModalButton onPress={() => setPlayerModalOpen(true)} />
  const closeManagerModal = () => {
    setManagerModalOpen(false);
  }
  const closePlayerModal = () => {
    setPlayerModalOpen(false);
  }

  return (
    <View style={global_styles.screen_container}>

      <Modal
        visible={managerModalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>New team</Text>
              <MaterialIcons
                name='close'
                color='#0c1821'
                size={22}
                style={modal_styles.modalToggleExit}
                onPress={() => setManagerModalOpen(false)} />
            </View>
            <CreateTeamForm userId={userID} closeModal={closeManagerModal} />
          </View>
        </SafeAreaView>
      </Modal>

      <Modal
        visible={playerModalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>Join team</Text>
              <MaterialIcons
                name='close'
                color='#0c1821'
                size={22}
                style={modal_styles.modalToggleExit}
                onPress={() => setPlayerModalOpen(false)} />
            </View>
            <JoinTeamForm closeModal={closePlayerModal} props={props} />
          </View>
        </SafeAreaView>
      </Modal>

      <View style={styles.greeting_container}>
        <Text style={styles.greeting_heading} >Welcome back, {userName}!</Text>
        <Text style={styles.greeting_body}>Select a team to get started.</Text>
      </View>

      {[userType === "coach" ?
        <View style={styles.team_card_container}>
          <DisplayTeams props={props} />
        </View>
        :
        <View style={styles.team_card_container}>
          <DisplayTeamsForPlayer props={props} />
        </View>
      ]}



      {[userType === "coach" ? openManagerModalButton : openPlayerModalButton]}

    </View >
  )
}

const styles = StyleSheet.create({
  greeting_container: {
    marginTop: '25%',
  },
  greeting_heading: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 16,
    marginBottom: 1,
    textAlign: 'center',
  },
  greeting_body: {
    color: '#91999e',
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
    fontSize: 14,
  },
  team_card_container: {
    marginTop: 30,
  }
});