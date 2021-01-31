import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import ProfileInfo from '../../components/ProfileInfo';
import profile_style from '../../assets/styles/ProfileStyle';
import FlatButton from '../../components/Button';

export default function PlayerScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="account-circle"
          size={120}
          color="#5386e4"
          style={{ alignSelf: "center", marginTop: 5, marginBottom: 0, }}
        />
        <Text style={styles.textOne} >Seamus Cummins</Text>
        <Text style={{ ...global_styles.title, marginBottom: 10 }}>Performance Rating</Text>

        <View style={large_card_style.container}>
          <TouchableOpacity style={large_card_style.largeLeftCard}>
            <MaterialCommunityIcons
              name="numeric-5-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Matches</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeCenterCard}>
            <MaterialCommunityIcons
              name="numeric-6-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Goals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeRightCard}>
            <MaterialCommunityIcons
              name="numeric-4-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} />
            <Text style={large_card_style.text}>Assists</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 10, }} >Your Details</Text>

        <View>
          <Text style={profile_style.text1}>Name</Text>
          <ProfileInfo
            text="Seamus Cummins"
          />

          <Text style={profile_style.text}>Date Of Birth</Text>
          <ProfileInfo
            text="12 / 12 / 1999"
          />

          <Text style={profile_style.text}>Position</Text>
          <ProfileInfo
            text="Forward"
          />
        </View>

        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 10, }} >Attendance 2020/21</Text>

        <View>
        <Image
          source={require('../../assets/images/attendance.jpg')}
          style={styles.attendance}>
        </Image>
        </View>

        {/* <FlatButton
          text="Edit Details"
        //to add nav
        /> */}
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
  },
  attendance: {
    width: '100%',
    height: 160,
    borderRadius: 8
  }
});