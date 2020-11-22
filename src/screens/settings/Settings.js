import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="ClubHubPlus"
        onPress={() => navigation.navigate('ClubHubPlus')} />

<Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')} />

      <Button
        title="Switch Team"
        onPress={() => navigation.navigate('ChooseTeam')} />

      <Button
        title="Customisation"
        onPress={() => navigation.navigate('Customisation')} />

<Button
        title="Language"
        onPress={() => navigation.navigate('Language')} />

<Button
        title="Terms of Service"
        onPress={() => navigation.navigate('TermsOfService')} />

<Button
        title="Privacy Policy"
        onPress={() => navigation.navigate('PrivacyPolicy')} />

      <Button 
        title="logout"
        onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});