import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import ProfileInfo from '../../components/ProfileInfo';
import profile_style from '../../assets/styles/ProfileStyle';
import FlatButton from '../../components/Button';

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="account-circle"
          size={120}
          color="#5386e4"
          style={{ alignSelf: "center", marginTop: 5, marginBottom: 0, }}
        />
        <Text style={styles.textOne} >Brandon Kennedy</Text>
        <Text style={{ ...global_styles.title, marginBottom: 10 }}>Performance Rating</Text>

        <View style={large_card_style.container}>
          <TouchableOpacity style={large_card_style.largeLeftCard}>
            <MaterialCommunityIcons
              name="numeric-5-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Goals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeCenterCard}>
            <MaterialCommunityIcons
              name="numeric-6-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Matches</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeRightCard}>
            <MaterialCommunityIcons
              name="numeric-9-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Attendance</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 10, }} >Your Details</Text>

        <View>
          <Text style={profile_style.text1}>Name</Text>
          <ProfileInfo
            text="Brandon Kennedy"
          />

          <Text style={profile_style.text}>Date Of Birth</Text>
          <ProfileInfo
            text="3 / 4 / 2000"
          />

          <Text style={profile_style.text}>Position</Text>
          <ProfileInfo
            text="Forward"
          />
        </View>

        <FlatButton
          text="Edit Details"
        //to add nav
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    padding: 20,
  },
  textOne: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
  }
});