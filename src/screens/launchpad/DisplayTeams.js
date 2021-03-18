import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { firebase } from '../../firebase/config'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import MediumCard from '../../components/cards/MediumCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';
import CancelButton from '../../components/buttons/CustomButton';
import HalfModalButton from '../../components/buttons/HalfModalButton';

// Style Imports
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import modal_styles from '../../assets/styles/ModalStyle';
import half_modal_styles from '../../assets/styles/HalfModalStyle';

// Redux Imports
import { getUserId } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
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
  const teamsArray = useSelector(getTeams);

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


  teamSelected = item => {
    setActiveTeam(item);
    dispatch(activeTeamRemove());
    dispatch(activeTeamAdded(item));
    prop.props.navigation.navigate('TabNavigator')
  }

  const [OverflowModalOpen, setOverflowModalOpen] = useState(false);

  const closeOverflowModal = () => {
    setOverflowModalOpen(false);
  }

  return (
    <View>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <MediumCard onPress={() => this.teamSelected({ item })}>
            <View style={medium_card_styles.medium_card_icon_container}>
              <MaterialCommunityIcons name='medal' size={24} color='#5386e4' />
            </View>
            <View style={medium_card_styles.medium_card_info_container}>
              <Text style={medium_card_styles.medium_card_primary_text}>{item.club}</Text>
              <Text style={medium_card_styles.medium_card_secondary_text}>{item.teamName}</Text>
            </View>
            <View style={medium_card_styles.medium_card_overflow_container}>
              {/* <OverflowMenuButton onPress={() => activeModal(true, { item })} /> */}
              <OverflowMenuButton onPress={() => setOverflowModalOpen(true)} />
            </View>
          </MediumCard>
        )} />

      <Modal
        visible={OverflowModalOpen}
        transparent={true}
        animationType='slide'>
        <SafeAreaView style={half_modal_styles.halfModalContentBig} >
          <View style={half_modal_styles.halfModalView}>

            <HalfModalButton text='Copy Team ID' primaryIconName='link-variant' secondaryIconName='content-copy' />

            <HalfModalButton text='Team Information' primaryIconName='information-outline' />

            <HalfModalButton text='Delete Team' primaryIconName='trash-can-outline' />

            <CancelButton text="Cancel" onPress={() => closeOverflowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

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