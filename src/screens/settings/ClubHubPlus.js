import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({navigation}) {
  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{marginLeft: 20}} >
            <Ionicons onPress={() => navigation.navigate('Settings')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

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