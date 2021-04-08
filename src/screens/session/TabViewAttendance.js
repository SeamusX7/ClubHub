import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements'

// Component Imports
import SmallCard from '../../components/cards/SmallCard';

// Style Imports
import small_card_styles from '../../assets/styles/SmallCardStyle';
import global_styles from '../../assets/styles/GlobalStyle';

//redux
import { getUserId } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { teamsAdded, getTeams } from '../../store/teams';
import { activeTeamAdded, getActiveTeamKey, getActiveTeamName } from '../../store/activeTeam';
import { sessionsAdded, getSessions } from '../../store/sessions';
import { getactiveSessionDate, getactiveSessionTime, getactiveSessionOpposition, getactiveSessionLocation, activeSessionRemove, getactiveSessionPending, getactiveSessionDeclined, getactiveSessionAccepted } from '../../store/activeSession';
//import { FlatList } from 'react-native-gesture-handler';

export default class SecondRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false
    }
  }

  // const [shouldShow, setShouldShow] = useState(false);
  // const [shouldShow2, setShouldShow2] = useState(false);
  // const [pendingInvitations, setpendingInvitations] = useState([]);


  // const teamName = useSelector(getActiveTeamName);
  // const opposition = useSelector(getactiveSessionOpposition);
  // const date = useSelector(getactiveSessionDate);
  // const time = useSelector(getactiveSessionTime);
  // const location = useSelector(getactiveSessionLocation);
  // let pending = useSelector(getactiveSessionPending);
  // let declined = useSelector(getactiveSessionDeclined);
  // let accepted = useSelector(getactiveSessionAccepted);



  // useEffect(() => {

  //   setpendingInvitations(pending);
  //   console.log("pending invitations ==> ", pendingInvitations, "=================");

  // }, []);


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
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ ...global_styles.title, marginBottom: 10 }}>Players at session</Text>
          <View style={styles.invitationStatus}>

            <SmallCard>
              <View style={small_card_styles.small_card_status_accepted}></View>
              <Text style={small_card_styles.small_card_text}>Jack Lynch</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
            </SmallCard>

            <SmallCard>
              <View style={small_card_styles.small_card_status_accepted}></View>
              <Text style={small_card_styles.small_card_text}>Chris Matthew</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked2}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked2: !this.state.checked2 })}
                />
              </View>
            </SmallCard>

            <SmallCard>
              <View style={small_card_styles.small_card_status_accepted}></View>
              <Text style={small_card_styles.small_card_text}>Connor Seery</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked3}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked3: !this.state.checked3 })}
                />
              </View>
            </SmallCard>

            <SmallCard>
              <View style={small_card_styles.small_card_status_pending}></View>
              <Text style={small_card_styles.small_card_text}>James Murphy</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked4}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked4: !this.state.checked4 })}
                />
              </View>
            </SmallCard>

            <SmallCard>
              <View style={small_card_styles.small_card_status_pending}></View>
              <Text style={small_card_styles.small_card_text}>Matthew Connolly</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked5}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked5: !this.state.checked5 })}
                />
              </View>
            </SmallCard>

            <SmallCard>
              <View style={small_card_styles.small_card_status_pending}></View>
              <Text style={small_card_styles.small_card_text}>Adam Casey</Text>
              <View style={styles.checkboxAlignment}>
                <CheckBox
                  checked={this.state.checked6}
                  checkedColour='#5386E4'
                  uncheckedColor='#F0F2F7'
                  checkedIcon='check-square'
                  uncheckedIcon='square'
                  size={26}
                  onPress={() => this.setState({ checked6: !this.state.checked6 })}
                />
              </View>
            </SmallCard>

          </View>
        </View>
      </ScrollView>
    )
  }
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
    marginVertical: 8
  },
  checkbox: {
    backgroundColor: '#F0F2F7',
    color: '#5386E4',
    borderRadius: 4,
    borderWidth: 0,
  },
});