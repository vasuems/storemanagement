import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button, Input } from 'reactstrap';

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

const ProductCategoryForm = props => {
  const { onSubmit, categories } = props;

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="categoryName" sm={2}>
          <FormattedMessage id="sys.categoryName" />
        </Label>
        <Col sm={10}>
          <Field
            component={renderField}
            name="categoryName"
            className="form-control"
            id="categoryName"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="parentCategory" sm={2}>
          <FormattedMessage id="sys.parentCategory" />
        </Label>
        <Col sm={10}>
          <Input type="select" name="selectCat">
            {categories.map(cat => {
              return (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              );
            })}
          </Input>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'productCategoryForm',
  validate,
})(ProductCategoryForm);
