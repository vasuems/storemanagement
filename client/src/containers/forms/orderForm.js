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
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FiDownload, FiPrinter, FiPlusCircle } from 'react-icons/fi';
import classnames from 'classnames';
import {
  ProfileLoader,
  OrderShippingItem,
  OrderProductListItem,
} from '../../components';
import { ProductSearchForm } from '../forms';
import {
  fetchOrderDetails,
  addOrderProduct,
  clearOrderDetails,
  fetchCategories,
  fetchSuppliers,
  fetchManufacturers,
  submitProduct,
  clearSearchProducts,
  clearOrderSearchedProductResult,
  removeOrderProduct,
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
      activeTab: '1',
      modal: false,
    };
  }

  componentWillMount() {
    this.props.dispatch(
      clearOrderDetails()
    );
  }

  componentDidMount() {
    const {
      dispatch,
      mode,
      storeId,
      match: {
        params: { id },
      },
    } = this.props;

    if (mode === 'update') {
      dispatch(
        fetchOrderDetails({ storeId, productId: id })
      );
    }
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onAddProductClick = (data) => {
    const {
      dispatch,
    } = this.props;

    this.setState({
      modal: !this.state.modal,
    }, () => {
      dispatch(clearSearchProducts());
      dispatch(clearOrderSearchedProductResult());
    });
  }

  onSubmit = data => {
    const { dispatch, storeId } = this.props;

    data.storeId = storeId;
    if (data.allowQuantity === undefined) {
      data.allowQuantity = false;
    }

    dispatch(submitProduct(data));
  };

  onProductItemDeleteClick = (code) => {
    const {
      dispatch,
    } = this.props;

    dispatch(removeOrderProduct(code));
  }

  render() {
    const {
      history,
      handleSubmit,
      done,
      loaded,
      error,
      mode,
      storeId,
      products,
    } = this.props;

    return (
      mode === 'update' && !loaded ?
        <ProfileLoader /> :
        <div>
          <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
            <Button size="sm" color="primary" className="pull-right form-btn">
              <FiSave />
              &nbsp;
              <FormattedMessage id="sys.save" />
            </Button>
            <br />
            <br />
            {
              error ?
                <Alert color="danger">
                  <FormattedMessage id="sys.newFailed" />
                </Alert> :
                done ?
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
                    <Table responsive size="sm">
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
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.length > 0 ? products.map(product => {
                          return (
                            <OrderProductListItem
                              key={product.code}
                              code={product.code}
                              name={product.name}
                              unitPrice={product.unitPrice}
                              quantity={product.quantity}
                              amount={product.amount}
                              currencySign="$"
                              onDeleteClick={this.onProductItemDeleteClick}
                            />
                          );
                        }) : <tr><td><FormattedMessage id="sys.noRecords" /></td></tr>}
                      </tbody>
                    </Table>
                    <Button
                      color="link"
                      className="pull-right form-btn"
                      onClick={this.onAddProductClick}
                    >
                      <FiPlusCircle />
                      &nbsp;
                      <FormattedMessage id="sys.addNew" />
                    </Button><br /><br /><br />
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
          <Modal isOpen={this.state.modal} toggle={this.modalToggle} zIndex="10000">
            <ModalHeader toggle={this.modalToggle}><FormattedMessage id="sys.addProduct" /></ModalHeader>
            <ModalBody>
              <ProductSearchForm
                storeId={storeId} />
            </ModalBody>
          </Modal>
        </div>
    );
  }
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  storeId: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  mode: PropTypes.string,
  products: PropTypes.array.isRequired,
  initialValues: PropTypes.object,
  history: PropTypes.object.isRequired,
};

OrderForm = reduxForm({
  form: 'orderForm',
})(OrderForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: state.orderReducer.productDetails,
      products: state.orderReducer.products,
      done: state.orderReducer.done,
      loaded: state.orderReducer.loaded,
      error: state.orderReducer.error,
      enableReinitialize: true,
    };
  })(injectIntl(OrderForm))
);
