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
import jwt from 'jsonwebtoken';
import { CategoryListItem } from '../../components';
import { fetchProductCategories } from '../../actions';
import config from '../../config';

class ProductCategoryList extends Component {
  constructor(props) {
    super(props);
    const { data: { storeId } } = jwt.decode(localStorage.getItem(config.accessTokenKey));

    this.state = {
      storeId,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    /*TODO: The page size is temporarily set to 200 until 
      I figure out a good way to handle pagination for list with sub-items
    */
    dispatch(fetchProductCategories({ storeId: this.state.storeId, pageSize: 200, pageNo: 1 }));
  }

  onViewClick = id => {
    this.props.history.push(`/categories/${id}`);
  };

  onPageChange = page => {
    const { dispatch } = this.props;
    dispatch(fetchProductCategories({ storeId: this.state.storeId, pageSize: 200, pageNo: page.selected + 1 }));
  }

  render() {
    const { history, categories, total, intl: { formatMessage } } = this.props;
    const parentCats = categories.filter(cat => !cat.parentId);

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/dashboard')}>
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.categories" />
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
                  onClick={() => history.push('/new-category')}
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
                    <th width="40%">
                      <FormattedMessage id="sys.name" />
                    </th>
                    <th width="10%">
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th width="10%" />
                  </tr>
                </thead>

                {parentCats ? parentCats.map(cat => (
                  <CategoryListItem
                    key={cat.code}
                    id={cat.code}
                    name={cat.name}
                    status={cat.status}
                    childCats={categories.filter(ccat => ccat.parentId === cat.code)}
                    onClick={this.onViewClick}
                  />
                )) : <tr><td><FormattedMessage id="sys.noRecords" /></td></tr>}
              </Table>
            </Col>
          </div>
          <ReactPaginate
            pageCount={total || 1}
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

ProductCategoryList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const diff = state.productReducer.categories.count / 20;
  return {
    categories: state.productReducer.categories.data,
    total: Number.isInteger(diff) ? diff : parseInt(diff) + 1,
  };
};

export default connect(
  mapStateToProps,
  null
)(injectIntl(withRouter(ProductCategoryList)));
