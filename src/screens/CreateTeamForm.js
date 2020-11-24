import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { Formik } from 'formik'
import { firebase } from '../firebase/config'


export default function CreateTeamForm(userId) {
    return (

        <View>
            <Formik
                initialValues={{ teamName: '', club: '', sport: '' }}
                onSubmit={(values) => {

                    const db = firebase.firestore()
                    db.collection('team').add({
                        club: values.club,
                        managerId: userId,
                        sport: values.sport,

                        teamName: values.teamName
                    })


                    db.collection('team').where('managerId', '==', userId).get()
                        .then(snapshot => {
                            snapshot.forEach(doc => {
                                const data = doc.data();
                                console.log(data.club);
                            });
                        })
                        .catch(err => {
                            console.log('Error getting documents', err);
                        });
                }}
            >
                {(props) => (
                    <View
                        style={StyleSheet.input}
                    >
                        <Text style={styles.container}>Team Name : </Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Team Name'
                            onChangeText={props.handleChange('teamName')}
                            value={props.values.teamName}
                        />
                        <Text style={styles.container}>Club : </Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Club'
                            onChangeText={props.handleChange('club')}
                            value={props.values.club}
                        />
                        <Text style={styles.container}>Sport : </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Sport'
                            onChangeText={props.handleChange('sport')}
                            value={props.values.sport}
                        />

                        <Button title='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#3b86eb',
        margin: 30,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    }
});