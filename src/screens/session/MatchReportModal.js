import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Text, View, TextInput } from 'react-native';
import { firebase } from '../../firebase/config';

// Component Imports
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey, activeSessionRemove } from '../../store/activeSession';
import { getUserId, getUserName } from '../../store/user';
import { FlatList } from 'react-native-gesture-handler';

export default function MatchReportModal({ closeModal }) {
  const db = firebase.firestore();
  const key = useSelector(getactiveSessionKey);
  return (
    <View>

      <Formik
        initialValues={{ feedback: '', score: '' }}
        onSubmit={(values) => {
          closeModal();
          var sessionsRef = db.collection('sessions').doc(key);

          sessionsRef.update({
            Score: values.score,
            Feedback: values.feedback
          });

        }}>

        {(props) => (
          <View>

            <Text style={modal_styles.labelText}>Score</Text>
            <TextInput
              style={modal_styles.modalInput}
              placeholder='Enter the score...'
              keyboardType="default"
              onChangeText={props.handleChange('score')}
              value={props.values.score} />

            <Text style={modal_styles.labelText}>Feedback</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={modal_styles.modalLargeInput}
              placeholder='Enter match feedback...'
              onChangeText={props.handleChange('feedback')}
              value={props.values.feedback} />

            <View style={{ marginTop: 30 }}>
              <CustomButton
                text="Create"
                onPress={props.handleSubmit} />
            </View>

          </View>
        )}
      </Formik>

      {/* <Text style={modal_styles.labelText}>Score</Text>
      <TextInput
        style={modal_styles.modalInput}
        placeholder='Enter the score...'
        keyboardType="default" />

      <Text style={modal_styles.labelText}>Feedback</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={modal_styles.modalLargeInput}
        placeholder='Enter match feedback...' />

      <View style={{ marginTop: 30 }}>
        <CustomButton
          text="Create" />
      </View> */}
    </View>
  )
}