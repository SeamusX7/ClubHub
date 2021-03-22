import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Style Imports
import news_feed_styles from '../assets/styles/NewsFeedStyle';

export default function NewsFeedPost(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={news_feed_styles.news_feed_card}>
      <View style={news_feed_styles.news_feed_card_content}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}
