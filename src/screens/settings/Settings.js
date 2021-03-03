import React from 'react';
import { firebase } from '../../firebase/config';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import SettingsButton from '../../components/SettingsButton';
import TopButton from '../../components/TopButton';
import large_card_style from '../../assets/styles/LargeCardStyle';
import settings_card_style from '../../assets/styles/SettingsCardDesign';
import card_styles from '../../assets/styles/CardStyle';
import modal_styles from '../../assets/styles/ModalStyle';

//redux
import { getUserName } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';

export default function SettingsScreen({ navigation }) {

  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
}

const userFullName = useSelector(getUserName);

  return (
    <View style={styles.container}>
      <View style={large_card_style.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={large_card_style.largeLeftCard}>
        <View style={modal_styles.modalHeader}>
          <MaterialCommunityIcons
            name="account-circle"
            size={70}
            color="#0C1821"
            style={{marginLeft:20}}
            />
            <View style={card_styles.textView} >
              {/* <DisplayTeams userId={userId} string='hello' /> */}
              <Text style={styles.textOne} >{userFullName}</Text>
              <Text style={styles.textTwo} >View Profile</Text>
            </View>
            </View>
        </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={settings_card_style.button}>
        <MaterialCommunityIcons
            name="account-circle"
            size={25}
            color="#0C1821"
            style={{}}
            />
          <Text style={settings_card_style.buttonText} >View Profile</Text>
        </TouchableOpacity> */}
      <TopButton
        text="Switch Team"
        onPress={() => navigation.navigate('ChooseTeam')} />

      <SettingsButton
        text="ClubHubPlus"
        onPress={() => navigation.navigate('ClubHubPlus')} />

      <SettingsButton
        text="Language"
        onPress={() => navigation.navigate('Language')} />

      <SettingsButton
        text="Terms of Service"
        onPress={() => navigation.navigate('TermsOfService')} />

      <SettingsButton
        text="Privacy Policy"
        onPress={() => navigation.navigate('PrivacyPolicy')} />

      <SettingsButton 
        text="Sign Out"
        onPress={() => signOutUser()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F7',
    marginTop:20,
  },
  textOne: {
    color: '#0C1821',
    fontFamily: 'montserrat-semibold',
    fontSize:16,
    marginTop:14,
    marginRight:200,
  },
  textTwo: {
    color: '#0C1821',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
});

