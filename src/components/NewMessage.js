import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewMessageButton({ onPress }) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name='pencil'
            size={24}
            color="#B7B7B7" />
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    width: 46,
    height: 46,
    borderRadius: 8,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
})