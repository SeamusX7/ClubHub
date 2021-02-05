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
        <View style={styles.bigCircle}></View>
        <Text style={styles.textOne} >Eamon Kavanagh</Text>
        <Text style={{ ...global_styles.title, marginBottom: 10 }}>Team Rating</Text>

        <View style={large_card_style.container}>
          <TouchableOpacity style={large_card_style.largeLeftCard}>
          <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>6</Text>
            </View>
            <Text style={large_card_style.text}>Wins</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeCenterCard}>
          <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>2</Text>
            </View>
            <Text style={large_card_style.text}>Losses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={large_card_style.largeRightCard}>
          <View style={styles.cardCircle}>
              <Text style={styles.cardCircleText}>8</Text>
            </View>
            <Text style={large_card_style.text}>Goals</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 10, }} >Your Details</Text>

        <View>
          <Text style={profile_style.text1}>Name</Text>
          <ProfileInfo
            text="Eamon Kavanagh"
          />

          <Text style={profile_style.text}>Date Of Birth</Text>
          <ProfileInfo
            text="30 / 10 / 1990"
          />

          <Text style={profile_style.text}>Role</Text>
          <ProfileInfo
            text="Coach"
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
  textTwo: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
    fontSize: 12,
    alignSelf: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
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