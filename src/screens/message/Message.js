import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import SearchButton from '../../components/SearchButton';
import Search from '../../components/Search';
import SelectMessage from '../../components/SelectMessage';
import global_styles from '../../assets/styles/GlobalStyle';
import message_styles from '../../assets/styles/SelectMessageStyle';

export default function MessageScreen({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={global_styles.searchSection}>
            <Search />
            <SearchButton>
              <MaterialCommunityIcons
                name='pencil'
                size={24}
                color="#b7b7b7" />
            </SearchButton>
          </View>
        </View>

        <View style={message_styles.selectMessage}>
          <SelectMessage onPress={() => navigation.navigate('ViewMessage')}>
            <View style={message_styles.container}>
              <View style={message_styles.circle}>

              </View>
              <View style={message_styles.textView} >
                <Text style={message_styles.textOne} >Cheuk Wei Lin</Text>
                <Text style={message_styles.textTwo} >You: Lorem ipsum dolor sit amet...</Text>
              </View>
              <View style={message_styles.sent}>
                <Text style={message_styles.time}>10:12</Text>
                <View style={message_styles.alert}></View>
              </View>
            </View>
          </SelectMessage>
        </View>

        <SelectMessage onPress={() => navigation.navigate('ViewMessage')}>
          <View style={message_styles.container}>
            <View style={message_styles.circle}>

            </View>
            <View style={message_styles.textView} >
              <Text style={message_styles.textOne} >Brandon Kennedy</Text>
              <Text style={message_styles.textTwo} >Cian: Lorem ipsum dolor...</Text>
            </View>
            <View style={message_styles.sent}>
              <Text style={message_styles.time}>17 Nov</Text>
            </View>
          </View>
        </SelectMessage>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
  searchContainer: {
    padding: 20
  }
});