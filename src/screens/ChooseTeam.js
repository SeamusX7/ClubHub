import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, Modal, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import CreateTeamForm from './CreateTeamForm'
import DisplayTeams from './DisplayTeams'

export default function ChooseTeamScreen(props) {
  const userName = props.extraData.fullName;
  const userId = props.extraData.id;
  console.log('log in user id: ', userId);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={modalOpen}
        animationType='slide'>
        <View style={styles.modalContent}>
          <Text>
            <CreateTeamForm userId={userId} />
          </Text>
          <MaterialIcons
            name='close'
            size={54}
            style={styles.modalToggleExit}

            onPress={() => setModalOpen(false)} />
        </View>

      </Modal>

<DisplayTeams userId={userId} string='hello' />
      
      <Text>Welcome back, {userName}!</Text>
      <Text>Your ID :  {userId}</Text>
      <View>

      </View>
      <Button
        title="go to app"
        onPress={() => props.navigation.navigate('TabNavigator')} />
      <MaterialIcons
        name='add'
        color='#3b86eb'
        size={54}
        style={styles.modalToggleCreate}
        onPress={() => setModalOpen(true)} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
  }
});