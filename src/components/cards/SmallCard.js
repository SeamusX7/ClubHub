import React from 'react';
import { View } from 'react-native';

// Style Imports
import small_card_styles from '../../assets/styles/SmallCardStyle';

export default function SmallCard(props) {
  return (
    <View style={small_card_styles.small_card}>
      <View style={small_card_styles.small_card_content}>
        {props.children}
      </View>
    </View>
  )
}