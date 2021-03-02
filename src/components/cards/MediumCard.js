import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Local file imports
import medium_card_styles from '../../assets/styles/MediumCardStyle';

export default function MediumCard(props) {
  return (
    <TouchableOpacity style={medium_card_styles.medium_card} onPress={props.onPress}>
      <View style={medium_card_styles.medium_card_content}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}