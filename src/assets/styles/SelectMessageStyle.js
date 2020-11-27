import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 66,
  }, 
  selectMessage: {
    bottom: 1,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 14,
  },
  circle: {
    backgroundColor: '#F0F2F7',
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
  },
  textView: {
    marginLeft: 20,
  },
  textOne: {
    color: '#333333',
    fontFamily: 'montserrat-semibold',
  },
  textTwo: {
    color: '#333333',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
  alert: {
    backgroundColor: '#5386E4',
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    alignSelf: 'center',
    marginTop: 8,
  },
  sent: {
    position: 'absolute',
    right: 0,
  },
  time: {
    fontFamily: 'montserrat-medium',
    fontSize: 12,
  }
})