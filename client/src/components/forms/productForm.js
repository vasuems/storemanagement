import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Row, Form, Card, CardHeader, CardBody, FormGroup, Label, InputGroupAddon, Input, InputGroup } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
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
      formats={formats}
      style={{height: 180}}
    />
  </div>
);

class ProductForm extends Component{
  render(){
    const { onSubmit, categories } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md={7}>
            <Card>
              <CardHeader><FormattedMessage id="sys.basicInfo" /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="productName" sm={3}>
                    <FormattedMessage id="sys.productName" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="productName"
                      className="form-control"
                      id="productName"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={3}>
                    <FormattedMessage id="sys.desc" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderTextArea}
                      name="description"
                      className="form-control"
                      id="description"
                    />
                  </Col>
                </FormGroup>
                <br />
                <br />
                <br />
                <FormGroup row>
                  <Label for="sku" sm={3}>
                    <FormattedMessage id="sys.sku" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="sku"
                      className="form-control"
                      id="sku"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="category" sm={3}>
                    <FormattedMessage id="sys.category" />
                  </Label>
                  <Col sm={9}>
                    <Input type="select" name="selectCat">
                      {categories.map(cat => {
                        return (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        );
                      })}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="price" sm={3}>
                    <FormattedMessage id="sys.price" />
                  </Label>
                  <Col sm={9}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">SGD</InputGroupAddon>
                      <Input type="number" placeholder="0.00" step="0.01" />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <CardHeader><FormattedMessage id="sys.inventory" /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="qty" sm={3}>
                    <FormattedMessage id="sys.qty" />
                  </Label>
                  <Col sm={9}>
                    <InputGroup>
                      <Input type="number" placeholder="0" />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
};

ProductForm = reduxForm({
  form: 'productForm',
  validate,
})(ProductForm);

export default connect(state => ({ 
  initialValues: {
    productName: state.productReducer.productDetails.name,
    description: state.productReducer.productDetails.description,
    sku: state.productReducer.productDetails.sku,
  },
  enableReinitialize: true,
}))(ProductForm);