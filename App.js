/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {
  Button,
  Colors,
  Typography,
  View,
  Text,
  TextField,
  MaskedInput,
} from 'react-native-ui-lib'; //eslint-disable-line
import ActionBar from './src/components/ActionBar';
import pad from './src/utils/pad';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  renderTimeText(value) {
    const maskedValue = value + pad(value);
    const part1 = maskedValue.substr(0, 3);
    const part2 = maskedValue.substr(3, 3);
    const part3 = maskedValue.substr(6, 2);
    const part4 = maskedValue.substr(8, 2);

    return (
      <Text text16 dark20 center>
        +7 ({part1}) {part2}-{part3}-{part4}
      </Text>
    );
  }

  render() {
    return (
      <View flex>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always">
          <View row center marginT-40 marginB-40>
            <Text text40 marginB-20>
              Вход
            </Text>
          </View>
          <View
            row
            center
            marginB-40
            style={{
              borderWidth: 1,
              borderColor: Colors.grey10,

              height: 60,
              paddingLeft: 10,
              borderRadius: 5,
            }}>
            <MaskedInput
              placeholder="Телефон *"
              renderMaskedText={this.renderTimeText}
              keyboardType={'numeric'}
              maxLength={10}
              value={''}
              style={{backgroundColor: 'red'}}
            />
          </View>
          <View
            row
            center
            marginB-40
            style={{
              borderWidth: 1,
              borderColor: Colors.grey10,

              height: 60,
              paddingLeft: 10,
              borderRadius: 5,
            }}>
            <TextField
              placeholder={'Пароль'}
              floatingPlaceholder={true}
              hideUnderline
              style={{
                width: '100%',
              }}
            />
          </View>
          <View row center>
            <Button style={styles.loginBtn}>
              <Text style={styles.loginText}>Войти</Text>
            </Button>
          </View>
          <View row center>
            <Button link>
              <Text style={styles.linkBtnSm}>
                Забыл пароль или поменял телефон!
              </Text>
            </Button>
          </View>
          <View style={styles.lineStyle} />
          <View row center>
            <Text style={styles.text}>Еще нет аккаунта?</Text>
          </View>
          <View row center>
            <Button link>
              <Text style={styles.linkBtn}>Зарегистрируйтесь</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
