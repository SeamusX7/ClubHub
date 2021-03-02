import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={search_styles.search_container}>
      <MaterialIcons name="search" size={24} color="#caccd0" style={search_styles.search_icon} />
      <TextInput
        style={search_styles.search_text_input}
        placeholder="Search"
        placeholderTextColor="#caccd0"
        clearButtonMode="while-editing" />
    </View>
  )
}

const search_styles = StyleSheet.create({
  search_container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    height: 46,
    justifyContent: 'flex-start',
  },
  search_icon: {
    marginLeft: 20,
    marginRight: 14,
    marginTop: 11,
  },
  search_text_input: {
    color: "#0c1821",
    fontFamily: 'montserrat-medium',
    flex: 1,
    marginRight: 10,
  }
})