import React from 'react';
import {ActionBar, View} from 'react-native-ui-lib'; //eslint-disable-line

import styles from './styles'
import {actions} from './enums';

export default function AppBar() {
  return (
    <View style={styles.page}>
      <ActionBar centered actions={actions} />
    </View>
  );
}
