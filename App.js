/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import _ from 'lodash';
import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import cameraSelected from './icons/cameraSelected.png';
import search from './icons/search.png';
import tags from './icons/tags.png';
import collections from './icons/collections.png';
import richText from './icons/richText.png';
import home from './icons/home.png'
import {
  ActionBar,
  Typography,
  View,
  Text,
  MaskedInput,
} from 'react-native-ui-lib'; //eslint-disable-line
const actions = [
  {style: {flexDirection: 'column'}, iconStyle: {width: 36}, label: 'Главная', iconSource: home},
  {style: {flexDirection: 'column'}, iconStyle: {width: 36}, label: 'Поиск', iconSource: search},
  {style: {flexDirection: 'column'}, iconStyle: {width: 25}, label: 'Корзина', iconSource: tags},
  {style: {flexDirection: 'column'}, iconStyle: {width: 25}, label: 'Профиль', iconSource: collections},
  {style: {flexDirection: 'column'}, iconStyle: {width: 25}, label: 'Еще', iconSource: richText},
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.minput.focus();
    // }, 500);
  }

  renderTimeText(value) {
    const paddedValue = _.padStart(value, 4, '0');
    const hours = paddedValue.substr(0, 2);
    const minutes = paddedValue.substr(2, 2);

    return (
      <Text text20 dark20 center>
        {hours}
        <Text red10>h</Text>
        {minutes}
        <Text red10>m</Text>
      </Text>
    );
  }

  renderPrice(value) {
    const hasValue = Boolean(value && value.length > 0);
    return (
      <View row center>
        <Text text30 dark50>
          -
        </Text>
        <Text text30 dark10={hasValue} dark60={!hasValue}>
          {hasValue ? value : '00'}
        </Text>
        <Text text80 dark60>
          $
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View flex>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always">
          <Text text40 marginB-20>
            Masked Inputs
          </Text>

          <Text text70 marginT-20>
            Time Format
          </Text>
          <MaskedInput
            ref={r => (this.minput = r)}
            renderMaskedText={this.renderTimeText}
            keyboardType={'numeric'}
            maxLength={4}
            value={'15'}
          />

          <Text text70 marginT-40>
            Price/Discount
          </Text>
          <MaskedInput
            renderMaskedText={this.renderPrice}
            keyboardType={'numeric'}
          />
        </ScrollView>
        <View style={styles.page}>
          <ActionBar centered actions={actions} />
        </View>
      </View>
    );
  }
}

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
    ...Typography.text20,
  },
  header: {
    ...Typography.text60,
    marginVertical: 20,
  },
});
