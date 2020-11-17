import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
      <Button 
        title="Upcoming Sessions"
        onPress={() => navigation.navigate('ViewUpcomingMatchSession')} />

      <Button 
        title="Notifications"
        onPress={() => navigation.navigate('Notification')} />

      <Button 
        title="Settings"
        onPress={() => navigation.navigate('Settings')} />
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});