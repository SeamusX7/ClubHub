import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Modal, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Component Imports
import SquareCard from '../../components/cards/SquareCard';
import SquareCardRight from '../../components/cards/SquareCardRight';
import SquareCardLeft from '../../components/cards/SquareCardLeft';
import MediumPlayerCard from '../../components/cards/MediumPlayerCard';
import OverflowMenuButton from '../../components/buttons/OverflowMenuButton';
import CancelButton from '../../components/buttons/CustomButton';
import HalfModalButton from '../../components/buttons/HalfModalButton';

// Style Imports
import global_styles from '../../assets/styles/GlobalStyle';
import square_card_styles from '../../assets/styles/SquareCardStyle';
import medium_card_styles from '../../assets/styles/MediumCardStyle';
import half_modal_styles from '../../assets/styles/HalfModalStyle';

//redux
import { useDispatch , useSelector } from 'react-redux';
import { getActiveTeamWin, getActiveTeamLoss, getActiveTeamDraw, getActiveTeamPlayersArray} from '../../store/activeTeam';


export default function TeamScreen({ navigation }) {

  var win = useSelector(getActiveTeamWin);
  var draw = useSelector(getActiveTeamDraw);
  var loss = useSelector(getActiveTeamLoss);
  var players = useSelector(getActiveTeamPlayersArray);

  const [OverflowModalOpen, setOverflowModalOpen] = useState(false);

  const closeOverflowModal = () => {
    setOverflowModalOpen(false);
  }

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
        <SquareCardLeft>
          <Text style={square_card_styles.square_card_statistics}>{win}</Text>
          <Text style={square_card_styles.square_card_title}>Wins</Text>
        </SquareCardLeft>
        <SquareCard>
          <Text style={square_card_styles.square_card_statistics}>{loss}</Text>
          <Text style={square_card_styles.square_card_title}>Losses</Text>
        </SquareCard>
        <SquareCardRight>
          <Text style={square_card_styles.square_card_statistics}>{draw}</Text>
          <Text style={square_card_styles.square_card_title}>Draws</Text>
        </SquareCardRight>
      </View>

      <Text style={{ ...global_styles.title, marginBottom: 10, marginTop: 30 }}>Players</Text>
      <ScrollView>
        <FlatList
        data={players}
        renderItem={({ item }) => (
          <MediumPlayerCard onPress={() => navigation.navigate('Player')}>
          <View style={medium_card_styles.medium_card_icon_container}>
            <Image
              style={medium_card_styles.medium_card_image}
              source={require('../../assets/images/player-2.png')}
            />
          </View>
          <View style={medium_card_styles.medium_card_info_container}>
            <Text style={medium_card_styles.medium_card_primary_text}>{item.Name}</Text>
            <Text style={medium_card_styles.medium_card_secondary_text}>{item.position}</Text>
          </View>
          <View style={medium_card_styles.medium_card_overflow_container}>
            <OverflowMenuButton onPress={() => setOverflowModalOpen(true)} />
          </View>
        </MediumPlayerCard>
        )} />
      </ScrollView>

      <Modal
        visible={OverflowModalOpen}
        transparent={true}
        animationType='slide'>
        <SafeAreaView style={half_modal_styles.halfModalContentExtraSmall} >
          <View style={half_modal_styles.halfModalView}>
            <HalfModalButton text='Player Information' primaryIconName='information-outline' />

            <CancelButton text="Cancel" onPress={() => closeOverflowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}