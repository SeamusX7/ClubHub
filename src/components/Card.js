import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function Card(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          {props.children}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 6,
    height: 70,
    borderLeftWidth: 10,
    borderLeftColor: '#5386e4',
  },
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 14,
  }
})
