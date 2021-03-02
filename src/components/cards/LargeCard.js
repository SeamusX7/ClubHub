import React from 'react';
import { View } from 'react-native';

// Local file imports
import large_card_styles from '../../assets/styles/LargeCardStyle';

export default function LargeCard(props) {
  return (
    <View style={large_card_styles.large_card}>
        {props.children}
    </View>
  )
}