import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import Card from '../../components/Card';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';
import FlatButton from '../../components/CreateButton';
import modal_styles from '../../assets/styles/ModalStyle';
import InvitePlayerModal from './InvitePlayerModal';

export default function TeamScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
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
              <Text style={modal_styles.modalTitle}>Invite player</Text>
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

      <Text style={{...global_styles.title, marginBottom: 10}}>Team statistics</Text>
      <View style={large_card_style.container}>
        <View style={large_card_style.largeLeftCard}>
          
        </View>
        <View style={large_card_style.largeCenterCard}>
          
        </View>
        <View style={large_card_style.largeRightCard}>
          
        </View>
      </View>
      <Text style={{...global_styles.title, marginBottom: 4, marginTop: 30 }}>Players</Text>
      <Card onPress={() => navigation.navigate('Player')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <Text style={card_styles.playerNumber}>7</Text>
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Séamus Cummins</Text>
            <Text style={card_styles.textTwo}>Forward</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton />
          </View>
        </View>
      </Card>

      <FlatButton onPress={() => setModalOpen(true)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    padding: 20,
  },
  icon: {
    marginRight: 20,
  }
});