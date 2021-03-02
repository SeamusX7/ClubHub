import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  medium_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    height: 64,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  medium_card_content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  medium_card_icon_container: {
    marginLeft: 20,
  },
  medium_card_info_container: {
    left: -28,
  },
  medium_card_overflow_container: {
    marginRight: 20,
  },
  medium_card_primary_text: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginBottom: 1,
  },
  medium_card_secondary_text: {
    color: '#0c1821',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  }
})