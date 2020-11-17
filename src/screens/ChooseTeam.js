import React from 'react'
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native'

export default function ChooseTeamScreen(props) {
  const userName = props.extraData.fullName;

	return (
		<SafeAreaView style={styles.container}>
			<Text>Welcome back, {userName}!</Text>
      <Button
        title="go to app"
        onPress={() => props.navigation.navigate('TabNavigator')} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});