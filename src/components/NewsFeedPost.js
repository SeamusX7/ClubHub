import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

// Local File Imports
import card_styles from '../assets/styles/CardStyle';

export default function NewsFeedPost(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={card_styles.newsFeedCard}>
        <View style={styles.cardContent}>
          <View style={card_styles.circle}></View>
          <Text>Sample title</Text>
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