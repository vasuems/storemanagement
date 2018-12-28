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
import { fetchSuppliers } from '../../actions';
import { SupplierListItem } from '../../components';
import config from '../../config';

class SupplierList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { data : { storeId }} = jwt.decode(localStorage.getItem(config.accessTokenKey));

    dispatch(fetchSuppliers(storeId));
  }

  onViewClick = id => {
    this.props.history.push(`/suppliers/${id}`);
  };

  render() {
    const { history, suppliers } = this.props;
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
            <FormattedMessage id="sys.suppliers" />
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
                  onClick={() => history.push('/new-supplier')}
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
                      <FormattedMessage id="sys.comLogo" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.name" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.contactInfo" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map(product => (
                    <SupplierListItem
                      key={product.code}
                      id={product.code}
                      logo={product.logo}
                      name={product.name}
                      url={product.url}
                      address={product.address}
                      email={product.email}
                      contact={product.contact}
                      status={product.status}
                      onClick={this.onViewClick}
                    />
                  ))}
                </tbody>
              </Table>              
            </Col>
          </div>
          <ReactPaginate 
            pageCount={20}
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
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  suppliers: state.supplierReducer.suppliers,
});

SupplierList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  suppliers: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  null
)(injectIntl(withRouter(SupplierList)));
