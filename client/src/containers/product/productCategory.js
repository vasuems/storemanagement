import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row, Col, Button, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiSave } from 'react-icons/fi';
import { fetchProductCategories } from '../../actions';
import ProductCategoryForm from '../forms/productCategoryForm';

class ProductCategory extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductCategories());
  }

  render() {
    const { history, categories } = this.props;
    return (
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
              onClick={() => history.push('/categories')}
            >
              <FormattedMessage id="sys.prodCats" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.productCat" />
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
              <ProductCategoryForm
                onSubmit={() => {}}
                categories={categories}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

ProductCategory.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: state.productReducer.categories,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ProductCategory));
