import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Component Imports
import SmallCard from '../../components/cards/SmallCard';
import small_card_styles from '../../assets/styles/SmallCardStyle';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import modal_styles from '../../assets/styles/ModalStyle';


// Redux Imports
import { getUserId } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove, getactiveSessionPending, getactiveSessionDeclined, getactiveSessionAccepted } from '../../store/activeSession';

export default function ThirdRoute() {

  let pending = useSelector(getactiveSessionPending);
  let declined = useSelector(getactiveSessionDeclined);
  let accepted = useSelector(getactiveSessionAccepted);

  const [activeSections, setActiveSections] = useState([]);
  const [acceptedCollapsed, setAcceptedCollapsed] = useState(false);
  const [declinedCollapsed, setDeclinedCollapsed] = useState(false);
  const [pendingCollapsed, setPendingCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [DeclinedItem, setDeclinedItem] = useState();

  const toggleAcceptedExpanded = () => {
    setAcceptedCollapsed(!acceptedCollapsed);
  }
  const toggleDeclinedExpanded = () => {
    setDeclinedCollapsed(!declinedCollapsed);
  }
  const togglePendingExpanded = () => {
    setPendingCollapsed(!pendingCollapsed);
  }

  // declineReason = item => {
  //   console.log("item => ", item);
  //   setModalOpen(true);
  //   setDeclinedItem(() => {
  //     return { item }
  //   });
  // }

  return (
    <ScrollView style={global_styles.screen_container}>

      {/* <Modal
        visible={modalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>Reason for declining</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setModalOpen(false)} />
            </View>

            <Text>Hello</Text>

            <View style={styles.createStyle}>
            </View>
          </View>
        </SafeAreaView>
      </Modal> */}

      <TouchableOpacity onPress={toggleAcceptedExpanded}>
        <Text style={{ ...global_styles.title, marginBottom: 10 }}>Accepted</Text>
      </TouchableOpacity>
      <Collapsible collapsed={acceptedCollapsed} align="center">

        <FlatList
          data={accepted}
          renderItem={({ item }) => (
            <SmallCard>
              <View style={small_card_styles.small_card_status_accepted}></View>
              <Text style={small_card_styles.small_card_text}>{item.Name}</Text>
            </SmallCard>
          )}
        />
      </Collapsible>

      <TouchableOpacity onPress={toggleDeclinedExpanded}>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 20 }}>Declined</Text>
      </TouchableOpacity>
      <Collapsible collapsed={declinedCollapsed} align="center">
        <FlatList
          data={declined}
          renderItem={({ item }) => (
            <SmallCard >
              <View style={small_card_styles.small_card_status_declined}></View>
              <Text style={small_card_styles.small_card_text}>{item.Name}</Text>
              <Text style={small_card_styles.small_card_text}>Reason : {item.Reason}</Text>
            </SmallCard>
          )}
        />
      </Collapsible>

      <TouchableOpacity onPress={togglePendingExpanded}>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 20 }}>Pending</Text>
      </TouchableOpacity>
      <Collapsible collapsed={pendingCollapsed} align="center">

        <FlatList
          data={pending}
          renderItem={({ item }) => (
            <SmallCard>
              <View style={small_card_styles.small_card_status_pending}></View>
              <Text style={small_card_styles.small_card_text}>{item.Name}</Text>
            </SmallCard>
          )}
        />
      </Collapsible>


      {/* <View style={styles.container}>
        <View style={styles.invitationStatus}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Pending</Text>
            <Ionicons
              name='ios-arrow-down'
              size={20}
              color='#333333'
              style={styles.arrowIcon} />
          </View>
          <FlatList
             data={pending}
             renderItem={({ item }) => ( 
          <MiniCardPending><Text style={mini_card_styles.text}>{item.Name}</Text></MiniCardPending>
          )}
          />

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Accepted</Text>
            <Ionicons
              name='ios-arrow-down'
              size={20}
              color='#333333'
              style={styles.arrowIcon} />
          </View>
          <FlatList
             data={accepted}
             renderItem={({ item }) => (
          <MiniCardAccepted><Text style={mini_card_styles.text}>{item.Name}</Text></MiniCardAccepted>
          )}
          />

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Declined</Text>
            <Ionicons
              name='ios-arrow-down'
              size={20}
              color='#333333'
              style={styles.arrowIcon} />
          </View>
          <FlatList
             data={declined}
             renderItem={({ item }) => (
          <MiniCardDeclined><Text style={mini_card_styles.text}>{item.Name}</Text></MiniCardDeclined>
          )}
          />
        </View>
      </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  createStyle: {
    marginTop: 30
  },
  inputAutocompleteContainer: {
    borderWidth: 0,
  },
  itemText: {
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    marginBottom: 3,
    marginLeft: 10,
    marginTop: 3,
  },
  listStyle: {
    backgroundColor: '#f0f2f7',
    borderRadius: 8,
    borderWidth: 0,
    marginTop: 10,
    width: '34%',
  },
  container: {
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    zIndex: 1,
  }
})