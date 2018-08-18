import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { fetchProductDetail } from "../actions";
import ProductImage from "../components/productImage";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductDetail());
  }

  render() {
    return this.props.productDetail ? (
      <Container>
        <Row>
          <Col md={9}>
            <ProductImage
              mainImage={this.props.productDetail.productImage}
              thumbnails={this.props.productDetail.productThumbnails}
            />
          </Col>
          <Col md={3} className="bg-white padding-bottom-20">
            <h3>{this.props.productDetail.productName}</h3>
            <h3 className="price">{this.props.productDetail.productPrice}</h3>
            <div>{this.props.productDetail.productDescription}</div>
            <br />
            <FormGroup controlId="formControlsSelect">
              <Label>Size</Label>
              <Input componentClass="select" placeholder="Please select size">
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="s">M</option>
                <option value="s">L</option>
                <option value="s">XL</option>
              </Input>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Label>Quantity</Label>
              <Input
                componentClass="select"
                placeholder="Please select quantity"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Input>
            </FormGroup>
            <br />
            <Button bsStyle="primary" block>
              Add to cart
            </Button>
          </Col>
        </Row>
      </Container>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    productDetail: state.productDetailReducer.productDetail
  };
}

export default connect(
  mapStateToProps,
  null
)(ProductDetail);
