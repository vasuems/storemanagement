import React from 'react';
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

const NewProductCategoryForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
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
            value=""
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="newPwd" sm={2}>
          <FormattedMessage id="sys.newPwd" />
        </Label>
        <Col sm={10}>
          <Field
            component={renderField}
            type="password"
            name="newPwd"
            className="form-control"
            id="newPwd"
            value=""
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'newProductCategoryForm',
  validate,
})(NewProductCategoryForm);
