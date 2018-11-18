import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
  Form,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  InputGroup,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  fetchProductDetails,
  fetchProductCategories,
  fetchSuppliers,
  fetchManufacturers,
} from '../../actions';

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
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderDecimalField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder="0.00" type={type} step=".01" />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderNumberField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder="0" type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderTextArea = ({ input, type, meta: { touched, error } }) => (
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
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id },
      },
    } = this.props;

    //TODO: replace the store ID here
    dispatch(fetchProductCategories('asdfasdfasdfasd'));
    dispatch(fetchSuppliers('asdfasdfasdfasd'));
    dispatch(fetchManufacturers('asdfasdfasdfasd'));
    dispatch(
      fetchProductDetails({ storeCode: 'asdfasdfasdfasd', productCode: id })
    );
  }

  onSubmit = data => {
    const { dispatch } = this.props;
  };

  render() {
    const {
      handleSubmit,
      categories,
      suppliers,
      manufacturers,
      intl: { formatMessage },
    } = this.props;
    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Row>
          <Col md={7}>
            <Card>
              <CardHeader>
                <FormattedMessage id="sys.productInfo" />
              </CardHeader>
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
                  <Label for="categoryId" sm={3}>
                    <FormattedMessage id="sys.category" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component="select"
                      id="categoryId"
                      name="categoryId"
                      className="form-control"
                    >
                      <option value="">--</option>
                      {categories.map(cat => (
                        <option key={cat.code} value={cat.code}>
                          {cat.name}
                        </option>
                      ))}
                    </Field>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="cost" sm={3}>
                    <FormattedMessage id="sys.costPrice" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderDecimalField}
                      type="number"
                      name="cost"
                      id="cost"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="manufacturerId" sm={3}>
                    <FormattedMessage id="sys.manufacturer" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component="select"
                      id="manufacturerId"
                      name="manufacturerId"
                      className="form-control"
                    >
                      <option value="">--</option>
                      {manufacturers.map(man => (
                        <option key={man.code} value={man.code}>
                          {man.name}
                        </option>
                      ))}
                    </Field>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="supplierId" sm={3}>
                    <FormattedMessage id="sys.supplier" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component="select"
                      id="supplierId"
                      name="supplierId"
                      className="form-control"
                    >
                      <option value="">--</option>
                      {suppliers.map(supplier => (
                        <option key={supplier.code} value={supplier.code}>
                          {supplier.name}
                        </option>
                      ))}
                    </Field>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <CardHeader>
                <FormattedMessage id="sys.inventory" />
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="allow-quantity" sm={5}>
                    <FormattedMessage id="sys.allowQty" />?
                  </Label>
                  <Col sm={7}>
                    <InputGroup>
                      <Field
                        component="input"
                        type="checkbox"
                        name="allow-quantity"
                        id="allow-quantity"
                        style={{ width: 32, height: 32 }}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="qty" sm={5}>
                    <FormattedMessage id="sys.qty" />
                  </Label>
                  <Col sm={7}>
                    <InputGroup>
                      <Field
                        component={renderNumberField}
                        type="number"
                        name="quantity"
                        id="quantity"
                        checked
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader>
                <FormattedMessage id="sys.price" />
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="price" sm={4}>
                    <FormattedMessage id="sys.price" />
                  </Label>
                  <Col sm={8}>
                    <Field
                      component={renderDecimalField}
                      type="number"
                      name="price"
                      id="price"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="discount" sm={4}>
                    <FormattedMessage id="sys.discountPrice" />
                  </Label>
                  <Col sm={8}>
                    <Field
                      component={renderDecimalField}
                      type="number"
                      name="discount"
                      id="discount"
                    />
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

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
  manufacturers: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

ProductForm = reduxForm({
  form: 'productForm',
  validate,
})(ProductForm);

export default withRouter(
  connect(state => {
    const {
      name,
      description,
      sku,
      categoryId,
      cost,
      manufacturerId,
      supplierId,
      allowQuantity,
      quantity,
      unitPrice,
      discount,
    } = state.productReducer.productDetails;

    return {
      initialValues: {
        name,
        description,
        sku,
        categoryId,
        cost: (cost || 0.0).toFixed(2),
        manufacturerId,
        supplierId,
        'allow-quantity': allowQuantity,
        quantity,
        price: (unitPrice || 0.0).toFixed(2) || 0.0,
        discount: (discount || 0.0).toFixed(2) || 0.0,
      },
      categories: state.productReducer.categories,
      suppliers: state.supplierReducer.suppliers,
      manufacturers: state.manufacturerReducer.manufacturers,
      enableReinitialize: true,
    };
  })(injectIntl(ProductForm))
);
