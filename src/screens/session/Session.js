import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import Card from '../../components/Card';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';
import FlatButton from '../../components/CreateButton';
import modal_styles from '../../assets/styles/ModalStyle';
import NewSessionModal from './NewSessionModal';

export default function SessionScreen({ navigation }) {
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
      <Card onPress={() => navigation.navigate('ViewUpcomingMatchSession')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <MaterialCommunityIcons
              name='trophy-outline'
              size={20}
              color='#5386e4'
              style={card_styles.icon} />
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>vs. Drogheda United</Text>
            <Text style={card_styles.textTwo}>14:30 | 6th February</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>
      {/* <Card>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <MaterialCommunityIcons
              name='md-football'
              size={20}
              color='#5386e4'
              style={card_styles.icon} />
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Shooting drills</Text>
            <Text style={card_styles.textTwo}>14:30 | 6th February</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card> */}
      {/* <Card>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <MaterialCommunityIcons
              name='dumbbell'
              size={20}
              color='#5386e4'
              style={card_styles.icon} />
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>Compound lifts</Text>
            <Text style={card_styles.textTwo}>14:30 | 6th February</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card> */}

      <FlatButton onPress={() => setModalOpen(true)} />

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