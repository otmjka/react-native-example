import React, {useState, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {View, Text} from 'react-native-ui-lib';
import CheckSvg from '../CheckSvg';
import styles from './styles';

const MASK = '+7 (999) 999-99-99';

export default function PhoneInput({errors, name, setValue}) {
  const inputEl = useRef(null);
  const [value, handleChange] = useState('+7 (');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checkedValid = MASK.length === value.length;
    setValid(checkedValid);
    if (checkedValid) {
      setValue(name, value);
    }
  }, [name, setValue, value]);
  const hasError = !valid;
  let errStyl = {};
  if (hasError) {
    errStyl = styles.error;
  }
  const mask = value + '+7 (___) ___-__-__'.substr(value.length, MASK.length)
  return (
    <View style={styles.root}>
      <View style={styles.inputGroup}>
        <Text style={{...styles.label, ...errStyl}}>
          Телефон
          <Text>*</Text>
        </Text>
        <View style={{position: 'relative'}}>

        <TextInputMask
          style={styles.phone}
          type={'custom'}
          options={{
            mask: MASK,
          }}
          value={value}
          onChangeText={handleChange}
          ref={inputEl}
        />
        <Text style={styles.placeholder}>
        {mask}
        </Text>
        </View>
      </View>
      {valid && <CheckSvg />}
    </View>
  );
}
