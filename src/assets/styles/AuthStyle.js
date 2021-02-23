import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
		alignSelf: 'center',
		height: 104,
		resizeMode:'contain',
		marginBottom: 21,
		width: 104,
	},
  titleContainer: {
		marginBottom: 11,
	},
	titleText: {
		color: '#333',
		fontFamily: 'montserrat-semibold',
		fontSize: 20,
		textAlign: 'center',
	},
	subtitleText: {
		color: '#898989',
		fontFamily: 'montserrat-medium',
		fontSize: 14,
		marginTop: 2,
		textAlign: 'center',
	},
	footerText: {
		color: '#333',
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 21,
		textAlign: 'center',
	},
	footerLink: {
		color: "#5386e4",
		fontSize: 14,
		fontFamily: 'montserrat-semibold'
	},
	authInput: {
		backgroundColor: '#fff',
    borderRadius: 5,
    fontFamily: 'montserrat-regular',
		paddingHorizontal: 16,
		paddingVertical: 15,
	},
	authLabelText: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 11,
		marginBottom: 4
	},
	switchText: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 7,
	},
	switchGroup: {
		flexDirection: 'row',
		marginTop: 10,
	}
})