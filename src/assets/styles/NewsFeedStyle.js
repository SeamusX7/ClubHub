import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  news_feed_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  news_feed_card_content: {
    margin: 20,
  },
  news_feed_card_top_row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  news_feed_card_circle_title_container: {
    flexDirection: 'row',
  },
  news_feed_card_profile_picture: {
    backgroundColor: '#f0f2f7',
    borderRadius: 36/2,
    height: 36,
    width: 36,
  },
  news_feed_card_title: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 15,
    marginLeft: 16,
    marginTop: 10,
  },
  news_feed_card_like_comment_container: {
    flexDirection: 'row',
  },
  news_feed_card_posted_on: {
    color: '#0c1821',
    fontFamily: 'montserrat-regular',
    fontSize: 13,
    marginTop: 12,
  },
  news_feed_card_middle_row: {
    marginTop: 16,
  },
  news_feed_card_description: {
    color: '#0c1821',
    fontFamily: 'montserrat-regular',
    fontSize: 14,
  },
  news_feed_card_bottom_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  news_feed_card_like_group: {
    flexDirection: 'row',
  },
  news_feed_card_comment_group: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  news_feed_card_icon_text: {
    color: '#caccd0',
    fontFamily: 'montserrat-regular',
    marginLeft: 4,
    marginTop: 1,
  },
  news_feed_card_comment_count: {
    color: '#caccd0',
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    marginTop: 4,
  },
  news_feed_card_image_attachment: {
    borderRadius: 8,
    height: 160,
    marginTop: 12,
    width: '100%',
  },
  news_feed_comment_section: {
    flex: 1,
    marginTop: 10,
  },
  news_feed_comment_section_comment_group: {
    flexDirection: 'row',
  },
  news_feed_comment_section_profile_picture: {
    backgroundColor: '#fff',
    borderRadius: 36/2,
    height: 36,
    width: 36,
  },
  news_feed_comment_section_comment_container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  news_feed_comment_section_commenter: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
  },
  news_feed_comment_section_commenter_comment: {
    color: '#0c1821',
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    marginTop: 2,
  }
})