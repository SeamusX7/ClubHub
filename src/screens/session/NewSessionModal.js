import React, { useState, useEffect } from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTeamKey } from '../../store/activeTeam';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';
import { set } from 'react-native-reanimated';
import { date } from 'yup';

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

	return (
		<View>
			<Formik
				initialValues={{ location: '', opposition: '', title: '' }}
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
						teamId: teamID,
						// title: title
					})

				}}>

				{(props) => (
					<View>

						<Text style={modal_styles.labelText}>Session Type</Text>
						<RNPickerSelect
							onValueChange={(value) => setSessionType(value)}
							items={[
								{ label: 'Training', value: 'training' },
								{ label: 'Match', value: 'match' },
								{ label: 'Gym', value: 'gym' },

							]}
						/>

						<Text style={modal_styles.labelText}>Session Location</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter location...'
							onChangeText={props.handleChange('location')}
							value={props.values.location} />

						<Text style={modal_styles.labelText}>Opposition</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter opposition...'
							onChangeText={props.handleChange('opposition')}
							value={props.values.opposition} />

						{/* <Text style={modal_styles.labelText}>Title</Text>
						<TextInput
							style={modal_styles.modalInput}
							placeholder='Enter title...'
							onChangeText={props.handleChange('title')}
							value={props.values.title} /> */}

						<Button title="Select Date" onPress={showDatePicker} />
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleDateConfirm}
							onCancel={hideDatePicker}
						/>

						<Button title="Select Time" onPress={showTimePicker} />
						<DateTimePickerModal
							isVisible={isTimePickerVisible}
							mode="time"
							onConfirm={handleTimeConfirm}
							onCancel={hideTimePicker}
						/>

						<CustomButton
							text="Create"
							onPress={props.handleSubmit} />

					</View>
				)}
			</Formik>
		</View>
	)
}
