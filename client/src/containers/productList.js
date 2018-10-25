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
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';
import {
  FiPlusCircle,
} from 'react-icons/fi';
import { fetchProducts } from '../actions';

class ProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  render() {
    return (
      <div className="content-body">
        <Row>
          <Col md={6}>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/dashboard">
                  <FormattedMessage id="sys.dashboard" />
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <FormattedMessage id="sys.products" />
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col md={6}>
            <Button size="sm" color="primary" className="pull-right">
              <FiPlusCircle />&nbsp;
              <FormattedMessage id="sys.addNew" />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table condensed responsive style={{ backgroundColor: '#fff' }}>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="sys.name" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.desc" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>asf ads fasdfasd</td>
                  <td>
                    <ToggleButton value={false} onToggle={() => {}} />
                  </td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>asf ads fasdfasd</td>
                  <td>
                    <ToggleButton value={false} onToggle={() => {}} />
                  </td>
                </tr>
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
    );
  }
}

const mapStateToProps = state => ({
  products: state.orderReducer.products,
});

export default connect(
  mapStateToProps,
  null
)(ProductList);
