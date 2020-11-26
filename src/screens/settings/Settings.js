import React from 'react';
import { StyleSheet, View, Button} from 'react-native';

import SettingsButton from '../../components/SettingsButton';
import LogoutButton from '../../components/LogoutButton';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SettingsButton
        text="Profile"
        onPress={() => navigation.navigate('Profile')} />

      <SettingsButton
        text="ClubHubPlus"
        onPress={() => navigation.navigate('ClubHubPlus')} />

      <SettingsButton
        text="Switch Team"
        onPress={() => navigation.navigate('ChooseTeam')} />

      <SettingsButton
        text="Customisation"
        onPress={() => navigation.navigate('Customisation')} />

      <SettingsButton
        text="Language"
        onPress={() => navigation.navigate('Language')} />

      <SettingsButton
        text="Terms of Service"
        onPress={() => navigation.navigate('TermsOfService')} />

      <SettingsButton
        text="Privacy Policy"
        onPress={() => navigation.navigate('PrivacyPolicy')} />

      <LogoutButton 
        text="Sign Out"
        onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    marginTop:10,
  },
  icon: {
    marginRight: 20,
  },
  
});

