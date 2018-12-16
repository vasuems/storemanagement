import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, CardHeader, Input, Button, Card, CardBody, FormGroup, Label, Col } from 'reactstrap';

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

const PasswordForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit} id="reset-pwd-form">
      <Card>
        <CardHeader>
          <FormattedMessage id="sys.resetPwd" />
        </CardHeader>
        <CardBody>
          <FormGroup row>
            <Label for="name" sm={4}>
              <FormattedMessage id="sys.currentPwd" />
            </Label>
            <Col sm={8}>
              <Field
                component={renderField}
                type="password"
                name="currentPwd"
                className="form-control"
                id="current-pwd"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={4}>
              <FormattedMessage id="sys.newPwd" />
            </Label>
            <Col sm={8}>
              <Field
                component={renderField}
                type="password"
                name="newPwd"
                className="form-control"
                id="new-pwd"
              />
            </Col>
          </FormGroup>          
          <Button color="primary" style={{ marginTop: 10 }}>
            <FormattedMessage id="sys.save" />
          </Button>
        </CardBody>
      </Card>
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
})(PasswordForm);
