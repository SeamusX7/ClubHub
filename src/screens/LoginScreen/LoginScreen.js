import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import { firebase } from '../../firebase/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 // Local File Imports
import FlatButton from '../../components/Button';
import form_styles from '../../assets/styles/FormStyle';
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
						contentContainerStyle={styles.container}>
					
						<Image
							source={require('../../../src/assets/icon-notext.png')}
							style={auth_styles.logo} />

						<View style={auth_styles.titleContainer}>
							<Text style={auth_styles.titleText}>Sign in</Text>
							<Text style={auth_styles.subtitleText}>Sign in to use our app</Text>
						</View>

						<Text style={form_styles.labelText}>Email</Text>
						<TextInput
							style={form_styles.input}
							placeholder='Enter email...'
							placeholderTextColor="#b7b7b7"
							onChangeText={(text) => setEmail(text)}
							value={email}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
							clearButtonMode="while-editing"
							keyboardType="email-address" />

						<Text style={form_styles.labelText}>Password</Text>
						<TextInput
							style={form_styles.input}
							placeholder="Enter password..."
							placeholderTextColor="#b7b7b7"
							secureTextEntry
							onChangeText={(text) => setPassword(text)}
							value={password}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
							clearButtonMode="while-editing" />

						<Text style={styles.forgotPasswordText}>Forgot password?</Text>

						<FlatButton
							text="Sign in"
							onPress={() => onLoginPress()} />

						<Text style={auth_styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={auth_styles.footerLink}>Sign up</Text></Text>

					</KeyboardAwareScrollView>
				)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f0f2f7',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	forgotPasswordText: {
		fontFamily: 'montserrat-regular',
		marginTop: 8,
		textAlign: 'right',
	}
})