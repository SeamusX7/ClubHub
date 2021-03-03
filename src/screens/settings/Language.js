import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import global_styles from '../../assets/styles/GlobalStyle';

import MediumCard from '../../components/cards/MediumCard';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import OverflowMenuButton from '../../components/OverflowMenuButton';
export default function SettingsScreen({ navigation }) {
  return (
    <View style={global_styles.screen_container}>
      
      <Text style={styles.selectLanguageText}>Select Language</Text>

      <View style={styles.selectLanguage}>
        <Image
          source={require('../../assets/images/english.png')}
          size={10}
          style={styles.languageImage}>
        </Image>
        <Text style={styles.text}>English</Text>
        <Ionicons
          name='ios-checkmark'
          size={40}
          color='#5386E4'
          style={styles.check} />
      </View>

      <View style={styles.selectLanguage}>
        <Image
          source={require('../../assets/images/irish.png')}
          size={10}
          style={styles.languageImage}>
        </Image>
        <Text style={styles.text}>Irish</Text>
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
    height: 64,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
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
    marginLeft: 0,
    color:'#91999E',
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