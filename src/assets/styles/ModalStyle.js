import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
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
    borderRadius: 8,
    fontFamily: 'montserrat-regular',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  modalLargeInput: {
    backgroundColor: '#f0f2f7',
    borderRadius: 8,
    fontFamily: 'montserrat-regular',
    height: 80,
    paddingBottom: 15,
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  labelText: {
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 20,
  },
  labelTextSemiBold: {
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  invitePlayerMargin: {
    marginTop: 10,
  },
  invitePlayerRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circle: {
    backgroundColor: '#f0f2f7',
    borderRadius: 38 / 2,
    height: 38,
    width: 38,
  },
  checkboxAlignment: {
    marginTop: -10,
    position: 'absolute',
    right: -22,
  },
  checkbox: {
    backgroundColor: '#f0f2f7',
    borderRadius: 4,
    borderWidth: 0,
    color: '#5386e4',
  },
})