import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  large_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    height: 130,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  large_card_container: {
    marginLeft: 20,
    marginTop: 20,
  },
  large_card_content: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  large_card_primary_text: {
    color: '#91999E',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
  },
  large_card_secondary_text: {
    color: '#0C1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
    marginRight: 20,
    position: 'absolute',
    right: 0,
  }
})