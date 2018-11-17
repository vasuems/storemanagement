import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  InputGroup,
  Input,
  InputGroupAddon,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import { fetchProducts } from '../../actions';
import { ProductListItem } from '../../components';

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //TODO: to replace the store ID passing to action creator

    dispatch(fetchProducts('asdfasdfasdfasd'));
  }

  onViewClick = id => {
    const { history } = this.props;
    history.push(`/products/${id}`);
  };

  render() {
    const {
      history,
      products,
      auth,
      intl: { formatMessage },
    } = this.props;

    if (auth === false) {
      window.location.href = '/';
    }

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/dashboard')}>
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <InputGroup size="sm">
                    <Input placeholder={formatMessage({ id: 'sys.search' })} />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary">
                        <FiSearch />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <Button
                  size="sm"
                  color="primary"
                  className="pull-right form-btn"
                  onClick={() => history.push('/new-product')}
                >
                  <FiPlusCircle />
                  &nbsp;
                  <FormattedMessage id="sys.addNew" />
                </Button>
              </div>
              <br />
              <Table responsive>
                <thead className="table-header">
                  <tr>
                    <th>
                      <FormattedMessage id="sys.thumbnail" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.name" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.sku" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.price" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.qty" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <ProductListItem
                      key={product.code}
                      id={product.code}
                      coverImage={product.coverImage}
                      name={product.name}
                      sku={product.sku}
                      currency={product.currency}
                      currencySign={product.currencySign}
                      price={product.price}
                      quantity={product.quantity}
                      status={product.status}
                      onClick={this.onViewClick}
                    />
                  ))}
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

ProductList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    auth: state.authReducer.auth,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(injectIntl(ProductList))
);
