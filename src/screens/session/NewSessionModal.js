import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

export default function NewSessionModal({ closeModal }) {
  return (
    // <View>
    //   <Text style={modal_styles.labelText}>Type</Text>
    //   <TextInput
    //     style={modal_styles.modalInput}
    //     placeholder='Enter session type...' />
        
    //   <Text style={modal_styles.labelText}>Date</Text>
    //   <TextInput
    //     style={modal_styles.modalInput}
    //     placeholder='Enter date...' />

    //   <Text style={modal_styles.labelText}>Location</Text>
    //   <TextInput
    //     style={modal_styles.modalInput}
    //     placeholder='Enter location...' />
        
    //   <Text style={modal_styles.labelText}>Time</Text>
    //   <TextInput
    //     style={modal_styles.modalInput}
    //     placeholder='Enter time...' />

    //   <FlatButton
    //     text="Create" />

    // </View>

    <View>
      <Formik
				initialValues={{ date: '', sessionType: '', time: '' }}
				onSubmit={(values) => {
					closeModal();

          let date = values.date;
          let time = values.time;
          var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
          console.log("============================");
          console.log("myTimestamp ==> ", myTimestamp);
          console.log("============================");

					// const db = firebase.firestore()
					// db.collection('team').add({
					// 	sessionType: values.sessionType,
					// 	managerId: userId,
					// 	time: values.time,
					// 	date: values.date,
					// 	win: 0,
					// 	draw: 0,
					// 	loss: 0,
					// })

					// db.collection('team')
					// .where('managerId', '==', userId)
					// .get()
					// .then(snapshot => {
					//   snapshot.forEach(doc => {			  
					// 	teams.push({
					// 	  ...doc.data(),
					// 	  key: doc.id,
					// 	});
					//   });
			  
					//   setTeams(teams);
					//   dispatch(teamsAdded(teams));
					 
			  
					  
			  
					// });
				}}>

				{(props) => (
					<View>
						<Text style={modal_styles.labelText}>Type</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter session type...'
							onChangeText={props.handleChange('sessionType')}
							value={props.values.club} />

						<Text style={modal_styles.labelText}>Date</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter date...'
							onChangeText={props.handleChange('date')}
							value={props.values.teamName} />

						<Text style={modal_styles.labelText}>Time</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter time...'
							onChangeText={props.handleChange('time')}
							value={props.values.sport} />

            <Text style={modal_styles.labelText}>Time</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter location...'
							onChangeText={props.handleChange('location')}
							value={props.values.sport} />

            <Text style={modal_styles.labelText}>Time</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter time...'
							onChangeText={props.handleChange('time')}
							value={props.values.sport} />
							
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

{/* <Formik
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
			</Formik> */}