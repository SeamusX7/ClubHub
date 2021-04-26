import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../../firebase/config';

// Component Imports
import SquareCard from '../../components/cards/SquareCard';
import SquareCardLeft from '../../components/cards/SquareCardLeft';
import SquareCardRight from '../../components/cards/SquareCardRight';
import MediumCard from '../../components/cards/MediumCard';
import LargeCard from '../../components/cards/LargeCard';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import profile_styles from '../../assets/styles/ProfileStyle'
import square_card_styles from '../../assets/styles/SquareCardStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import large_card_styles from '../../assets/styles/LargeCardStyle';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { getactivePlayerID, getactivePlayer } from '../../store/activePlayer';

export default function PlayerScreen({navigation}) {
  var playerId = useSelector(getactivePlayerID);
  var player = useSelector(getactivePlayer);
  console.log("REDUX player  => ", player);

  //const [player, setPlayer] = useState([]); 

  

  // const db = firebase.firestore();

  // useEffect(() => {
  //   const subscriber = db
  //     .collection('users')
  //     .where('id', '==', playerId)
  //     .onSnapshot(querySnapshot => {
  //       const userData = [];

  //       querySnapshot.forEach(documentSnapshot => {
  //         userData.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });

  //       //setPlayer(userData);
  //       setPlayer(() => {
  //         return { userData }
  //       });

  //       console.log("userData item => ",userData)

  //     });

  //   // Unsubscribe from events when no longer in use
  //   return () => subscriber();
  // }, []);

      // useEffect(() => {

      //   db.collection('users')
      //     .where('id', '==', playerId)
      //     .get()
      //     .then(snapshot => {
      //       snapshot.forEach(doc => {
      //         player.push({
      //           ...doc.data(),
      //           key: doc.id,
      //         });
      //       });
      //       setTeams(player);
      //     })
    
      // }, [player]);

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{marginLeft: 20}} >
            <Ionicons onPress={() => navigation.navigate('Team')} name="ios-arrow-back" size={28} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={global_styles.screen_container}>

      <View style={profile_styles.profile_container}>
        <Image
          style={profile_styles.profile_image}
          source={require('../../assets/images/player-1.png')}
        />
        <View style={profile_styles.profile_content}>
          <Text style={profile_styles.profile_primary_text}>{player.Name}</Text>
          <Text style={profile_styles.profile_secondary_text}>Edit your profile</Text>
        </View>
      </View>

      <Text style={{ ...global_styles.title, marginTop: 30, marginBottom: 10 }}>Attendance - 2020/21</Text>

      <MediumCard>
        <View style={medium_card_styles.medium_card_info_container}>
          <View style={medium_card_styles.medium_card_content}>
            <Text style={medium_card_styles.medium_card_primary_text}>Last 5 sessions</Text>

            <View style={medium_card_styles.medium_card_circle_container}>
              <View style={medium_card_styles.medium_card_circle_attended}></View>
              <View style={medium_card_styles.medium_card_circle_attended}></View>
              <View style={medium_card_styles.medium_card_circle_attended}></View>
              <View style={medium_card_styles.medium_card_circle_unattended}></View>
              <View style={medium_card_styles.medium_card_circle_attended}></View>
            </View>
          </View>
        </View>
      </MediumCard>

      <View style={square_card_styles.square_card_container}>
        <SquareCardLeft>
          <Text style={square_card_styles.square_card_statistics}>78%</Text>
          <Text style={square_card_styles.square_card_title}>Match</Text>
        </SquareCardLeft>
        <SquareCard>
          <Text style={square_card_styles.square_card_statistics}>89%</Text>
          <Text style={square_card_styles.square_card_title}>Training</Text>
        </SquareCard>
        <SquareCardRight>
          <Text style={square_card_styles.square_card_statistics}>92%</Text>
          <Text style={square_card_styles.square_card_title}>Gym</Text>
        </SquareCardRight>
      </View>

      <Text style={{ ...global_styles.title, marginTop: 20, marginBottom: 10 }}>Personal details</Text>

      <LargeCard>
        <View style={large_card_styles.large_card_container}>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Age:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>21</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Height:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>190cm</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Weight:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>50kg</Text>
          </View>
          <View style={large_card_styles.large_card_content}>
            <Text style={large_card_styles.large_card_primary_text}>Position:</Text>
            <Text style={large_card_styles.large_card_secondary_text}>Full forward</Text>
          </View>
        </View>
      </LargeCard>

    </View>
  )
}
