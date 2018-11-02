import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Row,
  Col,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';
import { FiPlusCircle } from 'react-icons/fi';
import { fetchProducts } from '../../actions';
import ProductListItem from '../../components/product/productListItem';

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  onViewClick = id => {
    this.props.history.push(`/products/${id}`);
  };

  render() {
    const { products } = this.props;
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
          <BreadcrumbItem active>
            <FormattedMessage id="sys.products" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row className="table-container">
            <Col md={12} className="table-content">
              <Button
                size="sm"
                color="primary"
                className="pull-right"
                onClick={() => this.props.history.push('/new-product')}
              >
                <FiPlusCircle />
                &nbsp;
                <FormattedMessage id="sys.addNew" />
              </Button>
              <br />
              <br />
              <Table bordered responsive>
                <thead className="table-header">
                  <tr>
                    <th>
                      <FormattedMessage id="sys.sku" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.desc" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.price" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map(product => {
                      return (
                        <ProductListItem
                          name={product.name}
                          sku={product.sku}
                          description={product.description}
                          price={product.price}
                          status={product.active}
                          onClick={this.onViewClick}
                        />
                      );
                    })
                  }
                </tbody>
              </Table>
              <Pagination aria-label="Page navigation example">
                <PaginationItem disabled>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ProductList));
