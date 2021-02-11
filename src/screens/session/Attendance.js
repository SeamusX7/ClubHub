import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Button } from 'react-native';
import mini_card_styles from '../../assets/styles/MiniCardStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MiniCardPending from '../../components/MiniCardPending'
import MiniCardAccepted from '../../components/MiniCardAccepted'
import modal_styles from '../../assets/styles/ModalStyle';

export default function SecondRoute() {

  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.invitationStatus}>

          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <MiniCardPending>
              <Text style={mini_card_styles.text}>Keane Callan</Text>
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

          <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)}>
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
          </TouchableOpacity>

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