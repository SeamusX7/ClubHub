import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View, StyleSheet, Image, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import auth_styles from '../../assets/styles/AuthStyle';

export default function RegistrationScreen({ navigation }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userType, setUserType] = useState('coach');

	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const onSwitchChange = () => {
		setIsSwitchOn(!isSwitchOn);
		if(isSwitchOn)
		{
			setUserType("player");
		}
	}

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
					userType: userType,
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
			contentContainerStyle={auth_styles.auth_screen_container}>

			<Image
				source={require('../../../src/assets/icon-notext.png')}
				style={auth_styles.logo} />

			<View style={auth_styles.title_container}>
				<Text style={auth_styles.title_text}>Sign up</Text>
				<Text style={auth_styles.subtitle_text}>Sign up to use our app</Text>
			</View>

			<View style={auth_styles.switch_group}>
				<Text style={{...auth_styles.switch_text, marginRight: 10}}>Player</Text>
				<Switch
					ios_backgroundColor='#f0f2f7'
					thumbColor='#fff'
					trackColor={{ true: '#5386e4', false: '#f0f2f7' }}
					value={isSwitchOn}
					onValueChange={onSwitchChange} />
				<Text style={{...auth_styles.switch_text, marginLeft: 10}}>Manager</Text>
			</View>
			
			<Text style={auth_styles.auth_label_text}>Full name</Text>
			<TextInput
				style={auth_styles.auth_input}
				placeholder='Enter full name...'
				placeholderTextColor="#caccd0"
				onChangeText={(text) => setFullName(text)}
				value={fullName}
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				clearButtonMode="while-editing" />

			<Text style={auth_styles.auth_label_text}>Email</Text>
			<TextInput
				style={auth_styles.auth_input}
				placeholder="Enter email..."
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

			<Text style={auth_styles.auth_label_text}>Confirm password</Text>
			<TextInput
				style={auth_styles.auth_input}
				placeholder="Confirm password..."
				placeholderTextColor="#caccd0"
				secureTextEntry
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				clearButtonMode="while-editing" />

			<View style={{ marginTop: 30 }}>
				<CustomButton
					text="Sign up"
					onPress={() => onRegisterPress()} />
			</View>

			<Text style={auth_styles.footer_text}>Already have an account? <Text onPress={onFooterLinkPress} style={auth_styles.footer_link}>Sign in</Text></Text>

		</KeyboardAwareScrollView>
	)
}