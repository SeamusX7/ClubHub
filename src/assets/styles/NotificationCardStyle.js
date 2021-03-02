import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  notification_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    marginBottom: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  notification_card_top_container: {
    flex: 1,
    flexDirection: 'row',
  },
  notification_card_button_container: {
    flexDirection: 'row',
    marginLeft: 44,
    marginTop: 10,
  },
  notification_card_info_container: {
    left: 20,
  },
  notification_card_primary_text: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginBottom: 1,
  },
  notification_card_secondary_text: {
    color: '#0c1821',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
  notification_card_status: {
    backgroundColor: '#5386e4',
    borderRadius: 10/2,
    height: 10,
    marginTop: 20,
    position: 'absolute',
    right: 0,
    width: 10,
  },
  notification_card_time_status_container: {
    position: 'absolute',
    right: 0,
  }
})