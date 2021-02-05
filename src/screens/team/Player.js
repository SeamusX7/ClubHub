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
        <View style={styles.bigCircle}></View>
        <Text style={styles.textOne} >Jack Lynch</Text>
        <Text style={{ ...global_styles.title, marginBottom: 10 }}>Performance Rating</Text>

        <View style={large_card_style.container}>
          <View style={large_card_style.largeLeftCard}>
            {/* <MaterialCommunityIcons
              name="numeric-5-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} /> */}
            <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>5</Text>
            </View>
            <Text style={large_card_style.text}>Matches</Text>
          </View>

          <View style={large_card_style.largeCenterCard}>
            {/* <MaterialCommunityIcons
              name="numeric-6-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} /> */}
              <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>6</Text>
            </View>
            <Text style={large_card_style.text}>Goals</Text>
          </View>

          <View style={large_card_style.largeRightCard}>
            {/* <MaterialCommunityIcons
              name="numeric-4-circle"
              size={36}
              color="#5386e4"
              style={{ alignSelf: 'center' }} /> */}
              <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>4</Text>
            </View>
            <Text style={large_card_style.text}>Assists</Text>
          </View>
        </View>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 20, }} >Your Details</Text>

        <View>
          <Text style={profile_style.text1}>Name</Text>
          <ProfileInfo
            text="Jack Lynch"
          />

          <Text style={profile_style.text}>Date Of Birth</Text>
          <ProfileInfo
            text="24 / 12 / 2000"
          />

          <Text style={profile_style.text}>Position</Text>
          <ProfileInfo
            text="Full forward"
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
  },
  bigCircle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100 / 2,
    height: 100,
    marginBottom: 20,
    width: 100,
  },
  cardCircle: {
    alignSelf: 'center',
    backgroundColor: '#f0f2f7',
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },
  cardCircleText: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 22,
    marginTop: 12,
    textAlign: 'center',
  }
});