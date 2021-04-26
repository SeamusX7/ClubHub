import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import NewsFeedPost from '../../components/NewsFeedPost';

// Style Imports
import global_style from '../../assets/styles/GlobalStyle';
import news_feed_styles from '../../assets/styles/NewsFeedStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';

export default function SpecificNewsFeedPost({navigation}) {

	return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{marginLeft: 20}} >
            <Ionicons onPress={() => navigation.navigate('Home')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

		<View style={global_style.screen_container}>

    <NewsFeedPost>
      <View style={news_feed_styles.news_feed_card_top_row}>
          <View style={news_feed_styles.news_feed_card_circle_title_container}>
          <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-5.png')}
              />
            <Text style={news_feed_styles.news_feed_card_title}>Eamon Kavanagh</Text>
          </View>
          <View>
            <Text style={news_feed_styles.news_feed_card_posted_on}>14:25</Text>
          </View>
        </View>

        <View style={news_feed_styles.news_feed_card_middle_row}>
          <Text style={news_feed_styles.news_feed_card_description}>Lads, would there be much interest in organising a 5km team run?</Text>
        </View>

        <View style={news_feed_styles.news_feed_card_bottom_row}>
          <View style={news_feed_styles.news_feed_card_like_comment_container}>
            <View style={news_feed_styles.news_feed_card_like_group}>
              <MaterialCommunityIcons name="thumb-up" size={20} color={'#5386e4'} />
              <Text style={{...news_feed_styles.news_feed_card_icon_text, color: '#5386e4'}}>Like</Text>
            </View>
            <View style={news_feed_styles.news_feed_card_comment_group}>
              <MaterialCommunityIcons name="comment-outline" size={20} color={'#caccd0'} />
              <Text style={news_feed_styles.news_feed_card_icon_text}>Comment</Text>
            </View>
          </View>
          <View>
            <Text style={news_feed_styles.news_feed_card_comment_count}>0 comments</Text>
          </View>
        </View>
      </NewsFeedPost>

    </View>
	)
}