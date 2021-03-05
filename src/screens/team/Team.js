import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import SquareCard from '../../components/cards/SquareCard';
import MediumPlayerCard from '../../components/cards/MediumPlayerCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import square_card_styles from '../../assets/styles/SquareCardStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';

export default function TeamScreen({ navigation }) {

  return (
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 20 }} >
            <MaterialCommunityIcons onPress={() => navigation.navigate('Message')} name="message-text-outline" size={24} color={'#caccd0'} />
          </View>
        ),
      });
    }, [navigation]),

    <View style={global_styles.screen_container}>

      <Text style={{ ...global_styles.title, marginBottom: 10 }}>Team statistics</Text>
      <View style={square_card_styles.square_card_container}>
        <SquareCard>
          <Text style={square_card_styles.square_card_statistics}>7</Text>
          <Text style={square_card_styles.square_card_title}>Wins</Text>
        </SquareCard>
        <SquareCard>
          <Text style={square_card_styles.square_card_statistics}>3</Text>
          <Text style={square_card_styles.square_card_title}>Losses</Text>
        </SquareCard>
        <SquareCard>
          <Text style={square_card_styles.square_card_statistics}>1</Text>
          <Text style={square_card_styles.square_card_title}>Draws</Text>
        </SquareCard>
      </View>

      <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 30 }}>Players</Text>
      <ScrollView>
        <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-1.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>Jack Lynch</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>Forward</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton />
          </View>
        </MediumPlayerCard>

        <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-2.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>Joe McNally</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>Midfielder</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton />
          </View>
        </MediumPlayerCard>

        <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-3.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>Keane Callan</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>Defender</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton />
          </View>
        </MediumPlayerCard>

        <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-4.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>Ciaran Whelan</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>Goalkeeper</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton />
          </View>
        </MediumPlayerCard>

        <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-5.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>Kevin Nolan</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>Midfielder</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton />
          </View>
        </MediumPlayerCard>
      </ScrollView>
    </View>
  )
}