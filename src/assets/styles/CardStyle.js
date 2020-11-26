import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#F0F2F7',
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
  },
  textView: {
    marginLeft: 20,
    marginTop: 3,
  },
  textOne: {
    color: '#1D3557',
    fontFamily: 'montserrat-bold',
  },
  textTwo: {
    color: '#1D3557',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
  option: {
    position: 'absolute',
    right: 0,
    marginTop: 12,
  }
})