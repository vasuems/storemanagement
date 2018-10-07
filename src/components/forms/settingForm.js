import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SettingForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>{/* form body */}</form>;
};

SettingForm = reduxForm({
  form: 'acctSettings',
})(SettingForm);

export default SettingForm;
