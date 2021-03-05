import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import { firebase } from '../../firebase/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 // Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import auth_styles from '../../assets/styles/AuthStyle';

export default function LoginScreen( {navigation} ) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onFooterLinkPress = () => {
		navigation.navigate('Registration');
	}

	const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid
				const usersRef = firebase.firestore().collection('users')
				usersRef
					.doc(uid)
					.get()
					.then(firestoreDocument => {
						if (!firestoreDocument.exists) {
							alert("User does not exist anymore.")
								return;
							}
							const user = firestoreDocument.data()
							navigation.navigate('ChooseTeam', {user: user})
						})
						.catch(error => {
							alert(error)
						});
					})
					.catch(error => {
						alert(error)
					})
					Keyboard.dismiss();
    		}

    		return (
					<KeyboardAwareScrollView
						contentContainerStyle={auth_styles.auth_screen_container}>
					
						<Image
							source={require('../../../src/assets/icon-notext.png')}
							style={auth_styles.logo} />

						<View style={auth_styles.title_container}>
							<Text style={auth_styles.title_text}>Sign in</Text>
							<Text style={auth_styles.subtitle_text}>Sign in to use our app</Text>
						</View>

						<Text style={auth_styles.auth_label_text}>Email</Text>
						<TextInput
							style={auth_styles.auth_input}
							placeholder='Enter email...'
							placeholderTextColor="#caccd0"
							onChangeText={(text) => setEmail(text)}
							value={email}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
							clearButtonMode="while-editing"
							keyboardType="email-address" />

						<Text style={auth_styles.auth_label_text}>Password</Text>
						<TextInput
							style={auth_styles.auth_input}
							placeholder="Enter password..."
							placeholderTextColor="#caccd0"
							secureTextEntry
							onChangeText={(text) => setPassword(text)}
							value={password}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
							clearButtonMode="while-editing" />

						<Text style={auth_styles.forgot_password_text}>Forgot password?</Text>

						<View style={{ marginTop: 30 }}>
							<CustomButton
								text="Sign in"
								onPress={() => onLoginPress()} />
						</View>

						<Text style={auth_styles.footer_text}>Don't have an account? <Text onPress={onFooterLinkPress} style={auth_styles.footer_link}>Sign up</Text></Text>

					</KeyboardAwareScrollView>
				)
}