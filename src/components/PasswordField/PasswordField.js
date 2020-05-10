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
      console.log('!!!')
      setValue(name, value);
    }
    console.log(value, errors, name)
  }, [name, setValue, value]);

  const hasError = value.length === 0;
  let errStyl = {};
  if (hasError) {
    errStyl = styles.error;
  }
  console.log(')))))', errStyl)
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
