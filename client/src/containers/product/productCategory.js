import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';
import { FiSave } from 'react-icons/fi';
import { fetchProductCategories } from '../../actions';
import ProductCategoryForm from '../../components/forms/productCategoryForm';

class ProductCategory extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductCategories());
  }

  render() {
    return (
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
              onClick={() => this.props.history.push('/categories')}
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
                onSubmit={()=>{}}
                categories={this.props.categories}
              />              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.productReducer.categories,
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(ProductCategory));
