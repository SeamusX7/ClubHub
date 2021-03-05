import React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

// Local File Imports
import message_styles from '../../assets/styles/MessageStyle';
import SendMessageInput from '../../components/SendMessage';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
export default function ViewMessageScreen() {

  return (
      <WebView 
        source={ Platform.OS === 'ios' ? require('../../assets/talkjs.html') : { uri: "file:///talkjs.html" }}
        style={{flex: 1}} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    // <SafeAreaView style={styles.container}>

    //   <KeyboardAwareScrollView>
    //     <View style={message_styles.text_message_box_one} >
    //       <Text style={message_styles.text_message_one}>Lorem ipsum dolor sit amet.</Text>
    //       <Text style={message_styles.text_time_one}>19:45</Text>
    //     </View>

    //     <View style={message_styles.text_message_box_two} >
    //       <Text style={message_styles.text_message_two}>Lorem ipsum dolor sit amet.</Text>
    //     </View>

    //     <View style={message_styles.profile}>
    //       <View style={message_styles.text_message_box_three} >
    //         <Text style={message_styles.text_message_three}>Lorem ipsum dolor.</Text>
    //         <Text style={message_styles.text_time_three}>19:45</Text>
    //       </View>
    //     </View>

    //     <View style={{ flexDirection: 'row' }}>
    //       <View style={message_styles.line} />
    //       <Text style={message_styles.new_messages}>New Messages</Text>
    //       <View style={message_styles.line} />
    //     </View>

    //     <View style={message_styles.profile_two}>
    //       <View style={message_styles.text_message_box_three} >
    //         <Text style={message_styles.text_message_three}>Lorem ipsum dolor.</Text>
    //         <Text style={message_styles.text_time_three}>19:48</Text>
    //       </View>
    //     </View>
    //   </KeyboardAwareScrollView>

    //   <KeyboardAvoidingView
    //     behavior="padding"
    //   >
    //     <View style={{ flex: 1 }}>
    //       <SendMessageInput />
    //     </View>
    //   </KeyboardAvoidingView>

    // </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
});