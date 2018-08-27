import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { Input } from 'reactstrap';
import Navigation from './navigation';
import Footer from '../components/footer';
import CartItem from '../components/cartItem';
import { fetchCart } from '../actions';

class Checkout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
  }

  onCheckoutClick = () => {
    this.props.history.push('/checkout');
  };

  render() {
    return (
      <div>
        <Navigation />
        <Container className="padding-top-80">
          <div className="lead">
            <FormattedMessage id="sys.checkout" />
          </div>
          <br />
          <Row>
            <Col md={8}>
              <ListGroup>
                {this.props.cart.map(cartItem => (
                  <ListGroupItem key={cartItem.productName}>
                    <CartItem
                      productImage={cartItem.productImage}
                      productName={cartItem.productName}
                      productURL={cartItem.productURL}
                      productPrice={cartItem.productPrice}
                      productQuantity={cartItem.productQuantity}
                    />
                  </ListGroupItem>
                ))}
              </ListGroup>
              <br />
              <div className="pull-right">
                <strong>
                  Subtotal:
                  <span className="price">$123.16</span>
                </strong>
              </div>
            </Col>
            <Col md={4}>
              <Card body>
                <b><FormattedMessage id="sys.payBy" /> :</b>
                <CardBody>
                  <Input type="radio" name="payment-method" />
                  &nbsp;PayPal
                  <br />
                  <Input type="radio" name="payment-method" />
                  &nbsp;Bank Transfer
                  <br />
                  <Input type="radio" name="payment-method" />
                  &nbsp;
                  <FormattedMessage id="sys.cod" />
                </CardBody>
              </Card><br />
              <Card body>
                <b><FormattedMessage id="sys.shippingBy" /> :</b>
                <CardBody>
                  <Input type="radio" name="shipping-method" />
                  &nbsp;Normal mail
                  <br />
                  <Input type="radio" name="shipping-method" />
                  &nbsp;Express delivery
                  <br />
                  <Input type="radio" name="shipping-method" />
                  &nbsp;Registered mail
                </CardBody>
              </Card><br />
              <Button
                color="primary"
                className="pull-right"
                onClick={this.onCheckoutClick}
              >
                <FormattedMessage id="sys.proceedPay" />
              </Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
}

export default connect(mapStateToProps)(withRouter(Checkout));
