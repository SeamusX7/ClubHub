import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';
import RNPickerSelect from 'react-native-picker-select';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserId, getUserType, getUserName } from '../../store/user';
import { activeTeamAdded, activeTeamRemove } from '../../store/activeTeam';

export default function JoinTeamForm({ closeModal, props }) {
	const name = useSelector(getUserName);
	const id = useSelector(getUserId);
	const [position, setPosition] = useState();
	const pickerStyle = {
		inputIOS: {
			backgroundColor: '#f0f2f7',
			color: '#91999e',
			borderRadius: 8,
			fontFamily: 'montserrat-regular',
			fontSize: 14,
			paddingHorizontal: 16,
			paddingVertical: 15,
		},
		inputAndroid: {
			backgroundColor: '#f0f2f7',
			color: '#91999e',
			borderRadius: 8,
			fontFamily: 'montserrat-regular',
			fontSize: 14,
			paddingHorizontal: 16,
			paddingVertical: 15,
		},
	};
	return (
		<View>
			<Formik
				initialValues={{ teamID: '', position: '' }}
				onSubmit={(values) => {
					closeModal();
					const db = firebase.firestore()
					console.log("teamid => ", values.teamID);

					var teamRef = db.collection('team').doc(values.teamID);

					teamRef.get().then((doc) => {
						if (doc.exists) {
							console.log("Document data:", doc.data());
							console.log("doc.data().players: ", doc.data().players);
							var playersArray = doc.data().players;
							var playersIDArray = doc.data().playersID;

							var newPlayersObject = {
								ID: id,
								Name: name,
								position: position,
							}
							var newPlayersID = id;

							console.log("==================================");
							console.log("newPlayerObject = > ", newPlayersObject);
							console.log("==================================");
							console.log("PlayersArray = > ", playersArray);
							console.log("==================================");

							playersArray.push(newPlayersObject);
							playersIDArray.push(newPlayersID);

							console.log("newPlayersArray = > ", playersArray);
							console.log("==================================");

							teamRef.update({
								players: playersArray
							})
								.then(() => {
									console.log("Players Document successfully updated!");
									teamRef.update({
										playersID: playersIDArray
									})
										.then(() => {
											console.log("Players ID Document successfully updated!");
										})
										.catch((error) => {
											// The document probably doesn't exist.
											console.error("Error updating Players ID document: ", error);
										});
								})
								.catch((error) => {

									console.error("Error updating Players document: ", error);
								});
						}
					});

				}}>

				{(props) => (

					<View>
						<Text style={modal_styles.labelText}>Club ID</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter club ID...'
							onChangeText={props.handleChange('teamID')}
							value={props.values.teamID} />

						<Text style={modal_styles.labelText}>Name</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder={name}
							editable={false}
							value={name} />

						<Text style={modal_styles.labelText}>Position</Text>
						<RNPickerSelect
							placeholder={{
								label: 'Select position',
							}}
							style={pickerStyle}
							onValueChange={(value) => setPosition(value)}
							items={[
								{ label: 'Defender', value: 'Defender' },
								{ label: 'Midfielder', value: 'Midfielder' },
								{ label: 'Forward', value: 'Forward' },

							]}
						/>

						<View style={{ marginTop: 30 }}>
							<CustomButton
								text="Join"
								onPress={props.handleSubmit} />
						</View>

					</View>
				)}
			</Formik>
		</View>
	)
}
