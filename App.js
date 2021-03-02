import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { firebase } from './src/firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//redux
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux';
import {userAdded} from './src/store/user'


// Local File Imports
import { LoginScreen, RegistrationScreen } from './src/screens';
import ChooseTeamScreen from './src/screens/launchpad/ChooseTeam';
import TabNavigator from './src/routes/TabNavigator';
import MessageScreen from './src/screens/message/Message'
import ViewMessageScreen from './src/screens/message/ViewMessage'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const getFonts = () => Font.loadAsync({
  'montserrat-regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-italic': require('./src/assets/fonts/Montserrat-Italic.ttf'),
  'montserrat-light': require('./src/assets/fonts/Montserrat-Light.ttf'),
  'montserrat-light-italic': require('./src/assets/fonts/Montserrat-LightItalic.ttf'),
  'montserrat-medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
  'montserrat-medium-italic': require('./src/assets/fonts/Montserrat-MediumItalic.ttf'),
  'montserrat-semibold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  'montserrat-semibold-italic': require('./src/assets/fonts/Montserrat-SemiBoldItalic.ttf'),
  'montserrat-bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  'montserrat-bold-italic': require('./src/assets/fonts/Montserrat-BoldItalic.ttf'),
});

const Stack = createStackNavigator();

const store = configureStore();


export default function App() {
  const [user, setUser] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setUser(userData)
            store.dispatch(userAdded({userData}));
          })
          .catch((error) => {

          });
      } else {

      }
    });
  }, []);

  if (fontsLoaded) {
    return (<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, gestureEnabled: false, headerTitleStyle: { color: '#0c1821', fontFamily: 'montserrat-medium' } }} >
          <Stack.Screen name="ChooseTeam">
            {props => <ChooseTeamScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="TabNavigator" component={TabNavigator}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} options={{ animationEnabled: false }} />
          <Stack.Screen name="Registration" component={RegistrationScreen} options={{ animationEnabled: false }} />
          <Stack.Screen name="Message" component={MessageScreen} options={{ headerShown: true, headerBackTitleVisible: false, gestureEnabled: true, title: 'Messages' }} ></Stack.Screen>
          <Stack.Screen name="ViewMessage" component={ViewMessageScreen} options={{ headerShown: true, headerBackTitleVisible: false, gestureEnabled: true, title: 'View Message' }} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)} />
    )
  }
}