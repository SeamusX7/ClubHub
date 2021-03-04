import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Local file imports
import medium_card_styles from '../../assets/styles/MediumCardStyle';

// Redux
import { useSelector } from 'react-redux';
import { getUserType } from '../../store/user';

export default function MediumPlayerCard(props) {
  const uType = useSelector(getUserType);

  return (
    <View>
      {[uType==="coach" ? 
        <TouchableOpacity style={medium_card_styles.medium_card} onPress={props.onPress}>
          <View style={medium_card_styles.medium_card_content}>
            {props.children}
          </View>
        </TouchableOpacity>
        :
        <View style={medium_card_styles.medium_card}>
          <View style={medium_card_styles.medium_card_content}>
            {props.children}
          </View>
        </View>
      ]}
    </View>
  )
}