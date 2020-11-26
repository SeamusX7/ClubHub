import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';

export default function SessionScreen({ navigation }) {
  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <Ionicons onPress={() => navigation.navigate('Message')} name="md-text" size={24} color={'#B7B7B7'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={styles.container}>
      <Text style={global_styles.title}>Previous sessions</Text>
      <View style={large_card_style.container}>
        <TouchableOpacity onPress={() => navigation.navigate('PreviousMatchSessions')} style={large_card_style.largeLeftCard}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PreviousTrainingSessions')} style={large_card_style.largeCenterCard}>
          <Ionicons
            name="md-football"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Training</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PreviousGymSessions')} style={large_card_style.largeRightCard}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={36}
            color="#5386e4"
            style={{ alignSelf: 'center' }} />
          <Text style={large_card_style.text}>Gym</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Upcoming session"
        onPress={() => navigation.navigate('ViewUpcomingMatchSession')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    padding: 20,
  },
  icon: {
    marginRight: 20,
  }
});