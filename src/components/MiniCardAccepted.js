import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// Local File Imports
import mini_card_styles from '../assets/styles/MiniCardStyle';

export default function MiniCard(props) {
  return (
    <View style={mini_card_styles.cardAccepted}>{props.children}</View>
  )
}