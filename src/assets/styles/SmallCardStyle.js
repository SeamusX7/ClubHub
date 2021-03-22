import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  small_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    height: 46,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  small_card_content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  small_card_status_accepted: {
    backgroundColor: '#72e453',
    borderRadius: 10/2,
    height: 10,
    marginLeft: 20,
    width: 10
  },
  small_card_status_declined: {
    backgroundColor: '#e45353',
    borderRadius: 10/2,
    height: 10,
    marginLeft: 20,
    width: 10
  },
  small_card_status_pending: {
    backgroundColor: '#5386e4',
    borderRadius: 10/2,
    height: 10,
    marginLeft: 20,
    width: 10
  },
  small_card_text: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginBottom: 1,
    marginLeft: 20,
  },
})