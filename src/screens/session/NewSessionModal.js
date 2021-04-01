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
import { getActiveTeamKey } from '../../store/activeTeam';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import { set } from 'react-native-reanimated';
import { date } from 'yup';
import { StyleSheet } from 'react-native';

export default function NewSessionModal({ closeModal }) {
	var today = new Date();
	dateTime1 = moment(today).format("YYYY-MM-DD");
	const [datePicked, setDate] = useState(dateTime1);
	const [timePicked, setTime] = useState(dateTime1);
	const [timeStamp, settimeStamp] = useState(dateTime1);

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [sessionType, setSessionType] = useState();

	const teamID = useSelector(getActiveTeamKey);

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
		console.log("A time has been picked: ", timeFormat);
		setTime(time);
		hideTimePicker();
		var newDateAndTime = moment(`${datePicked} ${timePicked}`, 'YYYY-MM-DD HH:mm:ss').format();
		console.log("new date and time : => ", newDateAndTime);
		var newDateAndTime2 = moment(datePicked, timePicked, 'YYYY-MM-DD HH:mm:ss').format();
		console.log("new date and time 2: => ", newDateAndTime2);

		var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date(newDateAndTime));
		settimeStamp(myTimestamp);

		console.log("timeStamp : => ", myTimestamp);
	};

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

	// For Main Data
	const [films, setFilms] = useState([]);
	// For Filtered Data
	const [filteredFilms, setFilteredFilms] = useState([]);
	// For Selected Data
	const [selectedValue, setSelectedValue] = useState({});

	useEffect(() => {
		fetch('https://aboutreact.herokuapp.com/getpost.php?offset=1')
			.then((res) => res.json())
			.then((json) => {
				const { results: films } = json;
				setFilms(films);
				//setting the data in the films state
			})
			.catch((e) => {
				alert(e);
			});
	}, []);

	const findFilm = (query) => {
		// Method called every time when we change the value of the input
		if (query) {
			// Making a case insensitive regular expression
			const regex = new RegExp(`${query.trim()}`, 'i');
			// Setting the filtered film array according the query
			setFilteredFilms(
				films.filter((film) => film.title.search(regex) >= 0)
			);
		} else {
			// If the query is null then return blank
			setFilteredFilms([]);
		}
	};


	return (
		<View>
			<Formik
				initialValues={{ location: '', opposition: '' }}
				onSubmit={(values) => {
					closeModal();

					//date = datePicked;
					// let time = values.time;
					// var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
					console.log("============================");
					console.log("myTimestamp ==> ", timeStamp);
					console.log("============================");

					const db = firebase.firestore()
					db.collection('sessions').add({
						sessionType: sessionType,
						location: values.location,
						opposition: values.opposition,
						timeStamp: timeStamp,
						teamId: teamID
					})

				}}>

				{(props) => (
					<View>

						<Text style={modal_styles.labelText}>Session type</Text>
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
						<View style={styles.container}>
							<Autocomplete
								value={props.values.session}
								autoCapitalize="none"
								autoCorrect={false}
								// containerStyle={styles.autocompleteContainer}
								inputContainerStyle={styles.inputAutocompleteContainer}
								// Data to show in suggestion
								data={filteredFilms}
								// Default value if you want to set something in input
								defaultValue={
									JSON.stringify(selectedValue) === '{}' ?
										'' :
										selectedValue.title
								}
								// Onchange of the text changing the state of the query
								// Which will trigger the findFilm method
								// To show the suggestions
								// onChangeText={props.handleChange('location')}
								onChangeText={(text) => findFilm(text)}

								// onChangeText={(foo=> {this.setState({ foo});},() => this.DoMath())}
								placeholder="Enter location..."
								renderItem={({ item }) => (
									// For the suggestion view
									<TouchableOpacity
										onPress={() => {
											setSelectedValue(item);
											setFilteredFilms([]);
										}}>
										<Text style={styles.itemText}>{item.title}</Text>
									</TouchableOpacity>
								)}
							/>
							{/* <View style={styles.descriptionContainer}>
                {films.length > 0 ? (
                  <>
                    <Text style={styles.infoText}>Selected Data</Text>
                    <Text style={styles.infoText}>{JSON.stringify(selectedValue)}</Text>
                  </>
                ) : (
                  <Text style={styles.infoText}>Enter The Film Title</Text>
                )}
              </View> */}
						</View>



						<Text style={modal_styles.labelText}>Opposition</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter opposition...'
							onChangeText={props.handleChange('opposition')}
							value={props.values.session} />

						<Text style={modal_styles.labelText}>Select Date</Text>
						<DateTimeButton title="Select date" onPress={showDatePicker} />
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleDateConfirm}
							onCancel={hideDatePicker}
						/>

						<Text style={modal_styles.labelText}>Select Time</Text>
						<DateTimeButton title="Select time" onPress={showTimePicker} />
						<DateTimePickerModal
							isVisible={isTimePickerVisible}
							mode="time"
							onConfirm={handleTimeConfirm}
							onCancel={hideTimePicker}
						/>

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
	button: {
		backgroundColor: '#f0f2f7',
		borderRadius: 8,
		fontFamily: 'montserrat-regular',
		paddingHorizontal: 16,
		paddingVertical: 15,
	},
	createStyle: {
		marginTop: 30
	},

	autocompleteContainer: {
    backgroundColor: '#f0f2f7',
    borderRadius: 8,
    fontFamily: 'montserrat-regular',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  inputAutocompleteContainer: {
    
  }
})