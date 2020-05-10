import React from 'react';
import {Platform} from 'react-native'
import {View, Text} from 'react-native-ui-lib';
import styles from './styles';

export default function Heading({errors, name, setValue}) {
  const center = Platform.OS === 'ios'
  return (
    <View row center={true} marginT-40 marginB-40>
      <Text style={styles.heading}>
        Вход
      </Text>
    </View>
  );
}
