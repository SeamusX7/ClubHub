import React from 'react';
import { View, Text,} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// Component Imports
import NotificationCard from '../../components/cards/NotificationCard';
import AcceptInvitationButton from '../../components/buttons/AcceptInvitationButton';
import DeclineInvitationButton from '../../components/buttons/DeclineInvitationButton';
import ExpiredInvitationButton from '../../components/buttons/ExpiredInvitationButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import notifications_styles from '../../assets/styles/NotificationCardStyle';

export default function NotificationScreen({ navigation }) {

  return (
    <View style={global_styles.screen_container}>
      <Text style={{...global_styles.title, marginBottom: 10}}>New</Text>
      <NotificationCard>
        <View style={{height: 36}}>
          <View style={notifications_styles.notification_card_top_container}>
            <MaterialCommunityIcons name='trophy-outline' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Match invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
              <View style={notifications_styles.notification_card_status}></View>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <AcceptInvitationButton text="Accept" onPress={ () => { alert('You have accepted the invite!'); } } />
          <DeclineInvitationButton text="Decline" onPress={ () => { alert('You have declined the invite!\nPlease provide a reason you cannot attend:'); } } />
        </View>
      </NotificationCard>

      <Text style={{...global_styles.title, marginBottom: 10, marginTop: 20}}>Earlier</Text>
      <NotificationCard>
        <View style={{height: 36}}>
          <View style={notifications_styles.notification_card_top_container}>
            <Ionicons name='md-football' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Training invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <ExpiredInvitationButton text="Accept" />
          <ExpiredInvitationButton text="Decline" />
        </View>
      </NotificationCard>

      <NotificationCard>
        <View style={{height: 36}}>
          <View style={notifications_styles.notification_card_top_container}>
            <MaterialCommunityIcons name='dumbbell' size={26} color='#5386e4' />
            <View style={notifications_styles.notification_card_info_container}>
              <Text style={notifications_styles.notification_card_primary_text}>Gym invitation</Text>
              <Text style={notifications_styles.notification_card_secondary_text}>18:00 | 21st Jan.</Text>
            </View>
            <View style={notifications_styles.notification_card_time_status_container}>
              <Text style={notifications_styles.notification_card_secondary_text}>09:15</Text>
            </View>
          </View>
        </View>
        <View style={notifications_styles.notification_card_button_container}>
          <ExpiredInvitationButton text="Accept" />
          <ExpiredInvitationButton text="Decline" />
        </View>
      </NotificationCard>
    </View>
  )
}