import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Local File Imports
import Search from '../../components/Search';
import SearchButton from '../../components/SearchButton';
import global_styles from '../../assets/styles/GlobalStyle';

export default function PreviousMatchSessionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={global_styles.searchSection}>
        <Search />
        <SearchButton>
          <MaterialIcons
            name='filter-list'
            size={24}
            color="#b7b7b7" />
        </SearchButton>
      </View>
      

      <Button
        title="View match"
        onPress={() => navigation.navigate('ViewPreviousMatchSession')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 20,
  }
});