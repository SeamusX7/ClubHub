import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Local file imports
import square_card_styles from '../../assets/styles/SquareCardStyle';

export default function SquareCardRight(props) {
  return (
    <TouchableOpacity style={square_card_styles.square_card_right} onPress={props.onPress}>
      <View style={square_card_styles.square_card_content}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}