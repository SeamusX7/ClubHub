import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local file imports
import NewsFeedPost from '../../components/NewsFeedPost';
import news_feed_styles from '../../assets/styles/NewsFeedStyle';
import card_styles from '../../assets/styles/CardStyle';

export default function SpecificNewsFeedPost() {

	return (
		<View style={styles.container}>

      <NewsFeedPost>
        <View style={news_feed_styles.topRow}>
          <View style={news_feed_styles.circleTitle}>
            <View style={card_styles.circle}></View>
            <Text style={news_feed_styles.title}>Eamon Kavanagh</Text>
          </View>
          <View>
            <Text style={news_feed_styles.postedOn}>09:15</Text>
          </View>
        </View>

        <View style={news_feed_styles.middleRow}>
          <Text style={news_feed_styles.description}>Hi lads, I came across this really cool attacking tactic on youtube. Check it out and let me know your thoughts.</Text>
          <Image source={require('../../assets/images/kickout-video.png')} style={news_feed_styles.image}></Image>
        </View>

        <View style={news_feed_styles.bottomRow}>
          <View style={news_feed_styles.likeComment}>
            <View style={news_feed_styles.likeGroup}>
              <MaterialCommunityIcons name="thumb-up-outline" size={20} color={'#b7b7b7'} />
              <Text style={news_feed_styles.iconText}>Like</Text>
            </View>
            <View style={news_feed_styles.commentGroup}>
              <MaterialCommunityIcons name="comment-outline" size={20} color={'#b7b7b7'} />
              <Text style={news_feed_styles.iconText}>Comment</Text>
            </View>
          </View>
          <View>
            <Text style={news_feed_styles.commentCount}>1 comment</Text>
          </View>
        </View>
      </NewsFeedPost>

      <View style={styles.commentSection}>
        <View style={styles.commentGroup}>
          <View style={styles.circle}></View>
          <View style={styles.textBox}>
            <Text style={styles.commentName}>Jack Lynch</Text>
            <Text style={styles.commentText}>This might be worth looking into!</Text>
          </View>
        </View>
      </View>

    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 20,
  },
  icon: {
    marginRight: 20,
  },
  commentSection: {
    flex: 1,
    marginTop: 20,
  },
  commentGroup: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 42 / 2,
    height: 42,
    width: 42,
  },
  textBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  commentName: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
  },
  commentText: {
    color: '#3f3f43',
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    marginTop: 2,
  }
});