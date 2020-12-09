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

export default function DisplayTeams(x) {

  const [modalOpen, setModalOpen] = useState(false);
  const [teamIdKey, setTeamIdKey] = useState('team id');

  const activeModal = (fact, key) => {
    setTeamIdKey(key.item.key);
    console.log('key ID : ', teamIdKey);
    throwFact(fact);
  }

  const throwFact = (fact) => {
    setModalOpen(fact);
  }


  console.log("x.props.extraData.id: ", x.props.extraData.id);
  //  userId = x.props.extraData.id
  const db = firebase.firestore();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [teams, setTeams] = useState([]); // Initial empty array of teams
  //const userId = props.extraData.id;


  const onGetTeams = (x) => {
    //setTeams([]);
    console.log('(userId) user id 1 : ', x.props.extraData.id, "\n");
    db.collection('team')
      .where('managerId', '==', x.props.extraData.id)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          teams.push({
            ...doc.data(),
            key: doc.id,
          });
          console.log('key : ', doc.id)
        });

        setTeams(teams);
        setLoading(false);

      });
  }

  useEffect(() => {

    return () => console.log("effect   "),
      setTeams([]), onGetTeams(x);
    // Unsubscribe from events when no longer in use
  }, []);



  // if (loading) {
  //   return (
  //     <View style={[styles.container, styles.horizontal]}>
  //       <ActivityIndicator size="large" color="#3b86eb" />
  //     </View>
  //   )
  // }

  return (
    <View>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <Card
            onPress={() => x.props.navigation.navigate('TabNavigator')}
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