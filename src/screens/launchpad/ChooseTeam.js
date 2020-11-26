import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, Modal, View, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

// Local File Imports
import CreateTeamForm from './CreateTeamForm';
import DisplayTeams from './DisplayTeams';
import modal_styles from '../../assets/styles/ModalStyle';
import card_styles from '../../assets/styles/CardStyle';
import FlatButton from '../../components/CreateButton';
import MoreButton from '../../components/MoreButton';
import Card from '../../components/Card';

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

      <Button
        title="go to app"
        onPress={() => props.navigation.navigate('TabNavigator')} />

      <View>
        <Text style={styles.greeting} >Welcome back, {userName}!</Text>
        <Text style={styles.text}>Select a team to get started.</Text>
      </View>

      <View style={styles.cardView} >
        <FlatList
          data={userId}
          renderItem={({ id }) => (
            <Card>
              <TouchableOpacity>
                <View style={card_styles.container} >
                  <View style={card_styles.circle} >
                    <MaterialCommunityIcons
                      name='trophy-outline'
                      size={20}
                      color='#5386e4'
                      style={card_styles.icon} />
                  </View>
                  <View style={card_styles.textView} >
                    {/* <DisplayTeams userId={userId} string='hello' /> */}
                    <Text style={card_styles.textOne} >Sligo Rovers</Text>
                    <Text style={card_styles.textTwo} >u24s</Text>
                  </View>
                  <View style={card_styles.more} >
                    <MoreButton onPress={() => console.log('Tap')} />
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          )}
        />
      </View>

      <FlatButton onPress={() => setModalOpen(true)} />

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    marginTop: 150,
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
  },
  cardView: {
    marginTop: 30,
  }
});