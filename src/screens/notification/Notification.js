import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import Card from '../../components/NotificationCard';
import notification_styles from '../../assets/styles/NotificationStyle';
import MoreButton from '../../components/MoreButton';

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Card onPress={() => navigation.navigate('Message')}>
        <View style={notification_styles.container}>
          <View style={notification_styles.circle}>
            <MaterialCommunityIcons
              name='message-processing'
              size={20}
              color='#5386e4'
              style={notification_styles.icon} />
          </View>
          <View style={notification_styles.textView}>
            <Text style={notification_styles.textOne}>New Message</Text>
            <Text style={notification_styles.textTwo}>Eamon has sent you a message</Text>
          </View>
          <View style={notification_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>

      <Card onPress={() => navigation.navigate('Home')}>
        <View style={notification_styles.container}>
          <View style={notification_styles.circle}>
            <MaterialCommunityIcons
              name='rss'
              size={20}
              color='#5386e4'
              style={notification_styles.icon} />
          </View>
          <View style={notification_styles.textView}>
            <Text style={notification_styles.textOne}>News Feed</Text>
            <Text style={notification_styles.textTwo}>You have been tagged in 3 new posts.</Text>
          </View>
          <View style={notification_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>

      <Card onPress={() => navigation.navigate('Team')}>
        <View style={notification_styles.container}>
          <View style={notification_styles.circle}>
            <MaterialCommunityIcons
              name='message-alert'
              size={20}
              color='#5386e4'
              style={notification_styles.icon} />
          </View>
          <View style={notification_styles.textView}>
            <Text style={notification_styles.textOne}>Feedback</Text>
            <Text style={notification_styles.textTwo}>Your coach has provided feedback.</Text>
          </View>
          <View style={notification_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card>

      <Card onPress={() => navigation.navigate('Team')}>
        <View style={notification_styles.container}>
          <View style={notification_styles.circle}>
            <MaterialCommunityIcons
              name='account-multiple-plus'
              size={20}
              color='#5386e4'
              style={notification_styles.icon} />
          </View>
          <View style={notification_styles.textView}>
            <Text style={notification_styles.textOne}>Invitation</Text>
            <Text style={notification_styles.textTwo}>You have been invited to join Clan na Gael senior team.</Text>
          </View>
          <View style={notification_styles.more}>
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