import React from 'react';
import { View, Text } from 'react-native';

// Component Imports
import LargeCard from '../../components/cards/LargeCard';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_styles from '../../assets/styles/LargeCardStyle';

export default function FirstRoute() {
  return (
    <View style={global_styles.screen_container}>

      <Text style={{ ...global_styles.title, marginBottom: 10 }}>Match details</Text>
      <LargeCard>
        <View style={large_card_styles.large_card_container}>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Opponent:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>Fermanagh u19s</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Date:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>5th March 2021</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Kick off:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>12:30</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Home/Away:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>Away</Text>
          </View>
        </View>
      </LargeCard>
    </View>
  )
}