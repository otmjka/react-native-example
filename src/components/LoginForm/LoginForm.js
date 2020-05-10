import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {Alert, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';

import {Button, View, Text} from 'react-native-ui-lib'; //eslint-disable-line

import PasswordField from '../PasswordField';
import PhoneInput from '../PhoneInput';
import SubmitModal from '../SubmitModal';
import Heading from '../Heading';

import styles from './styles';

export default function LoginForm({onSubmit, onForgot, onSignup}) {
  const [modalVisible, setModalVisible] = useState(true);
  const {errors, register, setValue, handleSubmit, getValues, formState} = useForm();
  // Read the formState before render to subscribe the form state through Proxy dirty, isSubmitting, touched, submitCount
  const { isSubmitted } = formState;
  useEffect(() => {
    register({name: 'phoneNumber'}, {required: true});
    register({name: 'password'}, {required: true});
  }, [register]);
  console.log(errors);
  return (
    <>
      <Heading title="Вход" />

      <PhoneInput setValue={setValue} name="phoneNumber" errors={errors} isSubmitted={isSubmitted}/>

      <PasswordField setValue={setValue} name="password" errors={errors} isSubmitted={isSubmitted}/>

      <View row center>
        <Button
          style={styles.loginBtn}
          onPress={() => handleSubmit(onSubmit)()}>
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
    </>
  );
}
