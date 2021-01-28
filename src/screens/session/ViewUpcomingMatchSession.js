import React, { useState } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import modal_styles from '../../assets/styles/ModalStyle';
import InvitePlayerModal from './InvitePlayerModal';

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
  }
});