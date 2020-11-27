import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import SearchButton from '../../components/SearchButton';
import Search from '../../components/Search';
import global_styles from '../../assets/styles/GlobalStyle';

export default function MessageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
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
  searchContainer: {
    padding: 20
  }
});