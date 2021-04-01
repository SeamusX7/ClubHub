import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

export default function MatchReportModal({ closeModal }) {
  return (
    <View>
      <Text style={modal_styles.labelText}>Score</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter the score...'
        keyboardType="default" />
        
      <Text style={modal_styles.labelText}>Feedback</Text>
      <TextInput
        multiline = {true}
        numberOfLines = {4}
        style={modal_styles.modalLargeInput}
        placeholder='Enter match feedback...' />

      <View style={{ marginTop: 30 }}>
        <CustomButton
          text="Create" />
      </View>
    </View>
  )
}