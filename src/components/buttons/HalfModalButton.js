import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HalfModalButton({ primaryIconName, secondaryIconName, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={half_modal_button_styles.buttonStyle}>
        <View style={half_modal_button_styles.contentStyle}>
          <MaterialCommunityIcons
            name={primaryIconName}
            color='#caccd0'
            size={24} />
          <Text style={half_modal_button_styles.buttonText}>{text}</Text>
          <MaterialIcons
            name={secondaryIconName}
            color='#caccd0'
            size={22}
            style={half_modal_button_styles.secondaryIconStyle} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const half_modal_button_styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#ffffff',
    height: 46
  },
  contentStyle: {
    flexDirection: 'row'
  },
  buttonText: {
    color: '#0c1821',
    fontSize: 14,
    fontFamily: 'montserrat-medium',
    marginLeft: 10,
    marginTop: 3
  },
  secondaryIconStyle: {
    position: 'absolute',
    right: 0,
  }
})