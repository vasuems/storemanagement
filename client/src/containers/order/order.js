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
import { OrderInfoItem, OrderShippingItem } from '../../components';

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
    const { history } = this.props;
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
              onClick={() => this.props.history.push('/orders')}
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
                    <Col md={7}>
                      <CardTitle><FormattedMessage id="sys.products" /></CardTitle>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th><FormattedMessage id="sys.productName" /></th>
                            <th><FormattedMessage id="sys.unitPrice" /></th>
                            <th><FormattedMessage id="sys.qty" /></th>
                            <th><FormattedMessage id="sys.amount" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Product 1</td>
                            <td>SGD $10.00</td>
                            <td>2</td>
                            <td>SGD $20.00</td>
                          </tr>
                          <tr>
                            <td>Product 2</td>
                            <td>SGD $31.50</td>
                            <td>3</td>
                            <td>SGD $94.50</td>
                          </tr>
                          <tr>
                            <td>Product 3</td>
                            <td>SGD $1.50</td>
                            <td>1</td>
                            <td>SGD $1.50</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Col md={6} className="pull-right">
                        <Table borderless size="sm">
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
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default connect(
  null,
  null
)(injectIntl(withRouter(Order)));
