import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button
} from "reactstrap";
import { FormattedMessage } from "react-intl";
import CartItem from "../components/cartItem";
import { fetchCart } from "../actions";

class Cart extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
  }

  render() {
    return (
      <Container>
        <div className="text-center lead">
          <FormattedMessage id="sys.myCart" />
        </div>
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
            <Button bsStyle="primary" style={{ float: "right" }}>
              <FormattedMessage id="sys.checkout" />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart
  };
}

export default connect(mapStateToProps)(Cart);
