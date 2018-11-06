import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Form, CardTitle, Input, Button,
} from 'reactstrap';
import { FiSave } from 'react-icons/fi';

const validate = (values) => {
  const errors = {};
  if (!values.currentPwd) {
    errors.currentPwd = 'Required';
  }
  if (!values.newPwd) {
    errors.newPwd = 'Required';
  }
  return errors;
};

const renderField = ({
  input, placeholder, type, meta: { touched, error },
}) =>(
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const PasswordForm = (props) => {
  const { handleSubmit } = props;
  const { formatMessage } = props.intl;
  return (
    <Form onSubmit={handleSubmit} id="reset-pwd-form">
      <CardTitle><FormattedMessage id="sys.resetPwd" /></CardTitle>
      <Field
        component={renderField}
        type="password"
        name="current-pwd"
        placeholder={formatMessage({ id: 'sys.currentPwd' })}
        id="current-pwd"
        className="form-control"
      />
      <Field
        component={renderField}
        type="password"
        name="new-pwd"
        placeholder={formatMessage({ id: 'sys.newPwd' })}
        id="new-pwd"
        className="form-control"
      />
      <Button color="primary" block style={{marginTop: 10}}>
        <FormattedMessage id="sys.save" />
      </Button>
    </Form>
  );
};

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'passwordForm',
  validate,
})(injectIntl(PasswordForm));
