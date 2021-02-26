import React from 'react';
import { StyleSheet, View, ScrollView, Text,  FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import mini_card_styles from '../../assets/styles/MiniCardStyle';

import MiniCardPending from '../../components/MiniCardPending'
import MiniCardAccepted from '../../components/MiniCardAccepted'
import MiniCardDeclined from '../../components/MiniCardDeclined'


//redux
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove, getactiveSessionPending, getactiveSessionDeclined, getactiveSessionAccepted } from '../../store/activeSession';

export default function ThirdRoute() {

  let pending = useSelector(getactiveSessionPending);
  let declined = useSelector(getactiveSessionDeclined);
  let accepted = useSelector(getactiveSessionAccepted);

  return (
    <ScrollView>
      <View style={styles.container}>
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
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    margin: 20,
    bottom: 20
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
});