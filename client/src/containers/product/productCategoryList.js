import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  Input,
  InputGroupAddon,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import { CategoryListItem } from '../../components';
import { fetchProductCategories } from '../../actions';

class ProductCategoryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //TODO: to replace the store ID passing to action creator
    dispatch(fetchProductCategories('asdfasdfasdfasd'));
  }

  onViewClick = id => {
    this.props.history.push(`/categories/${id}`);
  };

  render() {
    const { history, categories } = this.props;
    const { formatMessage } = this.props.intl;
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
                    <th width="40%">
                      <FormattedMessage id="sys.parent" />
                    </th>
                    <th width="10%">
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th width="10%" />
                  </tr>
                </thead>
                <tbody>
                  {categories.map(cat => (
                    <CategoryListItem
                      key={cat.code}
                      id={cat.code}
                      name={cat.name}
                      parent={cat.parent}
                      status={cat.status}
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

ProductCategoryList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  categories: state.productReducer.categories,
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(withRouter(ProductCategoryList)));
