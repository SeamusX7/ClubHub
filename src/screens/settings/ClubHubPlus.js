import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 // Local File Imports
 import FlatButton from '../../components/Button';
 
export default function SettingsScreen() {
  return (
      <ImageBackground
        source={require('./ClubHubPlus.png')}
        style={styles.background}>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
  },
  background: {
    width: '100%',
    height: '110%'
  },

});