import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import card_styles from '../assets/styles/CardStyle';

export default function NewsFeedPost(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={card_styles.newsFeedCard}>
        <View style={styles.cardContent}>
          
          <View style={styles.topRow}>
            <View style={styles.circleTitle}>
              <View style={card_styles.circle}></View>
              <Text style={styles.title}>Lorem ipsum</Text>
            </View>
            <View>
              <Text style={styles.postedOn}>09:15</Text>
            </View>
          </View>

          <View style={styles.middleRow}>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.likeComment}>
              <View style={styles.likeGroup}>
                <MaterialCommunityIcons name="thumb-up-outline" size={20} color={'#b7b7b7'} />
                <Text style={styles.iconText}>Like</Text>
              </View>
              <View style={styles.commentGroup}>
                <MaterialCommunityIcons name="comment-outline" size={20} color={'#b7b7b7'} />
                <Text style={styles.iconText}>Comment</Text>
              </View>
            </View>
            <View>
              <Text style={styles.commentCount}>2 comments</Text>
            </View>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#1d3557',
    fontFamily: 'montserrat-bold',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 11,
  },
  circleTitle : {
    flexDirection: 'row',
  },
  likeComment : {
    flexDirection: 'row',
  },
  postedOn: {
    color: '#333',
    fontFamily: 'montserrat-regular',
    marginTop: 11,
  },
  middleRow: {
    marginTop: 14,
  },
  description: {
    color: '#333',
    fontFamily: 'montserrat-regular',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  likeGroup: {
    flexDirection: 'row',
  },
  commentGroup: {
    flexDirection: 'row',
    marginLeft: 14,
  },
  iconText: {
    color: '#b7b7b7',
    fontFamily: 'montserrat-regular',
    marginLeft: 4,
    marginTop: 2,
  },
  commentCount: {
    color: '#b7b7b7',
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    marginTop: 4,
  }
})