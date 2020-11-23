import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';

// Local File Imports
import FlatButton from '../../components/Button';
import form_styles from '../../assets/styles/FormStyle';
import auth_styles from '../../assets/styles/AuthStyle';

export default function RegistrationScreen({ navigation }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onFooterLinkPress = () => {
		navigation.navigate('Login');
	}

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.");
			return
		}

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid
				const user = {
					id: uid,
					email,
					fullName,
				};
				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(uid)
					.set(user)
					.then(() => {
						navigation.navigate('ChooseTeam', { user: user });
					})
					.catch((error) => {
						alert(error)
					});
			})
			.catch((error) => {
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
				<Text style={auth_styles.titleText}>Sign up</Text>
				<Text style={auth_styles.subtitleText}>Sign up to use our app</Text>
			</View>

			<Text style={form_styles.labelText}>Full Name</Text>
			<TextInput
				style={form_styles.input}
				placeholder='Enter full name...'
				placeholderTextColor="#b7b7b7"
				onChangeText={(text) => setFullName(text)}
				value={fullName}
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				clearButtonMode="while-editing" />

			<Text style={form_styles.labelText}>Email</Text>
			<TextInput
				style={form_styles.input}
				placeholder="Enter email..."
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

			<Text style={form_styles.labelText}>Confirm Password</Text>
			<TextInput
				style={form_styles.input}
				placeholder="Confirm password..."
				placeholderTextColor="#b7b7b7"
				secureTextEntry
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				clearButtonMode="while-editing" />

			<FlatButton
				text="Sign up"
				onPress={() => onRegisterPress()} />

			<Text style={auth_styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={auth_styles.footerLink}>Sign in</Text></Text>

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
})