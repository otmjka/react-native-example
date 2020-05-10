import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

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
