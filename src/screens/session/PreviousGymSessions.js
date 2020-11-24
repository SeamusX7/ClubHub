import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function PreviousGymSessionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="View gym session"
        onPress={() => navigation.navigate('ViewPreviousGymSession')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    margin: 20,
  }
});