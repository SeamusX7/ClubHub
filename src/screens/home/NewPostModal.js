import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

export default function NewPostModal({ closeModal }) {
  return (
    <View>
      <Text style={modal_styles.labelText}>Title</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter title...'
        keyboardType="default" />
        
      <Text style={modal_styles.labelText}>Description</Text>
      <TextInput
        multiline = {true}
        numberOfLines = {4}
        style={modal_styles.modalLargeInput}
        placeholder='Enter description...' />

      <Text style={modal_styles.labelText}>Attachment</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Select attachment...'
        keyboardType="default" />

      <View style={{ marginTop: 30 }}>
        <CustomButton
          text="Post" />
      </View>
    </View>
  )
}