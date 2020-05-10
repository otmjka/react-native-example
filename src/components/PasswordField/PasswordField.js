import React, {useState, useEffect} from 'react';
import {TouchableHighlight, TextInput} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import VisiblitySvg from '../VisiblitySvg';
import styles from './styles';

export default function PasswordField({name, setValue, errors}) {
  const [value, handleChange] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  useEffect(() => {
    if (value) {
      setValue(name, value);
    }
  }, [name, setValue, value]);
  const hasError = !!errors[name];
  let errStyl = {};
  if (hasError) {
    errStyl = styles.error;
  }
  return (
    <View style={styles.root}>
      <View style={styles.inputGroup}>
        <Text style={{...styles.label, ...errStyl}}>
          Пароль
          <Text>*</Text>
        </Text>
        <TextInput
          type="password"
          secureTextEntry={secureTextEntry}
          onChangeText={handleChange}
          value={value}
          style={styles.input}
        />
      </View>

      <TouchableHighlight
        onPress={() => setSecureTextEntry(secureTextEntry => !secureTextEntry)}>
        <VisiblitySvg
          fill={secureTextEntry ? '#aaa' : '#333'}
          width={30}
          height={30}
        />
      </TouchableHighlight>
    </View>
  );
}
