import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function SettingsScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/ClubHubPlus.png')}
      style={styles.background}>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
  background: {
    height: '110%',
    width: '100%',
  },
});