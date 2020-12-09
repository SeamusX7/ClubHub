import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <MaterialIcons name="search" size={22} color="#B7B7B7" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#B7B7B7" 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flex: 1,
    // width: 270,
    height: 46,
    borderRadius: 8,
  },
  searchIcon: {
    marginHorizontal: 10,
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'montserrat-regular',
    color: "#333333"
  }
})