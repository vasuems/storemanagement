import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { fetchProductParentCategories } from '../../actions';

const validate = values => {
  const errors = {};
  if (!values.categoryName) {
    errors.categoryName = 'Required';
  }
  if (!values.newPwd) {
    errors.newPwd = 'Required';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const NewProductForm = props => {
  const { onSubmit, categories } = props;

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="productName" sm={2}>
          <FormattedMessage id="sys.productName" />
        </Label>
        <Col sm={10}>
          <Field
            component={renderField}
            name="productName"
            className="form-control"
            id="productName"
            value=""
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'newProductForm',
  validate,
})(NewProductForm);
