import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {Alert, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';

import {
  Button,
  Colors,
  Typography,
  View,
  Text,
  TextField,
  MaskedInput,
} from 'react-native-ui-lib'; //eslint-disable-line

import PasswordField from '../PasswordField';
import PhoneInput from '../PhoneInput';
import SubmitModal from '../SubmitModal';
import Heading from '../Heading'

import styles from './styles';

export default function LoginForm({onSubmit, onForgot, onSignup}) {
  const [modalVisible, setModalVisible] = useState(true);
  const {errors, register, setValue, handleSubmit, getValues} = useForm();

  useEffect(() => {
    register({name: 'phoneNumber'}, {required: true});
    register({name: 'password'}, {required: true});
  }, [register]);
  console.log(errors)
  return (
    <View flex>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">

        <Heading title="Вход"/>

        <PhoneInput setValue={setValue} name="phoneNumber" errors={errors} />

        <PasswordField setValue={setValue} name="password" errors={errors} />

        <View row center>
          <Button style={styles.loginBtn} onPress={() => handleSubmit(onSubmit)()}>
            <Text style={styles.loginText}>Войти</Text>
          </Button>
        </View>
        <View row center>
          <Button link onPress={onForgot}>
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
          <Button link onPress={onSignup}>
            <Text style={styles.linkBtn}>Зарегистрируйтесь</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
