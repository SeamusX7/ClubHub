import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import FlatButton from '../../components/Button';

export default function SessionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Previous sessions</Text>
      </View>
      <View style={styles.previousSessionContainer}>
        <View style={styles.previousMatchCard}>
        
        </View>
        <View style={styles.previousTrainingCard}>
        
        </View>
        <View style={styles.previousGymCard}>
        
        </View>
      </View>
      <FlatButton
        text="Go to upcoming session"
        onPress={() => navigation.navigate('Upcoming Session')} /> */}


      {/* <Button 
        title="Upcoming session"
        onPress={() => navigation.navigate('ViewUpcomingMatchSession')} />

      <Button 
        title="Previous matches"
        onPress={() => navigation.navigate('PreviousMatchSessions')} />

      <Button 
        title="Previous trainings"
        onPress={() => navigation.navigate('PreviousTrainingSessions')} />

      <Button 
        title="Previous gym sessions"
        onPress={() => navigation.navigate('PreviousGymSessions')} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
  titleTextContainer: {
    backgroundColor: '#f0f2f7',
    paddingLeft: 20,
    paddingTop: 20,
  },
  titleText: {
    color: '#333',
    fontFamily: 'montserrat-semibold',
    fontSize: 15,
    fontWeight: '600',
  },
  previousSessionContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    height: 170,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 8,
    width: '100%',
  },
  previousMatchCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    height: '100%',
    marginRight: 6,
  },
  previousTrainingCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    height: '100%',
    marginLeft: 6,
    marginRight: 6,
  },
  previousGymCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    height: '100%',
    marginLeft: 6,
  },
});