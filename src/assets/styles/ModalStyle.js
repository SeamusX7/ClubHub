import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  modalToggleExit: {

  },
  modalToggleCreate: {

  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    color: '#333',
    fontFamily: 'montserrat-semibold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalInput: {
		backgroundColor: '#f0f2f7',
    borderRadius: 5,
    fontFamily: 'montserrat-regular',
		paddingHorizontal: 16,
		paddingVertical: 15,
  },
  modalLargeInput: {
		backgroundColor: '#f0f2f7',
    borderRadius: 5,
    fontFamily: 'montserrat-regular',
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
  labelText: {
		fontFamily: 'montserrat-regular',
		fontSize: 14,
		marginTop: 20,
		marginBottom: 4
	},
})