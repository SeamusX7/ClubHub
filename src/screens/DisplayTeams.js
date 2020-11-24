import react from 'react';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { firebase } from '../firebase/config'
// import TeamItem from './TeamItem'


export default function DisplayTeams(userId) {
  const db = firebase.firestore();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [teams, setTeams] = useState([]); // Initial empty array of users

  const onGetTeams = (userId) => {
    setTeams([]);
    // const subscriber =
    console.log('user id ', userId);
    db.collection('team').where('managerId', '==', userId).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          teams.push({
            ...doc.data(),
            key: doc.id,
          });
          console.log('key : ', doc.id)
        });

        setTeams(teams);
        setLoading(false);
        
      });
  }

  useEffect(() => {

    onGetTeams(userId);
    // Unsubscribe from events when no longer in use
    // return () => subscriber();
  }, []);



  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#3b86eb" />
      </View>
    )
  }

  return (
    <FlatList
      style={styles.list}
      data={teams}
      renderItem={({ item }) => (
        <View style={{ fontSize: 20, height: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text>Team Name: {item.teamName}</Text>
          <Button
            title={item.teamName}
         //   props =  {...props} Team={item}
         //onPress={() => props.navigation.navigate('TabNavigator')}
          />

        </View>
      )}
    />
  );

}

const styles = StyleSheet.create({
  list: {
    margin: 50
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});