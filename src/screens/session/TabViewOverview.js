import React from 'react';
import { View, Text } from 'react-native';

// Component Imports
import LargeCard from '../../components/cards/LargeCard';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_styles from '../../assets/styles/LargeCardStyle';
// Redux Imports
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove } from '../../store/activeSession';

export default function FirstRoute() {
  const teamName = useSelector(getActiveTeamName);
  const opposition = useSelector(getactiveSessionOpposition);
  const date = useSelector(getactiveSessionDate);
  const time = useSelector(getactiveSessionTime);
  const location = useSelector(getactiveSessionLocation);
  const dispatch = useDispatch();
  return (
    <View style={global_styles.screen_container}>

      <Text style={{ ...global_styles.title, marginBottom: 10 }}>Match details</Text>
      <LargeCard>
        <View style={large_card_styles.large_card_container}>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Opponent:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>{opposition}</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Date:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>{date}</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Kick off:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>{time}</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Home/Away:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>{location}</Text>
          </View>
        </View>
      </LargeCard>
    </View>
  )
}