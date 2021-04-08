import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';

export default function CreateTeamForm({ closeModal, userId }) {
	const dispatch = useDispatch();
	const [teams, setTeams] = useState({});
	return (
		<View>
			<Formik
				initialValues={{ teamName: '', club: '', sport: '' }}
				onSubmit={(values) => {
					closeModal();
					const db = firebase.firestore()
					db.collection('team').add({
						club: values.club,
						managerId: userId,
						sport: values.sport,
						teamName: values.teamName,
						win: 0,
						draw: 0,
						loss: 0,
						players: [],
						playersID: [],
					})

					db.collection('team')
					.where('managerId', '==', userId)
					.get()
					.then(snapshot => {
					  snapshot.forEach(doc => {			  
						teams.push({
						  ...doc.data(),
						  key: doc.id,
						});
					  });
			  
					  setTeams(teams);
					  dispatch(teamsAdded(teams));
					 
			  
					  
			  
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
							
						<View style={{ marginTop: 30 }}>
							<CustomButton
								text="Create"
								onPress={props.handleSubmit} />
						</View>
					</View>
				)}
			</Formik>
		</View>
	)
}
