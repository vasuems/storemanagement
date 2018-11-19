import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col } from 'reactstrap';
import { FiSave } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ProductForm } from '../forms';

class Product extends Component {
  render() {
    const {
      auth,
    } = this.props;

    if (auth === false) {
      window.location.href = '/';
    }
    const { history } = this.props;
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
          <Row className="table-container">
            <Col md={12} className="table-content">
              <Button size="sm" color="primary" className="pull-right form-btn">
                <FiSave />
                &nbsp;
                <FormattedMessage id="sys.save" />
              </Button>
              <br />
              <br />
              <ProductForm />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Product));
