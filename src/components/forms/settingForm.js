import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SettingForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>
}

SettingForm = reduxForm({
  form: 'acctSettings'
})(SettingForm)
