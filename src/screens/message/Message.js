// import React from 'react';
// import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// // Local File Imports
// import SearchButton from '../../components/buttons/SearchButton';
// import Search from '../../components/Search';
// import SelectMessage from '../../components/SelectMessage';
// import global_styles from '../../assets/styles/GlobalStyle';
// import message_styles from '../../assets/styles/MessageStyle';




// export default function MessageScreen({ navigation }) {
//   return (
//     <KeyboardAwareScrollView style={styles.container}>
//         <View style={styles.searchContainer}>
//           <View style={global_styles.search_section}>
//             <Search />
//             <SearchButton>
//               <MaterialCommunityIcons
//                 name='pencil'
//                 size={24}
//                 color="#b7b7b7" />
//             </SearchButton>
//           </View>
//         </View>

//         <View style={message_styles.select_message}>
//           <SelectMessage onPress={() => navigation.navigate('ViewMessage')}>
//             <View style={message_styles.container}>
//               <View style={message_styles.circle}>

//               </View>
//               <View style={message_styles.text_view} >
//                 <Text style={message_styles.textOne} >Eamon Kavanagh</Text>
//                 <Text style={message_styles.text_two} >You: Jack, can you come in for training...</Text>
//               </View>
//               <View style={message_styles.sent}>
//                 <Text style={message_styles.time}>10:12</Text>
//                 {/* <View style={message_styles.alert}></View> */}
//               </View>
//             </View>
//           </SelectMessage>
//         </View>

//         <SelectMessage onPress={() => navigation.navigate('ViewMessage')}>
//           <View style={message_styles.container}>
//             <View style={message_styles.circle}>

//             </View>
//             <View style={message_styles.text_view} >
//               <Text style={message_styles.textOne} >Brandon Kennedy</Text>
//               <Text style={message_styles.text_two} >Cian: Lorem ipsum dolor...</Text>
//             </View>
//             <View style={message_styles.sent}>
//               <Text style={message_styles.time}>17 Nov</Text>
//             </View>
//           </View>
//         </SelectMessage>
//     </KeyboardAwareScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f0f2f7',
//     flex: 1,
//   },
//   searchContainer: {
//     padding: 20,
//   }
// });

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, TextInput, View, Button } from 'react-native'

import { firebase } from '../../firebase/config';

// LogBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function App() {
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

  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    )
  }
  return <GiftedChat
    messages={messages}
    user={user} onSend={handleSend}
    alwaysShowSend={true}
    renderUsernameOnMessage={true}
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
})