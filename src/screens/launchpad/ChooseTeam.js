import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, Modal, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

//redux
import { getUserId, getUserType } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';



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
 // const userId = props.extraData.id;
 //const [teams, setTeams] = useState([]);

//  useEffect(() => {

//   console.log("================================"),
//   console.log('teams changed'),
//   console.log("================================")
// }, [teams]);


  const userType = props.extraData.userType;
   const userID = useSelector(getUserId);

   const uType = useSelector(getUserType);

  console.log("=====================================================");
  console.log('user type ----> : ',uType);
  console.log("=====================================================");


  const [modalOpen, setModalOpen] = useState(false);
  
  console.log("=====================================================");
  console.log('user id ----> : ',userID);
  console.log("=====================================================");
 
  
  

  const openModalButton = <FlatButton onPress={() => setModalOpen(true)} />

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
            <CreateTeamForm userId={userID} closeModal={closeModal}  />
          </View>
        </SafeAreaView>
      </Modal>

      <View>
        <Text style={styles.greeting} >Welcome back, {userName}!</Text>
        <Text style={styles.text}>Select a team to get started.</Text>
      </View>

      <View style={styles.cardView} >

        <DisplayTeams props={props}/>

      </View>

      {[userType === uType ? openModalButton : null]}

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
    fontSize: 17,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
    fontSize: 15,
  },
  cardView: {
    marginTop: 30,
    paddingHorizontal: 20,
  }
});