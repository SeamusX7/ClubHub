import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

export default function JoinTeamForm({ closeModal }) {
	return (
		<View>
			<Formik
				onSubmit={(values) => {
					closeModal();
				}}>

        <View>
          <Text style={modal_styles.label_text}>Club ID</Text>
          <TextInput
            style={modal_styles.modal_input}
            placeholder='Enter club ID...' />

					<View style={{ marginTop: 30 }}>
						<CustomButton
            	text="Join" />
					</View>
          
        </View>
			</Formik>
		</View>
	)
}
