import React, { useState, useEffect } from 'react';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';
import Autocomplete from 'react-native-autocomplete-input';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';
import DateTimeButton from '../../components/buttons/DateTimeButton';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTeamKey, getActiveTeamPlayersArray, getActiveTeamPlayersIDArray } from '../../store/activeTeam';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import { set } from 'react-native-reanimated';
import { date } from 'yup';
import { StyleSheet } from 'react-native';

export default function NewSessionModal({ closeModal }) {
	var today = new Date();
	dateTime1 = moment(today).format("YYYY-MM-DD");
	const [datePicked, setDate] = useState();
	const [timePicked, setTime] = useState();
	const [timeDiplayPicked, setDisplayTime] = useState();
	const [timeStamp, settimeStamp] = useState(dateTime1);

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [sessionType, setSessionType] = useState();
	const [locationType, setLocationType] = useState();
	const [location, setLocation] = useState();

	const teamID = useSelector(getActiveTeamKey);
	const playersArray = useSelector(getActiveTeamPlayersArray);
	const playersIDArray = useSelector(getActiveTeamPlayersIDArray);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleDateConfirm = (date) => {
		var dateFormat = moment(date).format("YYYY-MM-DD")
		console.log("A date has been picked: ", dateFormat);
		setDate(dateFormat);
		hideDatePicker();
	};

	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleTimeConfirm = (time) => {
		 var timeFormat = moment(time).format("h:mm:ss")
		// console.log("A time has been picked: ", timeFormat);
		setDisplayTime(timeFormat);
		 setTime(time);
		 var newDateAndTime = moment(`${datePicked} ${timePicked}`, 'YYYY-MM-DD HH:mm:ss').format();
		console.log("new date and time : => ", newDateAndTime);
		// var newDateAndTime2 = moment(datePicked, timePicked, 'YYYY-MM-DD HH:mm:ss').format();
		// console.log("new date and time 2: => ", newDateAndTime2);

		var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date(newDateAndTime));
		settimeStamp(myTimestamp);

		console.log("timeStamp : => ", myTimestamp);
		console.log("time => ", timeFormat);
		hideTimePicker();
		
	};

	const joinTimestamp = () => {
		var newDateAndTime = moment(`${datePicked} ${timePicked}`, 'YYYY-MM-DD HH:mm:ss').format();
		console.log("new date and time : => ", newDateAndTime);
		// var newDateAndTime2 = moment(datePicked, timePicked, 'YYYY-MM-DD HH:mm:ss').format();
		// console.log("new date and time 2: => ", newDateAndTime2);

		var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date(newDateAndTime));
		settimeStamp(myTimestamp);

		console.log("timeStamp : => ", myTimestamp);
	}

	const pickerStyle = {
		inputIOS: {
			backgroundColor: '#f0f2f7',
			color: '#0c1821',
			borderRadius: 8,
			fontFamily: 'montserrat-regular',
			fontSize: 14,
			paddingHorizontal: 16,
			paddingVertical: 15,
		},
		inputAndroid: {
			backgroundColor: '#f0f2f7',
			color: '#0c1821',
			borderRadius: 8,
			fontFamily: 'montserrat-regular',
			fontSize: 14,
			paddingHorizontal: 16,
			paddingVertical: 15,
		},
	};

	const [locations, setLocations] = useState([]);
	const [filteredLocations, setFilteredLocations] = useState([]);
	const [selectedValue, setSelectedValue] = useState({});

	useEffect(() => {
		fetch('https://demo4276878.mockable.io/test')
			.then((res) => res.json())
			.then((json) => {
				const { results: locations } = json;
				setLocations(locations);
			})
			.catch((e) => {
				alert(e);
			});
	}, []);

	const findLocation = (query) => {
		if (query) {
			const regex = new RegExp(`${query.trim()}`, 'i');
			setFilteredLocations(
				locations.filter((location) => location.title.search(regex) >= 0)
			);
		} else {
			setFilteredLocations([]);
		}
	};


	return (
		<View>
			<Formik
				initialValues={{ location: '', opposition: '', title: '' }}
				onSubmit={(values) => {
					closeModal();
					const timestamp = firebase.firestore.FieldValue.serverTimestamp();

					//joinTimestamp();

					//date = datePicked;
					// let time = values.time;
					// var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
					console.log("============================");
					console.log("myTimestamp ==> ", timeStamp);
					console.log("============================");

					const db = firebase.firestore()
					db.collection('sessions').add({
						sessionType: sessionType,
						//location: location,
						location: locationType,
						opposition: values.opposition,
						timeStamp: timeStamp,
						teamId: teamID,
						Pending: playersArray,
						Accepted: [],
						Declined: [],
						Score: " ",
						Feedback: " ",
						NotPendingPlayersIDArray: [],
						PendingPlayersIDArray: playersIDArray,
						created:timestamp,
						title: values.title
					})

				}}>

				{(props) => (
					<View>

						<Text style={modal_styles.labelText}>Type</Text>
						<RNPickerSelect
							placeholder={{
								label: 'Select session type',
							}}
							style={pickerStyle}
							onValueChange={(value) => setSessionType(value)}
							items={[
								{ label: 'Training', value: 'training' },
								{ label: 'Match', value: 'match' },
								{ label: 'Gym', value: 'gym' },
							]}
						/>

						{/* <Text style={modal_styles.labelText}>Session location</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter location...'
							onChangeText={props.handleChange('location')}
							value={props.values.session} /> */}

							

						<Text style={modal_styles.labelText}>Session location</Text>
						<RNPickerSelect
							placeholder={{
								label: 'Select location',
							}}
							style={pickerStyle}
							onValueChange={(value) => setLocationType(value)}
							items={[
								{ label: 'Home', value: 'Home' },
								{ label: 'Away', value: 'Away' },
								
							]}
						/>
						{/* <View style={styles.container}>
							<Autocomplete
								//value={props.values.session}
								autoCapitalize="none"
								autoCorrect={false}
								inputContainerStyle={styles.inputAutocompleteContainer}
								listStyle={styles.listStyle}
								data={filteredLocations}
								renderTextInput={() => (

									<TextInput
										defaultValue={
											JSON.stringify(selectedValue) === '{}' ?
												'' :
												selectedValue.title
										}
										//value={location}
										onChangeText={(text) => findLocation(text)}
										placeholder={'Enter location...'}
										style={{
											backgroundColor: '#f0f2f7',
											borderRadius: 8,
											fontFamily: 'montserrat-regular',
											paddingHorizontal: 16,
											paddingVertical: 15,
										}}
									/>
								)}

								renderItem={({ item }) => (
									<View>
										<TouchableOpacity
											onPress={() => {
												setSelectedValue(item);
												setLocation(item.title);
												setFilteredLocations([]);
											}}>
											<Text style={styles.itemText}>{item.title}</Text>
										</TouchableOpacity>
									</View>
								)
								}
							/>
						</View> */}

						<Text style={modal_styles.labelText}>Opposition</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter opposition...'
							onChangeText={props.handleChange('opposition')}
							value={props.values.opposition} />

						<Text style={modal_styles.labelText}>Title</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter title...'
							onChangeText={props.handleChange('title')}
							value={props.values.title} />

						<Text style={modal_styles.labelText}>Select Date</Text>
						<DateTimeButton title={datePicked} onPress={showDatePicker} />
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleDateConfirm}
							onCancel={hideDatePicker} />

						<Text style={modal_styles.labelText}>Select Time</Text>
						<DateTimeButton title={timeDiplayPicked} onPress={showTimePicker} />
						<DateTimePickerModal
							isVisible={isTimePickerVisible}
							mode="time"
							onConfirm={handleTimeConfirm}
							onCancel={hideTimePicker} />

						<View style={styles.createStyle}>
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

const styles = StyleSheet.create({
	createStyle: {
		marginTop: 30
	},
	inputAutocompleteContainer: {
		borderWidth: 0,
	},
	itemText: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginBottom: 3,
		marginLeft: 10,
		marginTop: 3,
	},
	listStyle: {
		backgroundColor: '#f0f2f7',
		borderRadius: 8,
		borderWidth: 0,
		marginTop: 10,
		width: '34%',
	},
	container: {
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 },
		shadowOpacity: 0.05,
		shadowRadius: 3,
		zIndex: 1,
	}
})