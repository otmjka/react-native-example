import React from 'react';
import {Alert} from 'react-native';
import LoginForm from '../../components/LoginForm';

export default function LoginFormContainer() {

  const handleSubmit = (values) => {

    if (values.password === '111') {
      return Alert.alert('Success!');
    }
    Alert.alert('fail -(');
  }

  const handleForgot = () => Alert.alert('Forgot!');

  const handleSignup = () => Alert.alert('Signup!');

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onForgot={handleForgot}
      onSignup={handleSignup}
    />
  );
}
