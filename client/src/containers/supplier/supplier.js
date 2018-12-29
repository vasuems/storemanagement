import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem, Button, Col } from 'reactstrap';
import { FiSave } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { fetchSupplierDetails } from '../../actions';
import { SupplierForm } from '../forms';

class Supplier extends Component {
  render() {
    const { history, match: { path } } = this.props;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/dashboard')}>
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/suppliers')}>
              <FormattedMessage id="sys.suppliers" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.supplier" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <div className="table-container">
            <Col md={12} className="table-content">
              <Button size="sm" color="primary" className="pull-right form-btn">
                <FiSave />
                &nbsp;
                <FormattedMessage id="sys.save" />
              </Button>
              <br />
              <br />
              <SupplierForm
                mode={path === '/new-category' ? 'new' : 'update'}
              />
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

Supplier.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Supplier)
);
