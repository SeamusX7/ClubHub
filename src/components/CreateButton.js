import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FlatButton({ onPress }) {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <MaterialIcons
            name='add'
            color='#ffffff'
            size={26} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: '#5386e4',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    paddingHorizontal: 12,
    paddingVertical: 12,
    zIndex: 1,
    marginRight: 20,
    marginBottom: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.62,
    elevation: 4,
  }
})