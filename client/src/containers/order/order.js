import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Card,
  CardTitle,
  Table,
} from 'reactstrap';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { 
  FiDownload,
  FiPrinter,
} from 'react-icons/fi';
import { OrderInfoItem, OrderShippingItem, OrderProductListItem } from '../../components';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { history, products } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => history.push('/orders')}
            >
              <FormattedMessage id="sys.orders" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.orderDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row>
            <Col md={12}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    <FormattedMessage id="sys.orderDetails" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    <FormattedMessage id="sys.shipping" />
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab} style={{backgroundColor: '#fff', padding: 15}}>
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
                  </Row><br />
                  <Row>
                    <Col md={7}>
                      <CardTitle><FormattedMessage id="sys.products" /></CardTitle>
                      <Table responsive>
                        <thead className="table-header">
                          <tr>
                            <th><FormattedMessage id="sys.productName" /></th>
                            <th><FormattedMessage id="sys.unitPrice" /></th>
                            <th><FormattedMessage id="sys.qty" /></th>
                            <th><FormattedMessage id="sys.amount" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            products.map(product => {
                              return(
                                <OrderProductListItem 
                                  key={product.id}
                                  name={product.name}
                                  price={product.price.toFixed(2)}
                                  quantity={product.quantity}
                                  amount={product.amount.toFixed(2)}
                                  currencySign={product.currencySign}
                                />
                              );
                            })
                          }                      
                        </tbody>
                      </Table>
                      <Col md={6} className="pull-right">
                        <Table size="sm" responsive>
                          <tbody>
                            <tr>
                              <td><FormattedMessage id="sys.subTotal" />:</td>
                              <td>SGD $116.00</td>
                            </tr>
                            <tr>
                              <td><FormattedMessage id="sys.taxIncluded" />:</td>
                              <td>SGD $8.12</td>
                            </tr>
                            <tr>
                              <td><FormattedMessage id="sys.shipping" />:</td>
                              <td>SGD $21.60</td>
                            </tr>
                            <tr>
                              <td><b><FormattedMessage id="sys.total" />:</b></td>
                              <td><b>SGD $137.60</b></td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Col>
                    <Col md={5}>
                      <CardTitle><FormattedMessage id="sys.customerInfo" /></CardTitle>
                      <Card body>
                        <OrderInfoItem 
                          title={formatMessage({ id: 'sys.customerName' })}
                          content="Nick Chen"
                        />
                        <OrderInfoItem 
                          title={formatMessage({ id: 'sys.customerContact' })}
                          content="+65-99999999"
                        />
                        <OrderInfoItem 
                          title={formatMessage({ id: 'sys.deliveryAddr' })}
                          content="BLK 666, Bugis, Singapore, 100666"
                        />
                        <OrderInfoItem 
                          title={formatMessage({ id: 'sys.billingAddr' })}
                          content="Not provided"
                        />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
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
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  products: state.orderReducer.products,
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(withRouter(Order)));
