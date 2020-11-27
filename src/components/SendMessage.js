import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Search() {
  return (
      <View style={styles.inputBox} >
        <MaterialCommunityIcons name="message-image" size={20} color="#B7B7B7" />
        <TextInput
          placeholder="Enter message..."
          placeholderTextColor="#B7B7B7"
        />
        <Button title="Send" />
      </View>
  )
}

const styles = StyleSheet.create({
  // searchContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   backgroundColor: '#ffffff',
  //   width: 254,
  //   height: 30,
  //   borderRadius: 8,
  // },
  // searchIcon: {
  //   marginHorizontal: 10,
  //   marginVertical: 12,
  // },
  // searchInput: {
  //   flex: 1,
  //   fontFamily: 'montserrat-regular',
  //   color: "#333333"
  // }
  inputBox: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    zIndex: 1,
  }
})