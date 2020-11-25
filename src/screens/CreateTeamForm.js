import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../firebase/config';

// Local File Imports
import FlatButton from '../components/ModalButton';
import modal_styles from '../assets/styles/ModalStyle';

export default function CreateTeamForm(userId) {
	return (
		<View>
			<Formik
				initialValues={{ teamName: '', club: '', sport: '' }}
				onSubmit={(values) => {
					const db = firebase.firestore()
					db.collection('team').add({
						club: values.club,
						managerId: userId,
						sport: values.sport,
						teamName: values.teamName
					})
					db.collection('team').where('managerId', '==', userId).get()
						.then(snapshot => {
							snapshot.forEach(doc => {
								const data = doc.data();
								console.log(data.club);
							});
						})
					.catch(err => {
						console.log('Error getting documents', err);
					});
				}}>

				{(props) => (
					<View>
						<Text style={modal_styles.labelText}>Club</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter club name...'
							onChangeText={props.handleChange('club')}
							value={props.values.club} />

						<Text style={modal_styles.labelText}>Name</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter team name...'
							onChangeText={props.handleChange('teamName')}
							value={props.values.teamName} />

						<Text style={modal_styles.labelText}>Sport</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter sport...'
							onChangeText={props.handleChange('sport')}
							value={props.values.sport} />
							
						<FlatButton
							text="Create"
							onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	)
}
