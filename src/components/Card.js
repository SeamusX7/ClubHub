import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
      <View style={styles.card}>
        <View style={styles.cardContent} >
          {props.children}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 20,
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
