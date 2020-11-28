import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //Message Screen
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
  },
  //ViewMessage Screen
  textMessageBoxOne: {
    width: 192,
    height: 26,
    backgroundColor: '#5386E4',
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 10,
  },
  textMessageOne: {
    color: '#fff',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  textTimeOne: {
    fontFamily: 'montserrat-medium',
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 3,
    marginRight: 2,
  },
  textMessageBoxTwo: {
    width: 192,
    height: 26,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 43,
    borderBottomLeftRadius: 0,
  },
  textMessageTwo: {
    color: '#3F3F43',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  textMessageBoxThree: {
    width: 139,
    height: 26,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 3,
    marginLeft: 33,
    borderTopLeftRadius: 0,
  },
  textMessageThree: {
    color: '#3F3F43',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  textTimeThree: {
    fontFamily: 'montserrat-medium',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginTop: 3,
    marginLeft: 6,
  },
  profile: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  newMessages: {
    marginTop: 30,
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    color: '#5386E4',
    alignSelf: 'center', 
  },
  line: {
    backgroundColor: '#5386E4',
    height: 1,
    flex: 1,
    alignSelf: 'center',
    top: 15,
    marginHorizontal: 10
  },
  profileTwo: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
    marginTop: 10,
  }
})