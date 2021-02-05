import React, { useState, Component } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import modal_styles from '../../assets/styles/ModalStyle';
import InvitePlayerModal from './InvitePlayerModal';
import mini_card_styles from '../../assets/styles/MiniCardStyle';

// Local imports
import MiniCardPending from '../../components/MiniCardPending'
import MiniCardAccepted from '../../components/MiniCardAccepted'
import MiniCardDeclined from '../../components/MiniCardDeclined'

export default function ViewUpcomingMatchSessionScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <Ionicons onPress={() => setModalOpen(true)} name="md-person-add" size={24} color={'#b7b7b7'} />
          </View>
        )
      })
    }),
    <View style={styles.container}>
      <Modal
        visible={modalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>Invite Player</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setModalOpen(false)} />
            </View>
            <InvitePlayerModal closeModal={closeModal} />
          </View>
        </SafeAreaView>
      </Modal>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Pending</Text>
        <Ionicons 
        name='ios-arrow-down'
        size={20}
        color='#333333'
        style={styles.arrowIcon} />
      </View>
      <MiniCardPending><Text style={mini_card_styles.text}>Keane Callan</Text></MiniCardPending>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Accepted</Text>
        <Ionicons 
        name='ios-arrow-down'
        size={20}
        color='#333333'
        style={styles.arrowIcon} />
      </View>
      <MiniCardAccepted><Text style={mini_card_styles.text}>Jack Lynch</Text></MiniCardAccepted>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Declined</Text>
        <Ionicons 
        name='ios-arrow-down'
        size={20}
        color='#333333'
        style={styles.arrowIcon} />
      </View>
      <MiniCardDeclined><Text style={mini_card_styles.text}>Shane McCleary</Text></MiniCardDeclined>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 20,
  },
  icon: {
    marginRight: 20,
  },
  textStyle: {
    color: '#333333',
    fontFamily: 'montserrat-semibold',
    fontSize: 16,
    marginTop: 30,
  },
  textContainer: {
    flexDirection: 'row'
  },
  arrowIcon: {
    marginTop: 30,
    marginLeft: 10,
  }
});