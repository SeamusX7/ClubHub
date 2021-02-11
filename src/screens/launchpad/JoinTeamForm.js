import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

// Local File Imports
import FlatButton from '../../components/ModalButton';
import modal_styles from '../../assets/styles/ModalStyle';

export default function JoinTeamForm({ closeModal }) {
	return (
		<View>
			<Formik
				onSubmit={(values) => {
					closeModal();
				}}>

        <View>
          <Text style={modal_styles.labelText}>Club ID</Text>
          <TextInput
            style={modal_styles.modalInput}
            placeholder='Enter club ID...' />

          <FlatButton
            text="Join" />
        </View>
			</Formik>
		</View>
	)
}
