import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// Local File Imports
import card_styles from '../assets/styles/CardStyle';

export default function Card(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={card_styles.card}>
        <View style={styles.cardContent}>
          {props.children}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 14,
  }
})
