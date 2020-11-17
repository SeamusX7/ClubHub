import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="logout"
        onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
});