import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Navigation from './navigation';
import Footer from '../components/footer';
import CartItem from '../components/cartItem';
import { fetchCart } from '../actions';

class Cart extends Component {
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
            <FormattedMessage id="sys.myCart" />
          </div>
          <br />
          <Row>
            <Col md={12}>
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
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-right">
              <div>
                <strong>
                  Subtotal:
                  <span className="price">$123.16</span>
                </strong>
              </div>
              <br />
              <Button
                color="primary"
                className="pull-right"
                onClick={this.onCheckoutClick}
              >
                <FormattedMessage id="sys.checkout" />
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
    cart: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps)(withRouter(Cart));
