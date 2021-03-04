import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, Modal, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

// Redux
import { getUserId, getUserType, getUserName } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';


// Local File Imports
import CreateTeamForm from './CreateTeamForm';
import JoinTeamForm from './JoinTeamForm';
import DisplayTeams from './DisplayTeams';
import modal_styles from '../../assets/styles/ModalStyle';
import card_styles from '../../assets/styles/CardStyle';
import FlatButton from '../../components/CreateButton';
import MoreButton from '../../components/MoreButton';
import Card from '../../components/Card';
import global_styles from '../../assets/styles/GlobalStyle';

export default function ChooseTeamScreen(props) {
  // const userName = props.extraData.fullName;
 // const userId = props.extraData.id;
 //const [teams, setTeams] = useState([]);

//  useEffect(() => {


// }, [teams]);


  const userType = props.extraData.userType;
  const userID = useSelector(getUserId);
  const uType = useSelector(getUserType);
  const userName = useSelector(getUserName);

  

  const [managerModalOpen, setManagerModalOpen] = useState(false);
  const [playerModalOpen, setPlayerModalOpen] = useState(false);
  const openManagerModalButton = <FlatButton onPress={() => setManagerModalOpen(true)} />
  const openPlayerModalButton = <FlatButton onPress={() => setPlayerModalOpen(true)} />
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
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setManagerModalOpen(false)} />
            </View>
            <CreateTeamForm userId={userID} closeModal={closeManagerModal}  />
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
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setPlayerModalOpen(false)} />
            </View>
            <JoinTeamForm closeModal={closePlayerModal}  />
          </View>
        </SafeAreaView>
      </Modal>

      <View style={styles.greeting_container}>
        <Text style={styles.greeting_heading} >Welcome back, {userName}!</Text>
        <Text style={styles.greeting_body}>Select a team to get started.</Text>
      </View>

      <View style={styles.team_card_container}>
        <DisplayTeams props={props} />
      </View>

      {[uType === "coach" ? openManagerModalButton : openPlayerModalButton]}

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