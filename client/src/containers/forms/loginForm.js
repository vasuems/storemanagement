import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Form, Input, Button,
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

class LoginForm extends Component {
  handleSubmit = () => {
    window.location.href = '/dashboard';
  };

  render(){
    const { handleSubmit } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <Form onSubmit={handleSubmit} id="login-form">
        <Field
          component={renderField}
          type="email"
          name="email"
          id="email"
          placeholder={formatMessage({ id: 'sys.email' })}
          value="admin@test.com"
        />
        <Field
          component={renderField}
          type="password"
          name="password"
          id="password"
          placeholder={formatMessage({ id: 'sys.pwd' })}
          value="password"
        />
        <Button block onClick={this.handleSubmit}>
          <FormattedMessage id="sys.signin" />
        </Button>
        <br />
        <Button color="link">
          <FormattedMessage id="sys.forgotPwd" />
        </Button>
      </Form>
    );
  }
}


export default reduxForm({
  form: 'loginForm',
  validate,
})(injectIntl(LoginForm));
