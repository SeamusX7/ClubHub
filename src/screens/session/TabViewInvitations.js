import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

// Component Imports
import SmallCard from '../../components/cards/SmallCard';
import small_card_styles from '../../assets/styles/SmallCardStyle';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';

// Redux Imports
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

  const [activeSections, setActiveSections] = useState([]);
  const [acceptedCollapsed, setAcceptedCollapsed] = useState(false);
  const [declinedCollapsed, setDeclinedCollapsed] = useState(false);
  const [pendingCollapsed, setPendingCollapsed] = useState(false);

  const toggleAcceptedExpanded = () => {
    setAcceptedCollapsed(!acceptedCollapsed);
  }
  const toggleDeclinedExpanded = () => {
    setDeclinedCollapsed(!declinedCollapsed);
  }
  const togglePendingExpanded = () => {
    setPendingCollapsed(!pendingCollapsed);
  }

  return (
    <ScrollView style={global_styles.screen_container}>

      <TouchableOpacity onPress={toggleAcceptedExpanded}>
        <Text style={{...global_styles.title, marginBottom: 10}}>Accepted</Text>
      </TouchableOpacity>
      <Collapsible collapsed={acceptedCollapsed} align="center">
        <SmallCard>
          <View style={small_card_styles.small_card_status_accepted}></View>
          <Text style={small_card_styles.small_card_text}>Shane McCleary</Text>
        </SmallCard>
        <SmallCard>
          <View style={small_card_styles.small_card_status_accepted}></View>
          <Text style={small_card_styles.small_card_text}>Jack Lynch</Text>
        </SmallCard>
      </Collapsible>

      <TouchableOpacity onPress={toggleDeclinedExpanded}>
        <Text style={{...global_styles.title, marginBottom: 10, marginTop: 20}}>Declined</Text>
      </TouchableOpacity>
      <Collapsible collapsed={declinedCollapsed} align="center">
        <SmallCard>
          <View style={small_card_styles.small_card_status_declined}></View>
          <Text style={small_card_styles.small_card_text}>Ciaran Whelan</Text>
        </SmallCard>
      </Collapsible>

      <TouchableOpacity onPress={togglePendingExpanded}>
        <Text style={{...global_styles.title, marginBottom: 10, marginTop: 20}}>Pending</Text>
      </TouchableOpacity>
      <Collapsible collapsed={pendingCollapsed} align="center">
        <SmallCard>
          <View style={small_card_styles.small_card_status_pending}></View>
          <Text style={small_card_styles.small_card_text}>Keane Callan</Text>
        </SmallCard>
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