import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { firebase } from '../../firebase/config';
import Checkbox from 'react-native-custom-checkbox';

// Local File Imports
import FlatButtonSecondary from '../../components/ModalSecondaryButton';
import FlatButton from '../../components/ModalButton';
import modal_styles from '../../assets/styles/ModalStyle';

export default function NewSessionModal({ closeModal }) {

  return (
    <View style={styles.container}>
      <View style={modal_styles.invitePlayerMargin}>
        <View style={modal_styles.invitePlayerRow}>
          <View style={modal_styles.circle}></View>
          <Text style={modal_styles.labelTextSemiBold}>Jack Lynch</Text>
          <View style={modal_styles.checkboxAlignment}>
            <Checkbox
              checked={false}
              style={modal_styles.checkbox}
              size={22} />
          </View>
        </View>

        <View style={modal_styles.invitePlayerRow}>
          <View style={modal_styles.circle}></View>
          <Text style={modal_styles.labelTextSemiBold}>Keane Callan</Text>
          <View style={modal_styles.checkboxAlignment}>
            <Checkbox
              checked={false}
              style={modal_styles.checkbox}
              size={22} />
          </View>
        </View>

        <View style={modal_styles.invitePlayerRow}>
          <View style={modal_styles.circle}></View>
          <Text style={modal_styles.labelTextSemiBold}>Shane McCleary</Text>
          <View style={modal_styles.checkboxAlignment}>
            <Checkbox
              checked={false}
              style={modal_styles.checkbox}
              size={22} />
          </View>
        </View>
      </View>

      <View style={styles.positionButtons}>
        <FlatButtonSecondary
          text="Select all" />

        <FlatButton
          text="Invite" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionButtons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});