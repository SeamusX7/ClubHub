import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SessionScreen({ navigation }) {
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
        title="Previous match sessions"
        onPress={() => navigation.navigate('PreviousMatchSessions')} />

      <Button
        title="Previous training sessions"
        onPress={() => navigation.navigate('PreviousTrainingSessions')} />

      <Button
        title="Previous gym sessions"
        onPress={() => navigation.navigate('PreviousGymSessions')} />

      <Button
        title="Upcoming session"
        onPress={() => navigation.navigate('ViewUpcomingMatchSession')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
  icon: {
    marginRight: 20,
  }
});