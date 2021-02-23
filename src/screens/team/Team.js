import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local File Imports
import global_styles from '../../assets/styles/GlobalStyle';
import large_card_style from '../../assets/styles/LargeCardStyle';
import PlayerCard from '../../components/PlayerCard';
import card_styles from '../../assets/styles/CardStyle';
import MoreButton from '../../components/MoreButton';

export default function TeamScreen({ navigation }) {

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.icon} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#b7b7b7'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={styles.container}>

      <Text style={{ ...global_styles.title, marginBottom: 10 }}>Team statistics</Text>
      <View style={large_card_style.container}>
        <View style={large_card_style.largeLeftCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>5</Text>
          </View>
          <Text style={large_card_style.text}>Wins</Text>
        </View>
        <View style={large_card_style.largeCenterCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>2</Text>
          </View>
          <Text style={large_card_style.text}>Losses</Text>
        </View>
        <View style={large_card_style.largeRightCard}>
          <View style={styles.cardCircle}>
            <Text style={styles.cardCircleText}>1</Text>
          </View>
          <Text style={large_card_style.text}>Draws</Text>
        </View>
      </View>

      <Text style={{ ...global_styles.title, marginBottom: 4, marginTop: 30 }}>Players</Text>
      <ScrollView>
        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>6</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Shane McCleary</Text>
              <Text style={card_styles.textTwo}>Half back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>9</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Keane Callan</Text>
              <Text style={card_styles.textTwo}>Midfield</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>14</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Jack Lynch</Text>
              <Text style={card_styles.textTwo}>Full forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>1</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Ciaran Whelan</Text>
              <Text style={card_styles.textTwo}>Goalkeeper</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>3</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Joe McNally</Text>
              <Text style={card_styles.textTwo}>Full back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>8</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Tomas Brady</Text>
              <Text style={card_styles.textTwo}>Midfielder</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>10</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Kevin Nolan</Text>
              <Text style={card_styles.textTwo}>Right half-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>15</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Stefan Dennis</Text>
              <Text style={card_styles.textTwo}>Left corner-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>2</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Roy Carroll</Text>
              <Text style={card_styles.textTwo}>Right corner-back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>11</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Michael Donnellan</Text>
              <Text style={card_styles.textTwo}>Centre forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>13</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Frank Clarke</Text>
              <Text style={card_styles.textTwo}>Right corner-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>22</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Jason Molumby</Text>
              <Text style={card_styles.textTwo}>Full-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>12</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Derek O'Neill</Text>
              <Text style={card_styles.textTwo}>Left half-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>19</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>James McCarthy</Text>
              <Text style={card_styles.textTwo}>Goalkeeper</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>2</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Tony Kelly</Text>
              <Text style={card_styles.textTwo}>Right corner-back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>2</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Tony Kelly</Text>
              <Text style={card_styles.textTwo}>Right corner-back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>30</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Mike Denver</Text>
              <Text style={card_styles.textTwo}>Midfielder</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>24</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Jimmy Dunne</Text>
              <Text style={card_styles.textTwo}>Full back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>33</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Ben Hart</Text>
              <Text style={card_styles.textTwo}>Left corner-forward</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>

        <PlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={card_styles.container}>
            <View style={card_styles.circle}>
              <Text style={card_styles.playerNumber}>25</Text>
            </View>
            <View style={card_styles.textView}>
              <Text style={card_styles.textOne}>Json McAteer</Text>
              <Text style={card_styles.textTwo}>Left half-back</Text>
            </View>
            <View style={card_styles.more}>
              <MoreButton />
            </View>
          </View>
        </PlayerCard>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f7',
    paddingHorizontal: 20,
    paddingTop: 20,
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