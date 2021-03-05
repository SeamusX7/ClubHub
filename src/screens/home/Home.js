import React, { useState } from 'react';
import { StyleSheet, View, Modal, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Component Imports
import NewsFeedPost from '../../components/NewsFeedPost';
import NewPostModal from './NewPostModal';
import FloatingModalButton from '../../components/buttons/FloatingModalButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import card_styles from '../../assets/styles/CardStyle';
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
                color='#333'
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

        <NewsFeedPost onPress={() => navigation.navigate('SpecificNewsFeedPost')}>
          <View style={news_feed_styles.topRow}>
              <View style={news_feed_styles.circleTitle}>
                <View style={card_styles.circle}></View>
                <Text style={news_feed_styles.title}>Eamon Kavanagh</Text>
              </View>
              <View>
                <Text style={news_feed_styles.postedOn}>14:25</Text>
              </View>
            </View>

            <View style={news_feed_styles.middleRow}>
              <Text style={news_feed_styles.description}>Lads, would there be much interest in organising a 5km team run?</Text>
            </View>

            <View style={news_feed_styles.bottomRow}>
              <View style={news_feed_styles.likeComment}>
                <View style={news_feed_styles.likeGroup}>
                  <MaterialCommunityIcons name="thumb-up" size={20} color={'#5386e4'} />
                  <Text style={{...news_feed_styles.iconText, color: '#5386e4'}}>Like</Text>
                </View>
                <View style={news_feed_styles.commentGroup}>
                  <MaterialCommunityIcons name="comment-outline" size={20} color={'#b7b7b7'} />
                  <Text style={news_feed_styles.iconText}>Comment</Text>
                </View>
              </View>
              <View>
                <Text style={news_feed_styles.commentCount}>0 comments</Text>
              </View>
            </View>
        </NewsFeedPost>

        <NewsFeedPost onPress={() => navigation.navigate('SpecificNewsFeedPost')}>
          <View style={news_feed_styles.topRow}>
              <View style={news_feed_styles.circleTitle}>
                <View style={card_styles.circle}></View>
                <Text style={news_feed_styles.title}>Eamon Kavanagh</Text>
              </View>
              <View>
                <Text style={news_feed_styles.postedOn}>20:12</Text>
              </View>
            </View>

            <View style={news_feed_styles.middleRow}>
              <Text style={news_feed_styles.description}>We're going to be giving this kickout tactic a shot in training this week.</Text>
              <Image source={require('../../assets/images/kickout.png')} style={news_feed_styles.image}></Image>
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
                <Text style={news_feed_styles.commentCount}>3 comments</Text>
              </View>
            </View>
        </NewsFeedPost>
      </ScrollView>

      {[userType === "coach" ? openModalButton : null]}
    </View>
	)
}