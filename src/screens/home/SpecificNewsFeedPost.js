import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Local file imports
import NewsFeedPost from '../../components/NewsFeedPost';

export default function SpecificNewsFeedPost() {

	return (
		<View style={styles.container}>

      <NewsFeedPost />

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