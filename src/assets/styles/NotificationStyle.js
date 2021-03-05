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
    height: 80,
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
  },
  card2: {
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 10,
    height: 130,
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
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
    marginRight: 50,
    marginTop: 3,
  },
  textViewNoCircle: {
    marginTop: 3,
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
  textSpace: {
    color: '#1d3557',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
    borderRightWidth: 10,
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
})