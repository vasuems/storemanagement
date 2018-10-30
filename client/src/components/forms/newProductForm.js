import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, InputGroupAddon, Input, InputGroup } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <ReactQuill 
      modules={modules}
      formats={formats} />
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
      <FormGroup row>
        <Label for="description" sm={2}>
          <FormattedMessage id="sys.desc" />
        </Label>
        <Col sm={10}>
          <Field
            component={renderTextArea}
            name="description"
            className="form-control"
            id="description"
            value=""
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="sku" sm={2}>
          <FormattedMessage id="sys.sku" />
        </Label>
        <Col sm={10}>
          <Field
            component={renderField}
            name="sku"
            className="form-control"
            id="sku"
            value=""
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="price" sm={2}>
          <FormattedMessage id="sys.price" />
        </Label>
        <Col sm={10}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">SGD</InputGroupAddon>
            <Input type="number" placeholder="0.00" step="0.01" />
          </InputGroup>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'newProductForm',
  validate,
})(NewProductForm);
