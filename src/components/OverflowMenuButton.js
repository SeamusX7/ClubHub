import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function OverflowMenuButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons
        name='more-horiz'
        size={22}
        color='#caccd0' />
    </TouchableOpacity>
  )
}