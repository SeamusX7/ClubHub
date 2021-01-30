import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardPending: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 8,
    borderLeftWidth: 10,
    borderLeftColor: '#5386e4',
    marginTop: 10,
  },
  cardAccepted: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 8,
    borderLeftWidth: 10,
    borderLeftColor: '#72E453',
    marginTop: 10,
  },
  cardDeclined: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 8,
    borderLeftWidth: 10,
    borderLeftColor: '#E45353',
    marginTop: 10,
  },
  text: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    marginTop: 12,
    marginLeft: 20
  }
})