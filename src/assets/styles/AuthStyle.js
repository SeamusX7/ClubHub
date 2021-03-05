import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
		alignSelf: 'center',
		height: 104,
		marginBottom: 21,
		resizeMode:'contain',
		width: 104,
	},
  title_container: {
		marginBottom: 11,
	},
	title_text: {
		color: '#0c1821',
		fontFamily: 'montserrat-semibold',
		fontSize: 20,
		textAlign: 'center',
	},
	subtitle_text: {
		color: '#91999e',
		fontFamily: 'montserrat-medium',
		fontSize: 14,
		marginTop: 2,
		textAlign: 'center',
	},
	footer_text: {
		color: '#0c1821',
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 21,
		textAlign: 'center',
	},
	footer_link: {
		color: "#5386e4",
		fontSize: 14,
		fontFamily: 'montserrat-semibold'
	},
	auth_input: {
		backgroundColor: '#fff',
    borderRadius: 8,
    fontFamily: 'montserrat-regular',
		paddingHorizontal: 16,
		paddingVertical: 15,
	},
	auth_label_text: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 11,
		marginBottom: 4
	},
	switch_text: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 7,
	},
	switch_group: {
		flexDirection: 'row',
		marginTop: 10,
	},
	auth_screen_container: {
		backgroundColor: '#f0f2f7',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	forgot_password_text: {
		fontFamily: 'montserrat-regular',
		marginTop: 8,
		textAlign: 'right',
	}
})