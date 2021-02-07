import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import mini_card_styles from '../../assets/styles/MiniCardStyle';

import MiniCardPending from '../../components/MiniCardPending'
import MiniCardAccepted from '../../components/MiniCardAccepted'
import MiniCardDeclined from '../../components/MiniCardDeclined'

export default function ThirdRoute() {
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
          <MiniCardPending><Text style={mini_card_styles.text}>Keane Callan</Text></MiniCardPending>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Accepted</Text>
            <Ionicons
              name='ios-arrow-down'
              size={20}
              color='#333333'
              style={styles.arrowIcon} />
          </View>
          <MiniCardAccepted><Text style={mini_card_styles.text}>Jack Lynch</Text></MiniCardAccepted>

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Declined</Text>
            <Ionicons
              name='ios-arrow-down'
              size={20}
              color='#333333'
              style={styles.arrowIcon} />
          </View>
          <MiniCardDeclined><Text style={mini_card_styles.text}>Shane McCleary</Text></MiniCardDeclined>
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