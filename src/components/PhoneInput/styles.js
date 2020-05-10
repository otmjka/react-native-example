import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  label: {
    color: '#ccc',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
  },
  inputGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  phone: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#777'
  },
  error: {
    color: 'red',
  },
  placeholder: {position: 'absolute', left: 0, top: 0}
});

export default styles;
