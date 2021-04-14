import React, { useState } from 'react';
import { Image, ScrollView, Text, View, Modal, SafeAreaView, FlatList, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

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
import modal_styles from '../../assets/styles/ModalStyle';

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

  const [playerInformationModalOpen, setPlayerInformationflowModalOpen] = useState(false);

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
            <HalfModalButton text='Player Information' primaryIconName='information-outline'  onPress={() => { closeOverflowModal(false); setPlayerInformationflowModalOpen(true); }} />

            <CancelButton text="Cancel" onPress={() => closeOverflowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

      <Modal
        visible={playerInformationModalOpen}
        animationType='slide'>

        <SafeAreaView style={modal_styles.modalContent}>
          <View style={modal_styles.modalContent}>
            <View style={modal_styles.modalHeader}>
              <Text style={modal_styles.modalTitle}>Player information</Text>
              <MaterialIcons
                name='close'
                color='#333'
                size={24}
                style={modal_styles.modalToggleExit}
                onPress={() => setPlayerInformationflowModalOpen(false)} />
            </View>

            <Text style={modal_styles.labelText}>Name</Text>
            <TextInput
              style={modal_styles.modalInput}
              placeholder="Enter name..."
              value="Jack Lynch" />

              <Text style={modal_styles.labelText}>Position</Text>
              <TextInput
              style={modal_styles.modalInput}
              placeholder="Select position"
              value="Forward" />

              <View style={{ marginTop: 30 }}>
                <CancelButton
                text="Save" />
              </View>
            </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}