import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 6,
    height: 70,
    borderLeftWidth: 10,
    borderLeftColor: '#5386e4',
  },
  winCard: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 6,
    height: 70,
    borderLeftWidth: 10,
    borderLeftColor: '#72e453',
  },
  lossCard: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 6,
    height: 70,
    borderLeftWidth: 10,
    borderLeftColor: '#e45353',
  },
  circle: {
    backgroundColor: '#F0F2F7',
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  icon: {
    textAlign: 'center',
    marginTop: 12,
  },
  text_view: {
    marginLeft: 20,
    marginTop: 3,
  },
  textViewNoCircle: {
    marginTop: 3,
  },
  singleLineTextView: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  textOne: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
  },
  text_two: {
    color: '#1d3557',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
  singleText: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
  },
  more: {
    position: 'absolute',
    right: 0,
    marginTop: 12,
  },
  playerNumber: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  matchScore: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  newsFeedCard: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom:10,
    marginVertical: 6,
    // height: 180,
  }
})