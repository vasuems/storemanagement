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

class Payment extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
  }

  onCheckoutClick = () => {
    const { history } = this.props;
    history.push('/checkout');
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        <Navigation />
        <Container
          className="padding-top-80"
          style={{ position: 'relative', height: '100%', minHeight: '100%' }}
        >
          <div className="lead">
            <FormattedMessage id="sys.checkout" />
          </div>
          <Row>
            <Col md={12}>
              <ListGroup>
                {items.map(cartItem => (
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
                <FormattedMessage id="sys.pay" />
              </Button>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: [],
  };
}

export default connect(mapStateToProps)(withRouter(Payment));
