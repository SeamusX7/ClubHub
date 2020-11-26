import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, Modal, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import CreateTeamForm from './CreateTeamForm';
import DisplayTeams from './DisplayTeams';
import modal_styles from '../assets/styles/ModalStyle';
import card_styles from '../assets/styles/CardStyle';
import FlatButton from '../components/CreateButton';

export default function ChooseTeamScreen(props) {
  const userName = props.extraData.fullName;
  const userId = props.extraData.id;
  const [modalOpen, setModalOpen] = useState(false);

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
            <CreateTeamForm userId={userId} />
          </View>
        </SafeAreaView>
      </Modal>

      <View style={styles.f} >
        <Text style={styles.greeting} >Welcome back, {userName}!</Text>
        <Text style={styles.text}>Select a team to get started.</Text>
      </View>
      {/* Chewie this is the file that you'll design the team card within. Uncomment when working on */}
      {/* <DisplayTeams userId={userId} string='hello' /> */}

      <FlatButton onPress={() => setModalOpen(true)} />

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
  },
  f: {
    flex: 1,
  },
  greeting: {
    textAlign: 'center',
    fontFamily: 'montserrat-semibold',
    fontSize: 18,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
    fontSize: 16,
  }
});