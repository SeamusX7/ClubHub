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
    color: '#0c1821',
    fontFamily: 'montserrat-semibold',
    fontSize: 16,
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
  labelTextSemiBold: {
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 20,
  },
  invitePlayerMargin: {
    marginTop: 10,
  },
  invitePlayerRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circle: {
    backgroundColor: '#F0F2F7',
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
  },
  checkboxAlignment: {
    marginTop: -10,
    position: 'absolute',
    right: -22,
  },
  checkbox: {
    backgroundColor: '#F0F2F7',
    color: '#5386E4',
    borderRadius: 4,
    borderWidth: 0,
  },
})