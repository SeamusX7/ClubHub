import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import Card from '../../components/Card';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
       <Card onPress={() => navigation.navigate('ViewUpcomingMatchSession')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <MaterialCommunityIcons
              name='android-messages'
              size={20}
              color='#5386e4'
              style={card_styles.icon} />
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>New Message</Text>
            <Text style={card_styles.textTwo}>Seamus has sent you a message</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>

      <Card onPress={() => navigation.navigate('ViewUpcomingMatchSession')}>
        <View style={card_styles.container}>
          <View style={card_styles.circle}>
            <MaterialCommunityIcons
              name='newspaper'
              size={20}
              color='#5386e4'
              style={card_styles.icon} />
          </View>
          <View style={card_styles.textView}>
            <Text style={card_styles.textOne}>News Feed</Text>
            <Text style={card_styles.textTwo}>You have been tagged in 3 new posts.</Text>
          </View>
          <View style={card_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});