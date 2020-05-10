import React from 'react';

import ActionBar from '../ActionBar';
import LoginForm from '../../containers/LoginFormContainer';

export default function EntryPoint() {
  return (
    <>
      <LoginForm />
      <ActionBar />
    </>
  );
}
