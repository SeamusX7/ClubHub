import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function SessionScreen({ navigation }) {
  return (
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
});