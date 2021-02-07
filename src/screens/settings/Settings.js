import React from 'react';
import { firebase } from '../../firebase/config';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import SettingsButton from '../../components/SettingsButton';
import LogoutButton from '../../components/LogoutButton';
import large_card_style from '../../assets/styles/LargeCardStyle';
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
console.log('user name =====> : ', userFullName);

  return (
    <View style={styles.container}>
      <View style={large_card_style.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={large_card_style.largeLeftCard}>
        <View style={modal_styles.modalHeader}>
          <MaterialCommunityIcons
            name="account-circle"
            size={70}
            color="#5386e4"
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

      <SettingsButton
        text="ClubHubPlus"
        onPress={() => navigation.navigate('ClubHubPlus')} />

      <SettingsButton
        text="Switch Team"
        onPress={() => navigation.navigate('ChooseTeam')} />

      <SettingsButton
        text="Customisation"
        onPress={() => navigation.navigate('Customisation')} />

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
        text="TEMP Player Profile"
        onPress={() => navigation.navigate('PlayerProfile')} />

      <LogoutButton 
        text="Sign Out"
        onPress={() => signOutUser()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    marginTop:10,
  },
  textOne: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
    fontSize:16,
    marginTop:14,
    marginRight:200,
  },
  textTwo: {
    color: '#1D3557',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
});

