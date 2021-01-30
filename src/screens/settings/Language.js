import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.selectLanguageText}>Select Language</Text>

      <View style={styles.selectLanguage}>
        <Image
          source={require('../../assets/images/irish.png')}
          size={10}
          style={styles.languageImage}>
        </Image>
        <Text style={styles.text}>Irish</Text>
        <Ionicons
          name='ios-checkmark'
          size={40}
          color='#5386E4'
          style={styles.check} />
      </View>

      <View style={styles.selectLanguage}>
        <Image
          source={require('../../assets/images/french.png')}
          size={10}
          style={styles.languageImage}>
        </Image>
        <Text style={styles.text}>French</Text>
      </View>

      <View style={styles.selectLanguage}>
        <Image
          source={require('../../assets/images/german.png')}
          size={10}
          style={styles.languageImage}>
        </Image>
        <Text style={styles.text}>German</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    marginTop: 20,
  },
  selectLanguage: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: 58,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  languageImage: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 0,
    marginLeft: 20
  },
  selectLanguageText: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 20,
  },
  text: {
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    position: 'absolute',
    left: 0,
    marginLeft: 70
  },
  check: {
    position: 'absolute',
    right: 0,
    marginRight: 20
  }
});