import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
	return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <Ionicons onPress={() => navigation.navigate('Message')} name="md-text" size={24} color={'#B7B7B7'} />
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