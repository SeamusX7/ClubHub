import React, { useState, useEffect } from 'react';
import { View, Text, Flatlist, TextInput, SafeAreaView, Modal } from 'react-native';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { firebase } from '../../firebase/config';
import moment from 'moment'


// Component Imports
import NotificationCard from '../../components/cards/NotificationCard';
import AcceptInvitationButton from '../../components/buttons/AcceptInvitationButton';
import DeclineInvitationButton from '../../components/buttons/DeclineInvitationButton';
import ExpiredInvitationButton from '../../components/buttons/ExpiredInvitationButton';
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import notifications_styles from '../../assets/styles/NotificationCardStyle';
import modal_styles from '../../assets/styles/ModalStyle';
import half_modal_styles from '../../assets/styles/HalfModalStyle';
import { StyleSheet } from 'react-native';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey, activeSessionRemove } from '../../store/activeSession';
import { getUserId, getUserName } from '../../store/user';
import { FlatList } from 'react-native-gesture-handler';

export default function NotificationScreen({ navigation }) {

  const userID = useSelector(getUserId);
  const userName = useSelector(getUserName);
  const [notificationsList, setNotificationsList] = useState([]); // Initial empty array of sessions
  const [voidNotificationsList, setVoidNotificationsList] = useState([]); // Initial empty array of sessions
  const db = firebase.firestore();

  const getTime = item => {
    const time = new Date(item.created.toDate()).toLocaleTimeString('en-GB')
    return time;
  }

  const getTimeFromTimeStamp = item => {
    const time = new Date(item.timeStamp.toDate()).toLocaleTimeString('en-GB')
    return time;
  }

  const getDateFromTimeStamp = item => {
    const time = new Date(item.timeStamp.toDate()).toLocaleDateString('en-GB')
    return time;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [declinedItem, setDeclinedItem] = useState();
  const [reason, setReason] = useState();


  const closeModal = (fact) => {
    setModalOpen(false);
  }

  accept = item => {
    alert('You have accepted the invite!');
    var sessionsRef = db.collection('sessions').doc(item.item.key);


    sessionsRef.get().then((doc) => {

      var acceptedArray = doc.data().Accepted;
      var pendingArray = doc.data().Pending;
      var pendingIDArray = doc.data().PendingPlayersIDArray;
      var notPendingIDArray = doc.data().NotPendingPlayersIDArray;


      var pendingArrayLength = pendingArray.length;
      var j = 0;

      for (j; j < pendingArrayLength; j++) {

        if (pendingArray[j]) {

          if (pendingArray[j].ID === userID) {
            pendingArray.splice(j, 1);
            j--;
          }

        }

      }

      var arrayLength = pendingIDArray.length;
      var i = 0;

      for (i; i < arrayLength; i++) {

        if (pendingIDArray[i] === userID) {
          pendingIDArray.splice(i, 1);
          i--;
        }

      }

      var newPlayersObject = {
        ID: userID,
        Name: userName,
      }

      acceptedArray.push(newPlayersObject);
      notPendingIDArray.push(userID);

      sessionsRef.update({
        Accepted: acceptedArray,
        Pending: pendingArray,
        PendingPlayersIDArray: pendingIDArray,
        NotPendingPlayersIDArray: notPendingIDArray
      });



    });
  }



  decline = () => {
    var item = { declinedItem };
    setModalOpen(false);
    alert('You have declined the invite!');
    console.log("item 2 => ", item.declinedItem.item.item.key);
    var sessionsRef = db.collection('sessions').doc(item.declinedItem.item.item.key);


    sessionsRef.get().then((doc) => {

      var declinedArray = doc.data().Declined;
      var pendingArray = doc.data().Pending;
      var pendingIDArray = doc.data().PendingPlayersIDArray;
      var notPendingIDArray = doc.data().NotPendingPlayersIDArray;

      var pendingArrayLength = pendingArray.length;
      var j = 0;

      for (j; j < pendingArrayLength; j++) {

        if (pendingArray[j]) {

          if (pendingArray[j].ID === userID) {
            pendingArray.splice(j, 1);
            j--;
          }

        }

      }

      var arrayLength = pendingIDArray.length;
      var i = 0;

      for (i; i < arrayLength; i++) {

        if (pendingIDArray[i] === userID) {
          pendingIDArray.splice(i, 1);
          i--;
        }

      }

      var newPlayersObject = {
        ID: userID,
        Name: userName,
        Reason: reason,
      }

      declinedArray.push(newPlayersObject);
      notPendingIDArray.push(userID);

      sessionsRef.update({
        Declined: declinedArray,
        Pending: pendingArray,
        PendingPlayersIDArray: pendingIDArray,
        NotPendingPlayersIDArray: notPendingIDArray
      });



    });
  }

  // const [declinedItem, setDeclinedItem] = useState();

  declineReason = item => {
    console.log("item => ", item);
    setModalOpen(true);
    setDeclinedItem(() => {
      return { item }
    });



    //setLightState(prevLightState => ({...prevLightState, ...newState}))

  }

  useEffect(() => {
    const subscriber = db
      .collection('sessions')
      .where('NotPendingPlayersIDArray', 'array-contains', userID)
      .onSnapshot(querySnapshot => {
        const voidNotifications = [];

        querySnapshot.forEach(documentSnapshot => {
          voidNotifications.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setVoidNotificationsList(voidNotifications);

      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);



  useEffect(() => {
    var today = new Date();
    const subscriber = db
      .collection('sessions')
      .where('PendingPlayersIDArray', 'array-contains', userID)
      .where('timeStamp', '>', today)
      .onSnapshot(querySnapshot => {
        const notifications = [];

        querySnapshot.forEach(documentSnapshot => {
          notifications.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setNotificationsList(notifications);

      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={global_styles.screen_container}>

      <Modal
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
            <TextInput
              style={modal_styles.modal_input}
              placeholder='Reason...'
              onChangeText={(explanation) => setReason(explanation)}
              value={reason}
            />
            <View style={styles.createStyle}>
              <CustomButton
                text="Create"
                onPress={() => this.decline()} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <Text style={{ ...global_styles.title, marginBottom: 10 }}>New</Text>

      <FlatList
        data={notificationsList}
        renderItem={({ item }) => (
          <NotificationCard>
            <View style={{ height: 36 }}>
              <View style={notifications_styles.notification_card_top_container}>
                {item.sessionType == "match" ? <MaterialCommunityIcons name='trophy-outline' size={26} color='#5386e4' />
                  : item.sessionType == "training" ? <Ionicons name='md-football' size={26} color='#5386e4' />
                    : <MaterialCommunityIcons name='dumbbell' size={26} color='#5386e4' />}
                <View style={notifications_styles.notification_card_info_container}>
                  {item.sessionType == "match" ? <Text style={notifications_styles.notification_card_primary_text}>Match invitation Vs. {item.opposition}</Text> : <Text style={notifications_styles.notification_card_primary_text}>{item.title}</Text>}
                  <Text style={notifications_styles.notification_card_secondary_text}>{getTimeFromTimeStamp(item)} | {getDateFromTimeStamp(item)}</Text>
                </View>
                <View style={notifications_styles.notification_card_time_status_container}>
                  <Text style={notifications_styles.notification_card_secondary_text}>{getTime(item)}</Text>
                  <View style={notifications_styles.notification_card_status}></View>
                </View>
              </View>
            </View>
            <View style={notifications_styles.notification_card_button_container}>
              <AcceptInvitationButton text="Accept" onPress={() => this.accept({ item })} />
              <DeclineInvitationButton text="Decline" onPress={() => this.declineReason({ item })} />
            </View>
          </NotificationCard>
        )}
      />
      {/* <NotificationCard>
        <View style={{height: 36}}>
          <View style={notifications_styles.notification_card_top_container}>
            <MaterialCommunityIcons name='trophy-outline' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Match invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
              <View style={notifications_styles.notification_card_status}></View>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <AcceptInvitationButton text="Accept" onPress={ () => { alert('You have accepted the invite!'); } } />
          <DeclineInvitationButton text="Decline" onPress={ () => { alert('You have declined the invite!\nPlease provide a reason you cannot attend:'); } } />
        </View>
      </NotificationCard> */}



      <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 20 }}>Earlier</Text>

      <FlatList
        data={voidNotificationsList}
        renderItem={({ item }) => (
          <NotificationCard>
            <View style={{ height: 36 }}>
              <View style={notifications_styles.notification_card_top_container}>
                {item.sessionType == "match" ? <MaterialCommunityIcons name='trophy-outline' size={26} color='#5386e4' />
                  : item.sessionType == "training" ? <Ionicons name='md-football' size={26} color='#5386e4' />
                    : <MaterialCommunityIcons name='dumbbell' size={26} color='#5386e4' />}
                <View style={notifications_styles.notification_card_info_container}>
                  {item.sessionType == "match" ? <Text style={notifications_styles.notification_card_primary_text}>Match invitation Vs. {item.opposition}</Text> : <Text style={notifications_styles.notification_card_primary_text}>{item.title}</Text>}
                  <Text style={notifications_styles.notification_card_secondary_text}>{getTimeFromTimeStamp(item)} | {getDateFromTimeStamp(item)}</Text>
                </View>
                <View style={notifications_styles.notification_card_time_status_container}>
                  <Text style={notifications_styles.notification_card_secondary_text}>{getTime(item)}</Text>
                  <View style={notifications_styles.notification_card_status}></View>
                </View>
              </View>
            </View>
            <View style={notifications_styles.notification_card_button_container}>
            <ExpiredInvitationButton text="Accept" />
          <ExpiredInvitationButton text="Decline" />
            </View>
          </NotificationCard>
        )}
      />

      {/* <NotificationCard>
        <View style={{ height: 36 }}>
          <View style={notifications_styles.notification_card_top_container}>
            <Ionicons name='md-football' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Training invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <ExpiredInvitationButton text="Accept" />
          <ExpiredInvitationButton text="Decline" />
        </View>
      </NotificationCard>

      <NotificationCard>
        <View style={{ height: 36 }}>
          <View style={notifications_styles.notification_card_top_container}>
            <MaterialCommunityIcons name='dumbbell' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Gym invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <ExpiredInvitationButton text="Accept" />
          <ExpiredInvitationButton text="Decline" />
        </View>
      </NotificationCard> */}
    </View>
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