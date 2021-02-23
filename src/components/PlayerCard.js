import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// Redux
import { useSelector } from 'react-redux';
import { getUserType } from '../store/user';

// Local File Imports
import card_styles from '../assets/styles/CardStyle';

export default function Card(props) {
  const uType = useSelector(getUserType);

  return (
    <View>
      {[uType==="coach" ? 
        <TouchableOpacity onPress={props.onPress}>
          <View style={card_styles.card}>
            <View style={styles.cardContent}>
              {props.children} 
            </View>
          </View>
        </TouchableOpacity> : 
      <View>
        <View style={card_styles.card}>
            <View style={styles.cardContent}>
              {props.children} 
            </View>
          </View>
      </View>]}
    </View>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 14,
  }
})
