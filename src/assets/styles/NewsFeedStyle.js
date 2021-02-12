import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#1d3557',
    fontFamily: 'montserrat-bold',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 11,
  },
  circleTitle : {
    flexDirection: 'row',
  },
  likeComment : {
    flexDirection: 'row',
  },
  postedOn: {
    color: '#333',
    fontFamily: 'montserrat-regular',
    marginTop: 11,
  },
  middleRow: {
    marginTop: 14,
  },
  description: {
    color: '#333',
    fontFamily: 'montserrat-regular',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  likeGroup: {
    flexDirection: 'row',
  },
  commentGroup: {
    flexDirection: 'row',
    marginLeft: 14,
  },
  iconText: {
    color: '#b7b7b7',
    fontFamily: 'montserrat-regular',
    marginLeft: 4,
    marginTop: 2,
  },
  commentCount: {
    color: '#b7b7b7',
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    marginTop: 4,
  },
  image: {
    borderRadius: 8,
    height: 160,
    marginTop: 8,
    width: '100%'
  }
})