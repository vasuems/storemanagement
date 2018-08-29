import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Table
} from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import Navigation from './navigation';
import Footer from '../components/footer';
import FormItem from '../components/formItem';
import OrderTableItem from '../components/orderTableItem';
import { fetchAccountSettings } from '../actions';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'my-acct'
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAccountSettings());
  }

  onCheckoutClick = () => {
    this.props.history.push('/checkout');
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { settings, orders } = this.props;
    return (
      <div>
        <Navigation />
        <Container className="padding-top-80">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === 'my-acct'
                })}
                onClick={() => {
                  this.toggle('my-acct');
                }}
              >
                <FormattedMessage id="sys.myAcct" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === 'my-orders'
                })}
                onClick={() => {
                  this.toggle('my-orders');
                }}
              >
                <FormattedMessage id="sys.myOrders" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === 'my-pwd'
                })}
                onClick={() => {
                  this.toggle('my-pwd');
                }}
              >
                <FormattedMessage id="sys.pwd" />
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="my-acct">
              <Row>
                <Col sm="12">
                  <Form style={{ backgroundColor: '#fff', padding: 30 }}>
                    <FormItem
                      label={<FormattedMessage id="sys.name" />}
                      fieldName="acct-name"
                      fieldType="text"
                      fieldValue={settings.name}
                      fieldPlaceholder={formatMessage({ id: 'sys.name' })}
                      disable
                    />
                    <FormItem
                      label={<FormattedMessage id="sys.email" />}
                      fieldName="acct-email"
                      fieldType="email"
                      fieldValue={settings.email}
                      fieldPlaceholder={formatMessage({ id: 'sys.email' })}
                      disable
                    />
                    <FormItem
                      label={<FormattedMessage id="sys.contactNo" />}
                      fieldName="acct-contact"
                      fieldType="text"
                      fieldValue={settings.contactNo}
                      fieldPlaceholder={formatMessage({ id: 'sys.contactNo' })}
                      allowUpdate
                    />
                    <FormItem
                      label={<FormattedMessage id="sys.deliveryAddr" />}
                      fieldName="acct-delivery-addr"
                      fieldType="text"
                      fieldValue={settings.deliveryAddress}
                      fieldPlaceholder={formatMessage({
                        id: 'sys.deliveryAddr'
                      })}
                      allowUpdate
                    />
                    <FormItem
                      label={<FormattedMessage id="sys.billingAddr" />}
                      fieldName="acct-delivery-addr"
                      fieldType="text"
                      fieldValue={settings.billingAddress}
                      fieldPlaceholder={formatMessage({
                        id: 'sys.billingAddr'
                      })}
                      allowUpdate
                    />
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">
                          <FormattedMessage id="sys.submit" />
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="my-orders">
              <Table style={{ backgroundColor: '#fff' }} responsive>
                <thead>
                  <tr>
                    <th>
                      <FormattedMessage id="sys.orderNumber" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.orderDate" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.amount" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.payBy" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.orderStatus" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <OrderTableItem
                      number={order.orderNumber}
                      date={order.orderedOn}
                      amount={order.amount}
                      payment={order.paymentBy}
                      status={order.orderStatus}
                    />
                  ))}
                </tbody>
              </Table>
            </TabPane>
            <TabPane tabId="my-pwd">
              <Row>
                <Col sm="12">
                  <Form style={{ backgroundColor: '#fff', padding: 30 }}>
                    <FormItem
                      label={<FormattedMessage id="sys.currentPwd" />}
                      fieldName="acct-pwd"
                      fieldType="password"
                    />
                    <FormItem
                      label={<FormattedMessage id="sys.newPwd" />}
                      fieldName="acct-new-pwd"
                      fieldType="password"
                    />
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">
                          <FormattedMessage id="sys.submit" />
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.acctSettingReducer.settings,
  orders: state.acctSettingReducer.orders
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Account));
