import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import NewsFeedPost from '../../components/NewsFeedPost';

// Style Imports
import global_style from '../../assets/styles/GlobalStyle';
import news_feed_styles from '../../assets/styles/NewsFeedStyle';

export default function SpecificNewsFeedPostTemp1({navigation}) {

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
            <View style={news_feed_styles.news_feed_card_profile_picture}></View>
            <Text style={news_feed_styles.news_feed_card_title}>Eamon Kavanagh</Text>
          </View>
          <View>
            <Text style={news_feed_styles.news_feed_card_posted_on}>20:12</Text>
          </View>
        </View>

        <View style={news_feed_styles.news_feed_card_middle_row}>
          <Text style={news_feed_styles.news_feed_card_description}>We're going to be giving this kickout tactic a shot in training this week.</Text>
          <Image source={require('../../assets/images/kickout.jpg')} style={news_feed_styles.news_feed_card_image_attachment}></Image>
        </View>

        <View style={news_feed_styles.news_feed_card_bottom_row}>
          <View style={news_feed_styles.news_feed_card_like_comment_container}>
            <View style={news_feed_styles.news_feed_card_like_group}>
              <MaterialCommunityIcons name="thumb-up-outline" size={20} color={'#caccd0'} />
              <Text style={news_feed_styles.news_feed_card_icon_text}>Like</Text>
            </View>
            <View style={news_feed_styles.news_feed_card_comment_group}>
              <MaterialCommunityIcons name="comment-outline" size={20} color={'#caccd0'} />
              <Text style={news_feed_styles.news_feed_card_icon_text}>Comment</Text>
            </View>
          </View>
          <View>
            <Text style={news_feed_styles.news_feed_card_comment_count}>3 comments</Text>
          </View>
        </View>
      </NewsFeedPost>

      <View style={news_feed_styles.news_feed_comment_section}>
        <View style={news_feed_styles.news_feed_comment_section_comment_group}>
          <View style={news_feed_styles.news_feed_comment_section_profile_picture}></View>
          <View style={news_feed_styles.news_feed_comment_section_comment_container}>
            <Text style={news_feed_styles.news_feed_comment_section_commenter}>Keane Callan</Text>
            <Text style={news_feed_styles.news_feed_comment_section_commenter_comment}>Excited to give it as shot..</Text>
          </View>
        </View>
        <View style={news_feed_styles.news_feed_comment_section_comment_group}>
          <View style={news_feed_styles.news_feed_comment_section_profile_picture}></View>
          <View style={news_feed_styles.news_feed_comment_section_comment_container}>
            <Text style={news_feed_styles.news_feed_comment_section_commenter}>Jack Lynch</Text>
            <Text style={news_feed_styles.news_feed_comment_section_commenter_comment}>This might be worth looking into!</Text>
          </View>
        </View>
        <View style={news_feed_styles.news_feed_comment_section_comment_group}>
          <View style={news_feed_styles.news_feed_comment_section_profile_picture}></View>
          <View style={news_feed_styles.news_feed_comment_section_comment_container}>
            <Text style={news_feed_styles.news_feed_comment_section_commenter}>Ciaran Whelan</Text>
            <Text style={news_feed_styles.news_feed_comment_section_commenter_comment}>Do you think you're up for this one Jack? ;)</Text>
          </View>
        </View>
      </View>

    </View>
	)
}