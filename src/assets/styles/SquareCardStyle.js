import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  square_card_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  square_card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    height: 110,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0, },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    width: 110,
  },
  square_card_content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  square_card_icon: {
    marginBottom: 6,
  },
  square_card_statistics: {
    color: '#5386E4',
    fontFamily: 'montserrat-bold',
    fontSize: 30,
  },
  square_card_title: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
    marginTop: 6,
  }
})