import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Navigation from './navigation';
import Footer from '../components/footer';
import { fetchProductDetail } from '../actions';
import ProductImage from '../components/productImage';

class ProductDetail extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductDetail());
  }

  onCheckoutClick = () => {
    this.props.history.push('/cart');
  };

  render() {
    return this.props.productDetail ? (
      <div>
        <Navigation />
        <Container>
          <Row className="padding-top-80">
            <Col md={8}>
              <ProductImage
                mainImage={this.props.productDetail.productImage}
                thumbnails={this.props.productDetail.productThumbnails}
              />
            </Col>
            <Col md={4} className="bg-white padding-top-20 padding-bottom-20">
              <h3>{this.props.productDetail.productName}</h3>
              <h3 className="price">{this.props.productDetail.productPrice}</h3>
              <div>{this.props.productDetail.productDescription}</div>
              <br />
              <FormGroup controlId="formControlsSelect">
                <Label>
                  <FormattedMessage id="prod.size" />
                </Label>
                <Input componentClass="select" placeholder="Please select size">
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="s">M</option>
                  <option value="s">L</option>
                  <option value="s">XL</option>
                </Input>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <Label>
                  <FormattedMessage id="prod.qty" />
                </Label>
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
                  <option value="10">10</option>
                </Input>
              </FormGroup>
              <br />
              <Button color="primary" block onClick={this.onCheckoutClick}>
                <FormattedMessage id="sys.addToCart" />
              </Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
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
)(withRouter(ProductDetail));
