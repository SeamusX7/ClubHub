import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

// Local File Imports
import card_styles from '../assets/styles/CardStyle';
import news_feed_styles from '../assets/styles/NewsFeedStyle';

export default function NewsFeedPost(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={card_styles.newsFeedCard}>
        <View style={news_feed_styles.cardContent}>
          
          {props.children}

        </View>
      </View>
    </TouchableOpacity>
  )
}
