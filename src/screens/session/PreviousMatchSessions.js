import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { firebase } from '../../firebase/config';

// Local File Imports
import Search from '../../components/Search';
import SearchButton from '../../components/SearchButton';
import global_styles from '../../assets/styles/GlobalStyle';
import card_styles from '../../assets/styles/CardStyle';
import Card from '../../components/Card';
import MoreButton from '../../components/MoreButton';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { activeSessionAdded, getactiveSessionKey } from '../../store/activeSession';
import { activeTeamAdded, getActiveTeamKey } from '../../store/activeTeam';

export default function PreviousMatchSessionsScreen({ navigation }) {

  const [sessions, setSessions] = useState([]); // Initial empty array of sessions

  const dispatch = useDispatch();

  const db = firebase.firestore();

  const teamID = useSelector(getActiveTeamKey);

  useEffect(() => {

    db.collection('sessions')
    .where('teamId', '==', teamID)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        sessions.push({
          ...doc.data(),
          key: doc.id,
        });
      });

      setSessions(sessions);
      dispatch(sessionsAdded(sessions));

    });

 
}, [sessions]);

sessionSelected = item =>
  {
    setActiveSession(item);
    dispatch(activeSessionAdded(item));
    // const activeSessionKey = useSelector(getactiveSessionKey);
    // console.log('session selected ==> : ', item);
    // console.log('================================================================');
    // console.log('================================================================');
    // console.log('active session key => ',activeSessionKey);
    // console.log('================================================================');
    // console.log('================================================================');
    
   // navigation.navigate('TabNavigator')
  }

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

      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <Card
            // onPress={() => x.props.navigation.navigate('TabNavigator')}
            onPress={() => this.sessionSelected({item})}
          >
            <View style={card_styles.container}>
              <View style={card_styles.circle} >
                <MaterialCommunityIcons
                  name='trophy-outline'
                  size={20}
                  color='#5386e4'
                  style={card_styles.icon} />
              </View>
              <View style={card_styles.textView} >
                <Text style={card_styles.textOne} >{item.opposition}</Text>
                <Text style={card_styles.textTwo} >{item.timeStamp.toDate().toDateString()}</Text>
                <Text style={card_styles.textTwo} >{item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
              </View>
              <View style={card_styles.more} >
                <MoreButton onPress={() => activeModal(true, { item })} />
              </View>
            </View>
          </Card>
        )}
      />
      
      {/* <View style={{ marginTop: 30 }}>
        <Card onPress={() => navigation.navigate('ViewPreviousMatchSession')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.matchScore}>0-0</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>vs. Navan O'Mahonys</Text>
              <Text style={card_styles.textTwo}>6th February 2021</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </Card>
        <Card onPress={() => navigation.navigate('ViewPreviousMatchSession')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.matchScore}>1-3</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>vs. Bective GFC</Text>
              <Text style={card_styles.textTwo}>16th January 2021</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </Card>
        <Card onPress={() => navigation.navigate('ViewPreviousMatchSession')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.matchScore}>2-0</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>vs. Ratoath</Text>
              <Text style={card_styles.textTwo}>26th December 2020</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </Card>
      </View> */}

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