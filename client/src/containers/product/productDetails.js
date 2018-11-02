import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class ProductDetails extends Component{
  render(){
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/products')}
            >
              <FormattedMessage id="sys.products" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.productDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row className="table-container">
            <Col md={12} className="table-content" />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.productReducer.productDetails,
});

export default connect(mapStateToProps, null)(withRouter(ProductDetails));