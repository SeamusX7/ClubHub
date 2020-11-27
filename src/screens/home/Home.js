import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
	return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

		<View style={styles.container}>
      <Button 
        title="Upcoming Sessions"
        onPress={() => navigation.navigate('Session')} />

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
  icon: {
    marginRight: 20,
  }
});