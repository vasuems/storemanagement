import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import {
  Col, Form, FormGroup, Label, Input,
} from 'reactstrap';

const validate = (values) => {
  const errors = {};
  if (!values.siteName) {
    errors.siteName = 'Required';
  }
  return errors;
};

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

class SettingForm extends Component {

  render(){
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="siteName" sm={2}>
            <FormattedMessage id="sys.siteName" />
          </Label>
          <Col sm={10}>
            <Field
              component={renderField}
              name="siteName"
              className="form-control"
              id="siteName"
              value=""
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

SettingForm = reduxForm({
  form: 'siteSettings',
  validate,
})(SettingForm);

export default connect((state) => {
  const {
    siteName,
  } = state.settingReducer.settings;
  return {
    initialValues: {
      siteName,
    },
    enableReinitialize: true,
  };
})(SettingForm);
