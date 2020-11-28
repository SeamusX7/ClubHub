import React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Local File Imports
import message_styles from '../../assets/styles/MessageStyle';
import SendMessageInput from '../../components/SendMessage';

export default function ViewMessageScreen() {
  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAwareScrollView>
        <View style={message_styles.textMessageBoxOne} >
          <Text style={message_styles.textMessageOne}>Lorem ipsum dolor sit amet.</Text>
          <Text style={message_styles.textTimeOne}>19:45</Text>
        </View>

        <View style={message_styles.textMessageBoxTwo} >
          <Text style={message_styles.textMessageTwo}>Lorem ipsum dolor sit amet.</Text>
        </View>

        <View style={message_styles.profile}>
          <View style={message_styles.textMessageBoxThree} >
            <Text style={message_styles.textMessageThree}>Lorem ipsum dolor.</Text>
            <Text style={message_styles.textTimeThree}>19:45</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={message_styles.line} />
          <Text style={message_styles.newMessages}>New Messages</Text>
          <View style={message_styles.line} />
        </View>

        <View style={message_styles.profileTwo}>
          <View style={message_styles.textMessageBoxThree} >
            <Text style={message_styles.textMessageThree}>Lorem ipsum dolor.</Text>
            <Text style={message_styles.textTimeThree}>19:48</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <KeyboardAvoidingView
        behavior="padding"
      >
        <View style={{ flex: 1 }}>
          <SendMessageInput />
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
});