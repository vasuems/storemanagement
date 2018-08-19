import React, { Component } from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class CartItem extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <img src={this.props.productImage} className="cart-img" />
            </Col>
            <Col md={9}>
              <strong>
                <a href={this.props.productURL}>{this.props.productName}</a>
              </strong>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <strong className="price">{this.props.productPrice}</strong>
        </Col>
        <Col md={2}>
          <FormGroup>
            <span className="glyphicon glyphicon-minus" />
            &nbsp;
            <Input
              type="number"
              placeholder="0"
              value={this.props.productQuantity}
              className="quantity-input"
            />
            &nbsp;
            <span className="glyphicon glyphicon-plus" />
          </FormGroup>
          <FormattedMessage id="sys.delete" />
        </Col>
      </Row>
    );
  }
}

export default CartItem;
