import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SendMessageInput from '../../components/SendMessage';

export default function ViewMessageScreen() {
  return (
    <KeyboardAwareScrollView style={styles.container}>



        <SendMessageInput />

    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  }
});