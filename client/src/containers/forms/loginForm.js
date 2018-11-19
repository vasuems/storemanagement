import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Input, Button, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { submitLoginData } from '../../actions';
import config from '../../config';

const validate = values => {
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
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

class LoginForm extends Component {
  componentDidUpdate() {
    const { auth, history } = this.props;

    if (auth) {
      history.push('/dashboard');
    }
  }

  onSubmit = data => {
    const { dispatch } = this.props;
    dispatch(submitLoginData(data));
  };

  render() {
    const { handleSubmit, auth } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <Form
        onSubmit={handleSubmit(data => this.onSubmit(data))}
        id="login-form"
      >
        <Field
          component={renderField}
          type="email"
          name="username"
          id="username"
          placeholder={formatMessage({ id: 'sys.email' })}
        />
        <Field
          component={renderField}
          type="password"
          name="password"
          id="password"
          placeholder={formatMessage({ id: 'sys.pwd' })}
        />
        <Button type="submit" block>
          <FormattedMessage id="sys.signin" />
        </Button>
        {auth === false ? (
          <Alert color="danger" style={{ marginTop: 20 }}>
            <FormattedMessage id="sys.invalidAuth" />
          </Alert>
        ) : null}

        <br />
        <Button color="link">
          <FormattedMessage id="sys.forgotPwd" />
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  auth: PropTypes.object,
  history: PropTypes.object.isRequired,
};

LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(injectIntl(LoginForm));

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(LoginForm));
