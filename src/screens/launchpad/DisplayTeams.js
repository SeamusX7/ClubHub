import react from 'react';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { firebase } from '../../firebase/config'
import card_styles from '../../assets/styles/CardStyle';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../../components/Card';
import MoreButton from '../../components/MoreButton';

import { SafeAreaView, Modal } from 'react-native'

// Local File Imports
import CreateTeamForm from './CreateTeamForm';
import modal_styles from '../../assets/styles/ModalStyle';
import FlatButton from '../../components/CreateButton';

//redux
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, activeTeamRemove } from '../../store/activeTeam';

export default function DisplayTeams(prop) {

  const userID = useSelector(getUserId);


  
  const [modalOpen, setModalOpen] = useState(false);
  const [teamIdKey, setTeamIdKey] = useState('team id');

  const activeModal = (fact, key) => {
    setTeamIdKey(key.item.key);
    throwFact(fact);
  }

  const throwFact = (fact) => {
    setModalOpen(fact);
  }
  
  const db = firebase.firestore();
  const [teams, setTeams] = useState([]); // Initial empty array of teams
  const [activeTeam, setActiveTeam] = useState([]);
  const dispatch = useDispatch();

 // const onGetTeams = (userID) => {
    // db.collection('team')
    //   .where('managerId', '==', userID)
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       teams.push({
    //         ...doc.data(),
    //         key: doc.id,
    //       });
    //     });

    //     setTeams(teams);
    //     dispatch(teamsAdded(teams));

    //   });
 // }
  const teamsArray = useSelector(getTeams);
 


  useEffect(() => {

      //setTeams([])
      // onGetTeams(userID);

      db.collection('team')
      .where('managerId', '==', userID)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          teams.push({
            ...doc.data(),
            key: doc.id,
          });
        });

        setTeams(teams);
        dispatch(teamsAdded(teams));

      });

   
  }, [teams]);


  teamSelected = item =>
  {
    setActiveTeam(item);
    dispatch(activeTeamRemove());
    dispatch(activeTeamAdded(item));

    prop.props.navigation.navigate('TabNavigator')
  }

  return (
    <View>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <Card
            // onPress={() => x.props.navigation.navigate('TabNavigator')}
            onPress={() => this.teamSelected({item})}
          >
            <View style={card_styles.container}>
              <View style={card_styles.circle} >
                <MaterialCommunityIcons
                  name='trophy-outline'
                  size={20}
                  color='#5386e4'
                  style={card_styles.icon} />
              </View>
              <View style={card_styles.textView} >
                {/* <DisplayTeams userId={userId} string='hello' /> */}
                <Text style={card_styles.textOne} >{item.club}</Text>
                <Text style={card_styles.textTwo} >{item.teamName}</Text>
              </View>
              <View style={card_styles.more} >
                <MoreButton onPress={() => activeModal(true, { item })} />
              </View>
            </View>
          </Card>
        )}
      />

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
            <Text>{teamIdKey}</Text>
          </View>
        </SafeAreaView>
      </Modal>

    </View>

  );

}

const styles = StyleSheet.create({
  list: {
    margin: 50
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});