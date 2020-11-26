import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '23%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  largeLeftCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopColor: '#5386e4',
    borderTopWidth: 8,
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    marginRight: 5,
  },
  largeCenterCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopColor: '#5386e4',
    borderTopWidth: 8,
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
  },
  largeRightCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopColor: '#5386e4',
    borderTopWidth: 8,
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    marginLeft: 5,
  },
  text: {
    color: '#1d3557',
    fontFamily: 'montserrat-semibold',
    fontSize: 13,
    textAlign: 'center',
  }
})