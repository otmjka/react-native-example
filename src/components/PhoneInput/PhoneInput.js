import React, {useState, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {View, Text} from 'react-native-ui-lib';

import CheckSvg from '../CheckSvg';
import FloatingPlaceholder from '../PhoneInput/FloatingPlaceholder';

import styles from './styles';

const MASK = '+7 (999) 999-99-99';

export default function PhoneInput({errors, name, setValue, isSubmitted}) {
  const inputEl = useRef(null);
  const [value, handleChange] = useState('+7 (');
  const [valid, setValid] = useState(false);
  const [float, setFloat] = useState(false)
  const hasValue = value.length > 4;
  useEffect(() => {
    const checkedValid = MASK.length === value.length;
    setValid(checkedValid);
    if (checkedValid) {
      setValue(name, value);
    }
  }, [name, setValue, value]);
  const hasError = !valid && isSubmitted;
  let errStyl = {};
  if (hasError) {
    errStyl = styles.error;
  }
  const mask = value + '+7 (___) ___-__-__'.substr(value.length, MASK.length);
  return (
    <View style={styles.root}>
      <View style={styles.inputGroup}>
        <FloatingPlaceholder placeholder="Телефон" start={float || hasValue} />
        <View style={{position: 'relative'}}>
          {(float || hasValue) && <View style={styles.placeholderCont}>
            <Text style={styles.placeholder}>{mask}</Text>
          </View>}
          <TextInputMask
            style={[styles.phone, {color: float ? '#555' : 'transparent'}]}
            type={'custom'}
            options={{
              mask: MASK,
            }}
            value={value}
            onChangeText={handleChange}
            onFocus={() => setFloat(true)}
            onBlur={() => setFloat(false)}
            ref={inputEl}
          />
        </View>
      </View>
      {valid && <CheckSvg />}
    </View>
  );
}
