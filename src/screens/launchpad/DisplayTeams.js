import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, Modal, Clipboard, TextInput } from 'react-native'
import { firebase } from '../../firebase/config'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import MediumCard from '../../components/cards/MediumCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';
import CancelButton from '../../components/buttons/CustomButton';
import HalfModalButton from '../../components/buttons/HalfModalButton';
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import modal_styles from '../../assets/styles/ModalStyle';
import half_modal_styles from '../../assets/styles/HalfModalStyle';

// Redux Imports
import { getUserId, getUserType } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, activeTeamRemove } from '../../store/activeTeam';

export default function DisplayTeams(prop) {
  const userID = useSelector(getUserId);
  const userType = useSelector(getUserType);
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

  useEffect(() => {

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
        console.log("user is a coach")
      })

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

  const [teamInformationModalOpen, setTeamInformationflowModalOpen] = useState(false);

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
        <SafeAreaView style={half_modal_styles.halfModalContentSmall} >
          <View style={half_modal_styles.halfModalView}>
            <HalfModalButton text='Copy Team ID' primaryIconName='link-variant' secondaryIconName='content-copy' onPress={() => { Clipboard.setString("hhvhNZpFDjVAgpLYPT2X"); alert("Copied to Clipboard!") }} />

            <HalfModalButton text='Team Information' primaryIconName='information-outline' onPress={() => { closeOverflowModal(false); setTeamInformationflowModalOpen(true); }} />

            <CancelButton text="Cancel" onPress={() => closeOverflowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

      <Modal
        visible={teamInformationModalOpen}
        animationType='slide'>

        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>Edit team information</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setTeamInformationflowModalOpen(false)} />
            </View>

            <Text style={modal_styles.labelText}>Club</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter club name...'
              value="Kilkerley Emmets" />

            <Text style={modal_styles.labelText}>Name</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter team name...'
              value="Senior" />

            <View style={{ marginTop: 30 }}>
              <CustomButton
							  text="Save" />
            </View>
            
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