import React from 'react';
import {ActionBar, View} from 'react-native-ui-lib'; //eslint-disable-line

import styles from './styles';
import {actions} from './enums';

export default function AppBar() {
  return (
    <View style={styles.page}>
      <ActionBar
        style={{height: 70, borderTopWidth: 1, borderColor: '#ccc'}}
        centered
        actions={actions}
      />
    </View>
  );
}
