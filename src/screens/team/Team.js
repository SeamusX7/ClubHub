import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function TeamScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Player"
        onPress={() => navigation.navigate('Player')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});