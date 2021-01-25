import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local file imports
import NewsFeedPost from '../../components/NewsFeedPost';

export default function HomeScreen({ navigation }) {
	return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

		<View style={styles.container}>
      <NewsFeedPost />
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
  }
});