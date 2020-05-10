import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  phone: {
    fontFamily: 'Montserrat',
    fontSize: 18,
  },
  loginBtn: {
    backgroundColor: '#1fbfaf',
    borderRadius: 5,
    height: 60,
    width: '100%',
    marginBottom: 30,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  linkBtn: {
    fontSize: 18,
    color: '#1fbfaf',
    fontFamily: 'Montserrat-SemiBold',
  },
  linkBtnSm: {
    fontSize: 16,
    color: '#1fbfaf',
    fontFamily: 'Montserrat-SemiBold',
  },
  text: {
    color: '#444',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 25,
  },
  page: {
    flex: 1,
  },
  title: {
    // ...Typography.text20,
    color: 'red',
  },
  header: {
    // ...Typography.text60,
    marginVertical: 20,
    color: 'red',
  },
  actionBarLabel: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles
