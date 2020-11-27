import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NewMessageButton from '../../components/NewMessage';
import Search from '../../components/Search';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MessageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.searchSection}>
          <Search />
          <NewMessageButton />
        </View>
      </KeyboardAwareScrollView>



      <Button
        title="View message"
        onPress={() => navigation.navigate('ViewMessage')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  }
});