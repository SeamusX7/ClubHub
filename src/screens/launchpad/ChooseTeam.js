import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, Modal, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import CreateTeamForm from './CreateTeamForm';
import DisplayTeams from './DisplayTeams';
import modal_styles from '../../assets/styles/ModalStyle';

export default function ChooseTeamScreen(props) {
  const userName = props.extraData.fullName;
  const userId = props.extraData.id;
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <Modal
        visible={modalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>New team</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setModalOpen(false)} />
            </View>
            <CreateTeamForm userId={userId} closeModal={closeModal} />
          </View>
        </SafeAreaView>
      </Modal>

      <Text>Welcome back, {userName}!</Text>
      {/* Chewie this is the file that you'll design the team card within. Uncomment when working on */}
      {/* <DisplayTeams userId={userId} string='hello' /> */}

      <MaterialIcons
        name='add'
        color='#333'
        size={42}
        style={modal_styles.modalToggleCreate}
        onPress={() => setModalOpen(true)} />

      <Button
        title="go to app"
        onPress={() => props.navigation.navigate('TabNavigator')} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  }
});