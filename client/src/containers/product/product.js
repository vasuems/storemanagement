import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { FormattedMessage } from 'react-intl';
import { ProductForm } from '../forms';
import config from '../../config';

class Product extends Component {
  render() {
    const { history, match: { path } } = this.props;
    const { data: { storeId } } = jwt.decode(localStorage.getItem(config.accessTokenKey));

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/dashboard')}>
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/products')}>
              <FormattedMessage id="sys.products" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.productDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <div className="table-container">
            <Col md={12} className="table-content">
              <ProductForm
                mode={path === '/new-product' ? 'new' : 'update'}
                storeId={storeId} />
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Product);
