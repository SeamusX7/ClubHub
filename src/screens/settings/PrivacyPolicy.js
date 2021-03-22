import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{ marginLeft: 20 }} >
            <Ionicons onPress={() => navigation.navigate('Settings')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <ScrollView style={styles.container}>
      <Text style={styles.textType}>
        {'\n'}<Text style={styles.heading}>ClubHub Privacy Policy</Text>{'\n'}

        {'\n'}This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from  (the "Application").
        {'\n'}
        {'\n'}<Text style={styles.heading}>PERSONAL INFORMATION WE COLLECT</Text>{'\n'}
        {'\n'}
When you use our app, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We refer to this automatically-collected information as “Device Information.”

We collect Device Information using the following technologies:

    - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
    - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
    - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.

Additionally when you make a purchase or attempt to make a purchase through the app, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers , email address, and phone number.  We refer to this information as “Order Information.”

When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
{'\n'}
        {'\n'}<Text style={styles.heading}>HOW DO WE USE YOUR PERSONAL INFORMATION?</Text>{'\n'}
        {'\n'}
We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
Communicate with you;
Screen our orders for potential risk or fraud; and
When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.

We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
{'\n'}
        {'\n'}
        <Text style={styles.heading}>SHARING YOUR PERSONAL INFORMATION</Text>{'\n'}
        {'\n'}
We do not share any of your personal information, all of the information stored on the app is encrypted using industry standards to ensure you have a worry free user experience knowing we are protecting your information.

We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
{'\n'}
        {'\n'}<Text style={styles.heading}>DO NOT TRACK</Text>{'\n'}{'\n'}
Please note that we do not alter our app's data collection and use practices when we see a Do Not Track signal from your browser.
{'\n'}
        {'\n'}<Text style={styles.heading}>YOUR RIGHTS</Text>{'\n'}{'\n'}
If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the app), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
{'\n'}
        {'\n'}<Text style={styles.heading}>DATA RETENTION</Text>{'\n'}{'\n'}
When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
{'\n'}
        {'\n'}<Text style={styles.heading}>MINORS</Text>{'\n'}{'\n'}
The App is not intended for individuals under the age of 18.
{'\n'}
        {'\n'}<Text style={styles.heading}>CHANGES</Text>{'\n'}{'\n'}
We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
{'\n'}
        {'\n'}<Text style={styles.heading}>CONTACT US</Text>{'\n'}{'\n'}
For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at clubhubltd@gmail.com or by mail using the details provided below:
{'\n'}

{'\n'}{'\n'} </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  textType: {
    color: '#5B5B65',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  heading: {
    fontFamily: 'montserrat-medium',
    color: '#91999E',
    fontSize: 13,
  }
});