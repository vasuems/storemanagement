import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import {
  Col, Row, Form, FormGroup, Label, Card, CardHeader, CardBody, Input,
} from 'reactstrap';

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
}) => (
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const AccountSettingForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader><FormattedMessage id="sys.basicInfo" /></CardHeader>
            <CardBody>
              <FormGroup row>
                <Label for="current-pwd" sm={2}>
                  <FormattedMessage id="sys.currentPwd" />
                </Label>
                <Col sm={10}>
                  <Field
                    component={renderField}
                    type="password"
                    name="current-pwd"
                    className="form-control"
                    id="current-pwd"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="new-pwd" sm={2}>
                  <FormattedMessage id="sys.newPwd" />
                </Label>
                <Col sm={10}>
                  <Field
                    component={renderField}
                    type="password"
                    name="new-pwd"
                    className="form-control"
                    id="new-pwd"
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: 'accountSettingForm',
  validate,
})(AccountSettingForm);
