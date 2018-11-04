import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { FiSave } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { fetchProductDetails } from '../../actions';
import { ProductForm } from '../../components/forms';

class Product extends Component{
  componentDidMount(){
    const { dispatch } = this.props;

    dispatch(fetchProductDetails());
  }

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
            <Col md={12} className="table-content">
              <Button size="sm" color="primary" className="pull-right form-btn">
                <FiSave />
                &nbsp;
                <FormattedMessage id="sys.save" />
              </Button><br /><br />
              <ProductForm 
                categories={[]}
                currencies={[{id: 1, currency: 'SGD'}]}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.productReducer.categories,
});

export default connect(mapStateToProps, null)(withRouter(Product));