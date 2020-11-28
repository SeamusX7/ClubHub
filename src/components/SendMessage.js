import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import FlatButton from '../components/SendButton';

export default function Search() {

  return (
    <View style={styles.inputBox}>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="message-image" size={20} color="#B7B7B7" />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter message..."
          placeholderTextColor="#B7B7B7"
          style={styles.inputMessage}
        />
      </View>
      <FlatButton text="Send" />
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    // marginTop: 500,
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  iconBox: {
    width: 30,
    height: 30,
    backgroundColor: '#F0F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 20,
  },
  input: {
    width: 254,
    height: 30,
    backgroundColor: '#F0F2F7',
    borderRadius: 4,
    marginLeft: 10,
  },
  inputMessage: {
    marginHorizontal: 10,
    marginVertical: 6,
    fontFamily: 'montserrat-medium',
    color: "#333333",
    fontSize: 12,
  }
})

