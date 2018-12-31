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
  Nav,
  TabContent,
  NavItem,
  NavLink,
  Input,
  TabPane,
  Button,
  Alert,
  CardTitle,
  Table,
  FormGroup,
  Label,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import classnames from 'classnames';
import {
  OrderInfoItem,
  OrderShippingItem,
  OrderProductListItem,
} from '../../components';
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
      {data.map(item => (
        <option key={item.code} value={item.code}>
          {item.name}
        </option>
      ))}
    </select>
    {touched && (error && <div><span className="text-danger">{error}</span></div>)}
  </div>
);


class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      activeTab: '1',
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  componentDidMount() {
    const {
      dispatch,
      mode,
      storeId,
      match: {
        params: { id },
      },
    } = this.props;

    dispatch(fetchProductCategories({ storeId, pageSize: 200, pageNo: 1 }));
    dispatch(fetchSuppliers(storeId));
    dispatch(fetchManufacturers(storeId));

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
    const { dispatch, storeId } = this.props;

    data.description = this.state.description;
    data.storeId = storeId;
    if (data.allowQuantity === undefined) {
      data.allowQuantity = false;
    }

    dispatch(submitProduct(data));
  };

  render() {
    const {
      history,
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
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '1',
              })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <FormattedMessage id="sys.orderDetails" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '2',
              })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <FormattedMessage id="sys.shipping" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={this.state.activeTab}
          style={{ backgroundColor: '#fff', padding: 15 }}
        >
          <TabPane tabId="1">
            <Row>
              <Col md={12}>
                <Button
                  size="sm"
                  color="dark"
                  className="pull-right form-btn"
                  onClick={() => history.push('/new-product')}
                >
                  <FiDownload />
                  &nbsp;
                  <FormattedMessage id="sys.downloadInvoice" />
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  className="pull-right form-btn"
                  onClick={() => history.push('/new-product')}
                  style={{ marginRight: 10 }}
                >
                  <FiPrinter />
                  &nbsp;
                  <FormattedMessage id="sys.printInvoice" />
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={7}>
                <CardTitle>
                  <FormattedMessage id="sys.products" />
                </CardTitle>
                <Table responsive>
                  <thead className="table-header">
                    <tr>
                      <th>
                        <FormattedMessage id="sys.productName" />
                      </th>
                      <th>
                        <FormattedMessage id="sys.unitPrice" />
                      </th>
                      <th>
                        <FormattedMessage id="sys.qty" />
                      </th>
                      <th>
                        <FormattedMessage id="sys.amount" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[].map(product => {
                      return (
                        <OrderProductListItem
                          key={product.id}
                          name={product.name}
                          price={product.price.toFixed(2)}
                          quantity={product.quantity}
                          amount={product.amount.toFixed(2)}
                          currencySign={product.currencySign}
                        />
                      );
                    })}
                  </tbody>
                </Table>
                <Col md={6} className="pull-right">
                  <Table size="sm" responsive>
                    <tbody>
                      <tr>
                        <td>
                          <FormattedMessage id="sys.subTotal" />:
                        </td>
                        <td>SGD $116.00</td>
                      </tr>
                      <tr>
                        <td>
                          <FormattedMessage id="sys.taxIncluded" />:
                        </td>
                        <td>SGD $8.12</td>
                      </tr>
                      <tr>
                        <td>
                          <FormattedMessage id="sys.shipping" />:
                        </td>
                        <td>SGD $21.60</td>
                      </tr>
                      <tr>
                        <td>
                          <b>
                            <FormattedMessage id="sys.total" />:
                          </b>
                        </td>
                        <td>
                          <b>SGD $137.60</b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Col>
              <Col md={5}>
                <CardTitle>
                  <FormattedMessage id="sys.customerInfo" />
                </CardTitle>
                <Card body>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      <FormattedMessage id="sys.name" />
                      <span className="text-danger mandatory-field">*</span>
                    </Label>
                    <Col sm={8}>
                      <Field
                        component={renderField}
                        name="customerName"
                        className="form-control"
                        id="customer-name"
                        validate={[required]}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      <FormattedMessage id="sys.contactNo" />
                      <span className="text-danger mandatory-field">*</span>
                    </Label>
                    <Col sm={8}>
                      <Field
                        component={renderField}
                        name="customerContact"
                        className="form-control"
                        id="customer-contact"
                        validate={[required]}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      <FormattedMessage id="sys.deliveryAddr" />
                      <span className="text-danger mandatory-field">*</span>
                    </Label>
                    <Col sm={8}>
                      <Field
                        component={renderField}
                        name="deliveryAddress"
                        className="form-control"
                        id="address"
                        validate={[required]}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={4}>
                      <FormattedMessage id="sys.billingAddr" />
                      <span className="text-danger mandatory-field">*</span>
                    </Label>
                    <Col sm={8}>
                      <Field
                        component={renderField}
                        name="billingAddress"
                        className="form-control"
                        id="billing-address"
                        validate={[required]}
                      />
                    </Col>
                  </FormGroup>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col md={5}>
                <OrderShippingItem
                  courier="Fedex Express"
                  trackingId="asa3djfa123lksdfj23432sdf"
                  datetime="2018-11-11 11:11:00"
                  location="Singapore logistics center"
                  status="Processing"
                  statusColor="green"
                />
                <OrderShippingItem
                  courier="Fedex Express"
                  trackingId="234adsf9asdf31asdf"
                  datetime="2018-11-10 07:10:00"
                  location="Malaysia logistic center"
                  status="Shipped out"
                />
                <OrderShippingItem
                  courier="Fedex Express"
                  trackingId="Not available"
                  datetime="2018-11-08 16:30:00"
                  location="Seller"
                  status="Dispatched"
                />
              </Col>
              <Col md={7}>
                <iframe
                  width="100%"
                  height="450"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=${config.googleApiKey}&q=Space+Needle,Seattle+WA`}
                  allowFullScreen>
                </iframe>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Form>
    );
  }
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
  storeId: PropTypes.string.isRequired,
  manufacturers: PropTypes.array.isRequired,
  newSuccess: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  mode: PropTypes.string,
  initialValues: PropTypes.object,
  history: PropTypes.object.isRequired,
};

OrderForm = reduxForm({
  form: 'orderForm',
})(OrderForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: state.productReducer.productDetails,
      categories: state.productReducer.categories.data,
      suppliers: state.supplierReducer.suppliers,
      manufacturers: state.manufacturerReducer.manufacturers,
      newSuccess: state.productReducer.newSuccess,
      enableReinitialize: true,
    };
  })(injectIntl(OrderForm))
);
