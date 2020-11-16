import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props) {

     const userID = props.extraData.id


     return (
        <View style={styles.container}>
            
            <Text>Welcome user: {userID}</Text> 
        </View>
    )
}