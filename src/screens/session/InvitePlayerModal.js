import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

// Component Imports
import FlatButtonSecondary from '../../components/buttons/ModalSecondaryButton';
import CustomButton from '../../components/buttons/CustomButton';

// Style Imports
import modal_styles from '../../assets/styles/ModalStyle';

export default class NewSessionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      checked3: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={modal_styles.invitePlayerMargin}>
          <View style={modal_styles.invitePlayerRow}>
            <View style={modal_styles.circle}></View>
            <Text style={modal_styles.labelTextSemiBold}>Jack Lynch</Text>
            <View style={modal_styles.checkboxAlignment}>
              <CheckBox
                checked={this.state.checked}
                checkedColour='#5386E4'
                uncheckedColor='#F0F2F7'
                checkedIcon='check-square'
                uncheckedIcon='square'
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
            </View>
          </View>

          <View style={modal_styles.invitePlayerRow}>
            <View style={modal_styles.circle}></View>
            <Text style={modal_styles.labelTextSemiBold}>Keane Callan</Text>
            <View style={modal_styles.checkboxAlignment}>
              <CheckBox
                checked={this.state.checked2}
                checkedColour='#5386E4'
                uncheckedColor='#F0F2F7'
                checkedIcon='check-square'
                uncheckedIcon='square'
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
            </View>
          </View>

          <View style={modal_styles.invitePlayerRow}>
            <View style={modal_styles.circle}></View>
            <Text style={modal_styles.labelTextSemiBold}>Shane McCleary</Text>
            <View style={modal_styles.checkboxAlignment}>
            <CheckBox
                checked={this.state.checked3}
                checkedColour='#5386E4'
                uncheckedColor='#F0F2F7'
                checkedIcon='check-square'
                uncheckedIcon='square'
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
            </View>
          </View>
        </View>

        <View style={styles.positionButtons}>
          <FlatButtonSecondary
            text="Select all" />

          <CustomButton
            text="Invite" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionButtons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});