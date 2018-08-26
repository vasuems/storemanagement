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
                    <FormGroup row>
                      <Col sm={2}>
                        <Label for="name">
                          <FormattedMessage id="sys.name" />
                        </Label>
                      </Col>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="name"
                          id="acct-name"
                          value="Nick Chen"
                          placeholder={formatMessage({ id: 'sys.name' })}
                          disabled
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2}>
                        <Label for="email">
                          <FormattedMessage id="sys.email" />
                        </Label>
                      </Col>
                      <Col sm={8}>
                        <Input
                          type="email"
                          name="email"
                          id="acct-email"
                          value="nick.chen@example.com"
                          placeholder={formatMessage({ id: 'sys.email' })}
                          disabled
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2}>
                        <Label for="acct-contact">
                          <FormattedMessage id="sys.contactNo" />
                        </Label>
                      </Col>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="contact"
                          id="acct-contact"
                          value="+1-1234567890"
                          placeholder={formatMessage({ id: 'sys.contactNo' })}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button color="link" className="text-primary">
                          <FormattedMessage id="sys.update" />
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2}>
                        <Label for="acct-delivery-addr">
                          <FormattedMessage id="sys.deliveryAddr" />
                        </Label>
                      </Col>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="delivery-addr"
                          id="acct-delivery-addr"
                          value="Address Line 2"
                          placeholder={formatMessage({
                            id: 'sys.deliveryAddr'
                          })}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button color="link" className="text-primary">
                          <FormattedMessage id="sys.update" />
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2}>
                        <Label for="exampleSelect">
                          <FormattedMessage id="sys.billingAddr" />
                        </Label>
                      </Col>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="billing-addr"
                          id="acct-billing-addr"
                          value="Address Line 1"
                          placeholder={formatMessage({ id: 'sys.billingAddr' })}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button color="link" className="text-primary">
                          <FormattedMessage id="sys.update" />
                        </Button>
                      </Col>
                    </FormGroup>
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
