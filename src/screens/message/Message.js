import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat, Bubble, Composer, Send, InputToolbar } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { firebase } from '../../firebase/config';

// import SendTextButton from './SendTextButton';

// LogBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function App({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }} >
          <Ionicons onPress={() => navigation.navigate('Home')} name="ios-arrow-back" size={28} color={'#caccd0'} />
        </View>
      ),
    });
  }, [navigation])
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    readUser()
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return { ...message, createdAt: message.createdAt.toDate() }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
  )

  async function readUser() {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7)
    const user = { _id, name }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }
  async function handleSend(messages) {
    const writes = messages.map((m) => chatsRef.add(m))
    await Promise.all(writes)
  }

  const customBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#5386e4',
          },
          left: {
            backgroundColor: '#e0e0e0',
          }
        }}
      />
    );
  };

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopWidth: 0,
          paddingBottom: 2,
          paddingTop: 10,
        }}
      />
    );
  };

  const customSend = (props) => {
    return (
      <Send
        {...props}
        containerStyle={styles.sendContainer}
      >
        <Text style={styles.sendText}>Send</Text>
      </Send>
    );
  }

  if (!user) {

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    )
  }
  return <GiftedChat
    // Array
    messages={messages}

    // Object
    user={user}
    scrollToBottomStyle={styles.scrollToBottomContainer}

    // Function
    onSend={handleSend}
    renderBubble={props => customBubble(props)}
    renderSend={props => customSend(props)}
    renderInputToolbar={props => customtInputToolbar(props)}

    // Boolean
    alwaysShowSend={true}
    alignTop={true}
    scrollToBottom={true}
    renderUsernameOnMessage={false}

    // Integer
    minInputToolbarHeight={54}
    bottomOffset={32}
  />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'gray',
  },
  sendContainer: {
    marginRight: 20,
    bottom: 16
  },
  sendText: {
    color: '#b7b7b7',
    fontFamily: 'montserrat-medium',
    fontSize: 14
  },
  scrollToBottomContainer: {
    height: 40,
    width: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    opacity: 1,
    right: 0,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})