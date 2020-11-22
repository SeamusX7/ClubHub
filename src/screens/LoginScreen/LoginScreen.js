import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View, StyleSheet } from 'react-native';
import { firebase } from '../../firebase/config';

 // Local File Imports
import FlatButton from '../../components/Button';

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
					<View style={styles.container}>
						<View style={styles.logoContainer}>

						</View>
						<View style={styles.formContainer}>
							<View style={styles.form}>
								<Text style={styles.authHeaderText}>Sign in</Text>

								<Text style={styles.labelText}>Email</Text>
								<TextInput
									style={styles.input}
									placeholder='Enter email...'
									placeholderTextColor="#b7b7b7"
									onChangeText={(text) => setEmail(text)}
									value={email}
									underlineColorAndroid="transparent"
									autoCapitalize="none" />

								<Text style={styles.labelText}>Password</Text>
								<TextInput
									style={styles.input}
									placeholder="Enter password..."
									placeholderTextColor="#b7b7b7"
									secureTextEntry
									onChangeText={(text) => setPassword(text)}
									value={password}
									underlineColorAndroid="transparent"
									autoCapitalize="none" />

								<FlatButton
									text="Sign in"
									onPress={() => onLoginPress()} />

							</View>
						</View>
						<View style={styles.footerContainer}>
							<Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
						</View>
					</View>
				)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		backgroundColor: '#f0f2f7',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	logoContainer: {
		// backgroundColor: '#5386e4',
		flex: 1,
		height: 50,
	},
	formContainer: {
		flex: 4,
		height: 50,
	},
	footerContainer: {
		alignItems: 'center',
		flex: 1,
		height: 50,
		justifyContent: 'center'
	},
	form: {
		backgroundColor: '#fff',
		borderRadius: 12,
		height: '100%',
		marginHorizontal: 30,
		padding: 20,

		// Shadow
		elevation: 6,
		shadowColor: "#000",
		shadowOffset: {
			height: 3,
			width: 0,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
	},
	authHeaderText: {
		color: '#333',
		fontFamily: 'montserrat-semibold',
		fontSize: 18,
	},
	labelText: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 20,
		marginBottom: 4
	},
	input: {
		backgroundColor: '#f0f2f7',
		borderRadius: 5,
		paddingHorizontal: 16,
		paddingVertical: 15,
	},
	footerText: {
		color: '#333',
		fontFamily: 'montserrat-regular',
		fontSize: 14,	

	},
	footerLink: {
		color: "#5386e4",
		fontSize: 14,
		fontFamily: 'montserrat-semibold'
	}
})