import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import Navigation from './navigation';
import Footer from '../components/footer';
import FormItem from '../components/formItem';
import { fetchCart } from '../actions';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'my-acct'
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
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
                      fieldValue="Nick Chen"
                      fieldPlaceholder={formatMessage({ id: 'sys.name' })}
                      disable />
                    <FormItem
                      label={<FormattedMessage id="sys.email" />}
                      fieldName="acct-email"
                      fieldType="email"
                      fieldValue="nick.chen@example.com"
                      fieldPlaceholder={formatMessage({ id: 'sys.email' })}
                      disable />
                    <FormItem
                      label={<FormattedMessage id="sys.contactNo" />}
                      fieldName="acct-contact"
                      fieldType="text"
                      fieldValue="+1-1234567890"
                      fieldPlaceholder={formatMessage({ id: 'sys.contactNo' })}
                      allowUpdate />
                    <FormItem
                      label={<FormattedMessage id="sys.deliveryAddr" />}
                      fieldName="acct-delivery-addr"
                      fieldType="text"
                      fieldValue="Address Line 1"
                      fieldPlaceholder={formatMessage({ id: 'sys.deliveryAddr' })}
                      allowUpdate />
                    <FormItem
                      label={<FormattedMessage id="sys.billingAddr" />}
                      fieldName="acct-delivery-addr"
                      fieldType="text"
                      fieldValue="Address Line 2"
                      fieldPlaceholder={formatMessage({ id: 'sys.billingAddr' })}
                      allowUpdate />
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
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
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

function mapStateToProps(state) {
  return {
    account: null
  };
}

export default connect(mapStateToProps)(injectIntl(Account));
