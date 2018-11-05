import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
  Form,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  InputGroupAddon,
  Input,
  InputGroup,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const validate = (values) => {
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
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
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

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderDecimalField = ({
  input, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder="0.00" type={type} step=".01" />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderNumberField = ({
  input, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder="0" type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderTextArea = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <ReactQuill
      modules={modules}
      formats={formats}
      style={{ height: 180 }}
      value={input.value}
    />
  </div>
);

class ProductForm extends Component {
  render() {
    const { onSubmit, categories, currencies } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md={7}>
            <Card>
              <CardHeader><FormattedMessage id="sys.basicInfo" /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="name" sm={3}>
                    <FormattedMessage id="sys.productName" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="name"
                      className="form-control"
                      id="name"
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
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="price" sm={3}>
                    <FormattedMessage id="sys.price" />
                  </Label>
                  <Col sm={9}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Input type="select" name="currency">
                          {currencies.map(currency => (
                            <option key={currency.id} value={currency.id}>{currency.currency}</option>
                          ))}
                        </Input>
                      </InputGroupAddon>
                      <Field
                        component={renderDecimalField}
                        type="number"
                        name="price"
                        id="price"
                      />
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
                      <Field
                        component={renderNumberField}
                        type="number"
                        name="quantity"
                        id="quantity"
                      />
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
}

ProductForm = reduxForm({
  form: 'productForm',
  validate,
})(ProductForm);

export default connect((state) => {
  const {
    name, description, sku, price, quantity,
  } = state.productReducer.productDetails;
  return {
    initialValues: {
      name,
      description,
      sku,
      price,
      quantity,
    },
    enableReinitialize: true,
  };
})(ProductForm);
