import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function PreviousMatchSessionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="View match"
        onPress={() => navigation.navigate('ViewPreviousMatchSession')} />
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