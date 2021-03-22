import React, { useState } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Component Imports
import NewsFeedPost from '../../components/NewsFeedPost';
import NewPostModal from './NewPostModal';
import FloatingModalButton from '../../components/buttons/FloatingModalButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import news_feed_styles from '../../assets/styles/NewsFeedStyle';
import global_styles from '../../assets/styles/GlobalStyle';

// Redux Imports
import { useSelector } from 'react-redux';
import { getUserType } from '../../store/user';

export default function HomeScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const userType = useSelector(getUserType);
  const openModalButton = <FloatingModalButton onPress={() => setModalOpen(true)} />
  const closeModal = () => {
    setModalOpen(false);
  }

	return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 20 }} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

		<View style={global_styles.screen_container}>

      <Modal
        visible={modalOpen}
        animationType='slide'>
        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>New post</Text>
              <MaterialIcons
                name='close'
                color='#0c1821'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setModalOpen(false)} />
            </View>
            <NewPostModal closeModal={closeModal} />
          </View>
        </SafeAreaView>
      </Modal>

      <ScrollView>
        <NewsFeedPost onPress={() => navigation.navigate('SpecificNewsFeedPost')}>
          <View style={news_feed_styles.news_feed_card_top_row}>
              <View style={news_feed_styles.news_feed_card_circle_title_container}>
                <View style={news_feed_styles.news_feed_card_profile_picture}></View>
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

        <NewsFeedPost onPress={() => navigation.navigate('SpecificNewsFeedPostTemp1')}>
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

        <NewsFeedPost onPress={() => navigation.navigate('SpecificNewsFeedPostTemp2')}>
          <View style={news_feed_styles.news_feed_card_top_row}>
              <View style={news_feed_styles.news_feed_card_circle_title_container}>
                <View style={news_feed_styles.news_feed_card_profile_picture}></View>
                <Text style={news_feed_styles.news_feed_card_title}>Eamon Kavanagh</Text>
              </View>
              <Text style={news_feed_styles.news_feed_card_posted_on}>09:15</Text>
            </View>

            <View style={news_feed_styles.news_feed_card_middle_row}>
              <Text style={news_feed_styles.news_feed_card_description}>Hi lads, I came across this really cool attacking tactic on youtube. Check it out and let me know your thoughts.</Text>
              <Image source={require('../../assets/images/kickout-video.png')} style={news_feed_styles.news_feed_card_image_attachment}></Image>
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
                <Text style={news_feed_styles.news_feed_card_comment_count}>1 comment</Text>
              </View>
            </View>
        </NewsFeedPost>
      </ScrollView>

      {[userType === "coach" ? openModalButton : null]}
    </View>
	)
}