import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopButton({ icon, chevron, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
      <MaterialCommunityIcons
            name={icon}
            color='#CACCD0'
            size={24}
            style={{marginLeft:10}} />
        <Text style={styles.buttonText}>{text}</Text>
        <MaterialCommunityIcons
            name={chevron}
            color='#CACCD0'
            size={24} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 14,
    flexDirection: 'row',

  },
  buttonText: {
    color: '#0C1821',
    fontSize: 16,
    fontFamily: 'montserrat-medium',
    textAlign: 'left',
    marginLeft:10,
  }
})