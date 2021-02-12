import React, { useState } from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import Card from '../../components/NotificationCard';
import Card2 from '../../components/NotificationCardLarge';
import notification_styles from '../../assets/styles/NotificationStyle';
import MoreButton from '../../components/MoreButton';
import AcceptButton from '../../components/AcceptButton';
import DeclineButton from '../../components/DeclineButton';

export default function NotificationScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

      

      <Card2 style={notification_styles.card2}>
        <View style={notification_styles.container}>
          <View style={notification_styles.circle}>
            <MaterialCommunityIcons
              name='soccer'
              size={20}
              color='#5386e4'
              style={notification_styles.icon} />
          </View>
          <View style={notification_styles.textView}>
            <Text style={notification_styles.textOne}>Training Session</Text>
            <Text style={notification_styles.textSpace}>Are you able to attend training tomorrow at 6pm?</Text>
            <View style={{ flexDirection:"row" }}>
          <View>
            <AcceptButton
              text="Accept"
              onPress={() => {
              alert('You have accepted training!');
            }}
            />
          </View>
          <View>
            <DeclineButton
              text="Decline"
              onPress={() => {
              alert('You have declined training!                        Please provide a reason you cannot attend:');
            }}
            />
          </View>
          </View>
          </View>
          <View style={notification_styles.more}>
            <MoreButton onPress={() => console.log('Tap')} />
          </View>
        </View>
      </Card2>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});