import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FloatingModalButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={floating_modal_button_styles.floating_modal_button_position}>
      <View style={floating_modal_button_styles.floating_modal_button}>
        <MaterialIcons
          name='add'
          color='#ffffff'
          size={26} />
      </View>
    </TouchableOpacity>
  )
}

const floating_modal_button_styles = StyleSheet.create({
  floating_modal_button: {
    backgroundColor: '#5386e4',
    borderRadius: 50 / 2,
    elevation: 4,
    height: 50,
    marginBottom: 20,
    marginRight: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.32,
    shadowRadius: 2.62,
    width: 50,
    zIndex: 1,
  },
  floating_modal_button_position: {
    bottom: 0,
    position: 'absolute',
    right: 0,
  }
})