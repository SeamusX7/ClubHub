import React, { useState, Component } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Component Imports
import TabViewOverview from './TabViewOverview';
import TabViewAttendance from './TabViewAttendance';
import TabViewInvitations from './TabViewInvitations';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import global_styles from '../../assets/styles/GlobalStyle';

// Redux Imports
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove } from '../../store/activeSession';
import { getUserType } from '../../store/user';

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
  const userType = useSelector(getUserType);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <TabViewOverview />;
      case 'second':
        return <TabViewAttendance />;
        case 'third':
        return <TabViewInvitations />;
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
    
    <View style={global_styles.tab_view_container}>
      <TabView
        renderTabBar= {
          props => <TabBar {...props}
          labelStyle={{ fontSize: 12, fontFamily: 'montserrat-medium', textTransform: 'capitalize' }}
          indicatorStyle={{ backgroundColor: '#5386e4', height: 3 }}
          style={styles.tabBar}
          inactiveColor={'#91999e'}
          activeColor={'#5386e4'} />
        }
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout} />
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 0,
    backgroundColor: '#f0f2f7',
  },
  invitationStatus: {
    top: -30
  }
});