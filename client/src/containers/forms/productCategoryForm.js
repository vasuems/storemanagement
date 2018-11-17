import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class ProductCategoryForm extends Component {
  render() {
    const { onSubmit, categories } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Label for="category-name" sm={2}>
            <FormattedMessage id="sys.categoryName" />
          </Label>
          <Col sm={10}>
            <Field
              component={renderField}
              name="category-name"
              className="form-control"
              id="category-name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="parent-category" sm={2}>
            <FormattedMessage id="sys.parentCategory" />
          </Label>
          <Col sm={10}>
            <Input type="select" name="select-cat">
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

ProductCategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

ProductCategoryForm = reduxForm({
  form: 'productCategoryForm',
  validate,
})(ProductCategoryForm);

export default ProductCategoryForm;
