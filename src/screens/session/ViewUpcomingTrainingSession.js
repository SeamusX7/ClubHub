import React, { useState, Component } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import modal_styles from '../../assets/styles/ModalStyle';
import InvitePlayerModal from './InvitePlayerModal';
import mini_card_styles from '../../assets/styles/MiniCardStyle';


// Local imports
import Formation from './Formation'
import Attendance from './Attendance'
import Invitations from './Invitations'

//redux
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove } from '../../store/activeSession';

const initialLayout = { width: Dimensions.get('window').width };

export default function ViewUpcomingMatchSessionScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  }

  const teamName = useSelector(getActiveTeamName);
  const opposition = useSelector(getactiveSessionOpposition);
  const date = useSelector(getactiveSessionDate);
  const time = useSelector(getactiveSessionTime);
  const location = useSelector(getactiveSessionLocation);

  const dispatch = useDispatch();
  
  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'Attendance' },
    { key: 'third', title: 'Invitations' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Formation />;
      case 'second':
        return <Attendance />;
        case 'third':
        return <Invitations />;
    }
  };


  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{marginLeft: 20}} >
            <Ionicons onPress={() => navigation.navigate('Session')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),
    
    <View style={styles.container}>

      <View style={styles.descriptionContainer}>
        <Text style={styles.textOne}>{teamName} vs. {opposition}</Text>
        <Text style={styles.text_two}>Kick off</Text>
        <Text style={styles.textThree}>{time}</Text>
        <Text style={styles.textFour}>{location} | {date}</Text>
      </View>

      <TabView
        renderTabBar={props => <TabBar {...props}
          // indicatorStyle={{ backgroundColor: 'white' }}
          labelStyle={{ fontSize: 12, fontFamily: 'montserrat-regular', textTransform: 'capitalize' }}
          indicatorStyle={{ backgroundColor: '#5386e4' }}
          style={styles.tabBar}
          inactiveColor={'#333333'}
          activeColor={'#5386e4'} />}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />

      <View style={styles.container2}>
        <Modal
          visible={modalOpen}
          animationType='slide'>
          <SafeAreaView style={modal_styles.modalContent}>
            <View style={modal_styles.modalContent}>
              <View style={modal_styles.modalHeader}>
                <Text style={modal_styles.modalTitle}>Invite Player</Text>
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

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textOne: {
    fontFamily: 'montserrat-semibold',
    fontSize: 16,
  },
  text_two: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    marginTop: 10,
  },
  textThree: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
  },
  textFour: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    marginTop: 10,
  },
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 0,
  },
  container2: {
    padding: 20,
  },
  icon: {
    marginRight: 20,
  },
  textStyle: {
    color: '#333333',
    fontFamily: 'montserrat-semibold',
    fontSize: 16,
    marginTop: 30,
  },
  textContainer: {
    flexDirection: 'row'
  },
  arrowIcon: {
    marginTop: 30,
    marginLeft: 10,
  },
  tabBar: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#f0f2f7',
    marginTop: 30,
  },
  invitationStatus: {
    top: -30
  }
});