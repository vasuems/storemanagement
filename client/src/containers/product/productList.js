import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  Input,
  InputGroupAddon,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import { fetchProducts } from '../../actions';
import { ProductListItem } from '../../components';

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //TODO: to replace the store ID passing to action creator
    dispatch(fetchProducts({storeCode: 'asdfasdfasdfasd', pageSize: 20, pageNo: 1 }));
  }

  onViewClick = id => {
    const { history } = this.props;
    history.push(`/products/${id}`);
  };

  onPageChange = page => {
    const { dispatch } = this.props;
    dispatch(fetchProducts({storeCode: 'asdfasdfasdfasd', pageSize: 20, pageNo: page.selected + 1 }));
  }

  render() {
    const {
      history,
      products,
      total,
      intl: { formatMessage },
    } = this.props;

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
          <div className="table-container">
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
                  {products?products.map(product => (
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
                  )): null}
                </tbody>
              </Table>                       
            </Col>
          </div>
          <ReactPaginate 
            pageCount={total}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            pageClassName="page-item"
            breakClassName="page-item"
            breakLabel="..."
            pageLinkClassName="page-link"
            previousLabel={formatMessage({ id: 'sys.prev' })}
            nextLabel={formatMessage({ id: 'sys.next' })}
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
            onPageChange={this.onPageChange}
          />
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
  total: PropTypes.number.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const diff = state.productReducer.products.count / 20;
  return {
    products: state.productReducer.products.data,
    total: Number.isInteger(diff) ? diff : parseInt(diff) + 1,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(injectIntl(ProductList))
);
