import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Button,  FlatList} from 'react-native';
import mini_card_styles from '../../assets/styles/MiniCardStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MiniCardPending from '../../components/MiniCardPending'
import MiniCardAccepted from '../../components/MiniCardAccepted'
import MiniCardDeclined from '../../components/MiniCardDeclined'
import modal_styles from '../../assets/styles/ModalStyle';

//redux
import { getUserId } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove, getactiveSessionPending, getactiveSessionDeclined, getactiveSessionAccepted } from '../../store/activeSession';
//import { FlatList } from 'react-native-gesture-handler';

export default function SecondRoute() {

  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [pendingInvitations, setpendingInvitations] = useState([]);
  

  const teamName = useSelector(getActiveTeamName);
  const opposition = useSelector(getactiveSessionOpposition);
  const date = useSelector(getactiveSessionDate);
  const time = useSelector(getactiveSessionTime);
  const location = useSelector(getactiveSessionLocation);
  let pending = useSelector(getactiveSessionPending);
  let declined = useSelector(getactiveSessionDeclined);
  let accepted = useSelector(getactiveSessionAccepted);
  
  

  useEffect(() => {

    setpendingInvitations(pending);
    console.log("pending invitations ==> ", pendingInvitations, "=================");

 }, []);
  

  // <FlatList
  //       data={sessions}
  //       renderItem={({ item }) => (
  //         <Card
  //           // onPress={() => x.props.navigation.navigate('TabNavigator')}
  //           onPress={() => this.sessionSelected({item})}>
  //           <View style={card_styles.container}>
  //             <View style={card_styles.circle} >
  //               {item.sessionType=="match" ? <MaterialCommunityIcons name='trophy-outline' size={20} color='#5386e4' style={card_styles.icon} />
  //                 : item.sessionType=="training" ? <Ionicons name='md-football' size={20} color='#5386e4' style={{...card_styles.icon, marginTop:11, marginLeft:2}} />
  //                 : <MaterialCommunityIcons name='dumbbell' size={20} color='#5386e4' style={card_styles.icon} /> }
  //             </View>
  //             <View style={card_styles.text_view} >
  //               {item.sessionType=="match" ? <Text style={card_styles.textOne}>vs. {item.opposition}</Text> : <Text style={card_styles.textOne}>{item.title}</Text>}
  //               <Text style={card_styles.text_two}>{item.timeStamp.toDate().toDateString()} | {item.timeStamp.toDate().toLocaleTimeString('en-US')}</Text>
  //             </View>
  //             <View style={card_styles.more} >
  //               <MoreButton onPress={() => activeModal(true, { item })} />
  //             </View>
  //           </View>
  //         </Card>
  //       )}
  //     />

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.invitationStatus}>


<FlatList
data={pending}
renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <MiniCardPending>
              <Text style={mini_card_styles.text}>{item.Name}</Text>
              <View style={styles.checkboxAlignment}>
                {shouldShow ? (
                  <MaterialCommunityIcons name="check-bold"
                    size={22}
                    color='#5386E4'
                  />
                ) : null}
              </View>
            </MiniCardPending>
          </TouchableOpacity>
           )}
          />

<FlatList
data={declined}
renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)}>
            <MiniCardDeclined>
              <Text style={mini_card_styles.text}>{item.Name}</Text>
              <View style={styles.checkboxAlignment}>
                {shouldShow2 ? (
                  <MaterialCommunityIcons name="check-bold"
                    size={22}
                    color='#5386E4'
                  />
                ) : null}
              </View>
            </MiniCardDeclined>
          </TouchableOpacity>
           )}
          />

<FlatList
data={accepted}
renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <MiniCardAccepted>
              <Text style={mini_card_styles.text}>{item.Name}</Text>
              <View style={styles.checkboxAlignment}>
                {shouldShow ? (
                  <MaterialCommunityIcons name="check-bold"
                    size={22}
                    color='#5386E4'
                  />
                ) : null}
              </View>
            </MiniCardAccepted>
          </TouchableOpacity>
           )}
          />

          {/* <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)}>
            <MiniCardAccepted>
              <Text style={mini_card_styles.text}>Jack Lynch</Text>
              <View style={styles.checkboxAlignment}>
                {shouldShow2 ? (
                  <MaterialCommunityIcons name="check-bold"
                    size={22}
                    color='#5386E4'
                  />
                ) : null}
              </View>
            </MiniCardAccepted>
          </TouchableOpacity> */}

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f7',
    flex: 1,
    margin: 20,
  },
  checkboxAlignment: {
    right: 0,
    position: 'absolute',
    marginRight: 10,
    marginVertical: 8
  },
  checkbox: {
    backgroundColor: '#F0F2F7',
    color: '#5386E4',
    borderRadius: 4,
    borderWidth: 0,
  },
});