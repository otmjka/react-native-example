import React from 'react';

import {ScrollView} from 'react-native';
import {View} from 'react-native-ui-lib'; //eslint-disable-line

import ActionBar from '../ActionBar';
import LoginForm from '../../containers/LoginFormContainer';

import styles from './styles';

export default function EntryPoint() {
  return (
    <View flex>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <LoginForm />

      </ScrollView>
      <ActionBar />
    </View>
  );
}
