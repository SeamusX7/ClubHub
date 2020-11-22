import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function PreviousTrainingSessionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="View training"
        onPress={() => navigation.navigate('ViewPreviousTrainingSession')} />
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