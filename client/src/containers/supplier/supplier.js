import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { fetchSupplierDetails } from '../../actions';
import { SupplierForm } from '../forms';

class Supplier extends Component{
  componentDidMount(){
    const { dispatch } = this.props;

    dispatch(fetchSupplierDetails());
  }

  render(){
    const { history } = this.props;
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => history.push('/products')}
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
              <SupplierForm 
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

Supplier.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  categories: state.productReducer.categories,
});

export default connect(mapStateToProps, null)(withRouter(Supplier));