import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FiSave } from 'react-icons/fi';
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
  Button,
  Alert,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  fetchProductDetails,
  clearProductDetails,
  fetchProductCategories,
  fetchSuppliers,
  fetchManufacturers,
  submitProduct,
} from '../../actions';
import config from '../../config';

const required = value => (value ? undefined : 'Required');

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

const renderField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} type={type} />
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

const renderSelect = ({ input, type, data, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control">
      <option />
      {data.map(cat => (
        <option key={cat.code} value={cat.code}>
          {cat.name}
        </option>
      ))}
    </select>
    {touched && (error && <div><span className="text-danger">{error}</span></div>)}
  </div>
);

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
    };
  }

  componentDidMount() {
    const {
      dispatch,
      mode,
      match: {
        params: { id },
      },
    } = this.props;

    const { data: { storeId } } = jwt.decode(localStorage.getItem(config.accessTokenKey));
    const params = { storeId, pageSize: 200, pageNo: 1 };

    dispatch(fetchProductCategories(params));
    dispatch(fetchSuppliers(params));
    dispatch(fetchManufacturers(params));

    if (mode === 'update') {
      dispatch(
        fetchProductDetails({ storeId, productId: id })
      );
    } else {
      dispatch(
        clearProductDetails()
      );
    }
  }

  onDescriptionChange = data => {
    this.setState({
      description: data,
    });
  }

  onSubmit = data => {
    const { dispatch } = this.props;

    data.description = this.state.description;
    data.storeId = 'asdfasdfasdfasd';
    if (data.allowQuantity === undefined) {
      data.allowQuantity = false;
    }

    dispatch(submitProduct(data));
  };

  render() {
    const {
      handleSubmit,
      categories,
      suppliers,
      newSuccess,
      manufacturers,
      initialValues,
      mode,
      intl: { formatMessage },
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Button size="sm" color="primary" className="pull-right form-btn">
          <FiSave />
          &nbsp;
          <FormattedMessage id="sys.save" />
        </Button>
        <br />
        <br />
        {
          newSuccess === false ?
            <Alert color="danger">
              <FormattedMessage id="sys.newFailed" />
            </Alert> :
            newSuccess === true ?
              <Alert color="success">
                <FormattedMessage id="sys.newSuccess" />
              </Alert> : null
        }

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
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="name"
                      className="form-control"
                      id="name"
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={3}>
                    <FormattedMessage id="sys.desc" />
                  </Label>
                  <Col sm={9}>
                    <ReactQuill
                      modules={modules}
                      formats={formats}
                      style={{ height: 180 }}
                      value={mode === 'update' ? initialValues.description || '' : this.state.description}
                      onChange={this.onDescriptionChange}
                    />
                  </Col>
                </FormGroup>
                <br />
                <br />
                <br />
                <FormGroup row>
                  <Label for="sku" sm={3}>
                    <FormattedMessage id="sys.sku" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="sku"
                      className="form-control"
                      id="sku"
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="categoryId" sm={3}>
                    <FormattedMessage id="sys.category" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderSelect}
                      id="category-id"
                      name="categoryId"
                      data={categories}
                      validate={[required]}
                    >
                    </Field>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="cost" sm={3}>
                    <FormattedMessage id="sys.costPrice" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderDecimalField}
                      type="number"
                      name="cost"
                      id="cost"
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="manufacturerId" sm={3}>
                    <FormattedMessage id="sys.manufacturer" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderSelect}
                      id="manufacturer-id"
                      name="manufacturerId"
                      data={manufacturers}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="supplierId" sm={3}>
                    <FormattedMessage id="sys.supplier" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderSelect}
                      id="supplier-id"
                      name="supplierId"
                      data={suppliers}
                    />
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
                        name="allowQuantity"
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
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={8}>
                    <Field
                      component={renderDecimalField}
                      type="number"
                      name="unitPrice"
                      id="price"
                      validate={[required]}
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
  newSuccess: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  mode: PropTypes.string,
  initialValues: PropTypes.object,
};

ProductForm = reduxForm({
  form: 'productForm',
})(ProductForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: state.productReducer.productDetails,
      categories: state.productReducer.categories.data,
      suppliers: state.supplierReducer.suppliers.data,
      manufacturers: state.manufacturerReducer.manufacturers.data,
      newSuccess: state.productReducer.newSuccess,
      enableReinitialize: true,
    };
  })(injectIntl(ProductForm))
);
