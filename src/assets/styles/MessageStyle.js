import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //Message Screen
  button: {
    backgroundColor: '#fff',
    height: 66,
    width: '100%',
  },
  select_message: {
    bottom: 1,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 14,
  },
  circle: {
    backgroundColor: '#f0f2f7',
    borderRadius: 38 / 2,
    height: 38,
    width: 38,
  },
  text_view: {
    marginLeft: 20,
  },
  text_one: {
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
  },
  text_two: {
    color: '#0c1821',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 1,
  },
  alert: {
    alignSelf: 'center',
    backgroundColor: '#5386e4',
    borderRadius: 8 / 2,
    height: 8,
    marginTop: 8,
    width: 8,
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
  text_message_box_one: {
    alignSelf: 'flex-end',
    backgroundColor: '#5386e4',
    borderRadius: 8,
    height: 26,
    marginRight: 10,
    marginTop: 20,
    width: 192,
  },
  text_message_one: {
    color: '#fff',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  text_time_one: {
    alignSelf: 'flex-end',
    fontFamily: 'montserrat-medium',
    fontSize: 10,
    marginRight: 2,
    marginTop: 3,
  },
  text_message_box_two: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    borderBottomLeftRadius: 0,
    borderRadius: 8,
    height: 26,
    marginLeft: 43,
    marginTop: 20,
    width: 192,
  },
  text_message_two: {
    color: '#3f3f43',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  text_message_box_three: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    height: 26,
    marginLeft: 33,
    marginTop: 3,
    width: 139,
  },
  text_message_three: {
    color: '#3f3f43',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  text_time_three: {
    alignSelf: 'flex-start',
    fontFamily: 'montserrat-medium',
    fontSize: 10,
    marginLeft: 6,
    marginTop: 3,
  },
  profile: {
    backgroundColor: '#e0e0e0',
    borderRadius: 26 / 2,
    height: 26,
    marginHorizontal: 10,
    width: 26,
  },
  new_messages: {
    alignSelf: 'center',
    color: '#5386e4',
    fontFamily: 'montserrat-medium',
    fontSize: 12,
    marginTop: 30,
  },
  line: {
    alignSelf: 'center',
    backgroundColor: '#5386E4',
    flex: 1,
    height: 1,
    marginHorizontal: 10,
    top: 15,
  },
  profile_two: {
    backgroundColor: '#e0e0e0',
    borderRadius: 26 / 2,
    marginHorizontal: 10,
    marginTop: 10,
    height: 26,
    width: 26,
  }
})