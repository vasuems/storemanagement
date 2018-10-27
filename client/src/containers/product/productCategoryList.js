import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  FiPlusCircle,
} from 'react-icons/fi';
import ToggleButton from 'react-toggle-button';
import { fetchProductCategories} from '../../actions';

class ProductCategoryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductCategories());
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
                <FormattedMessage id="sys.prodCats" />
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
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sports</td>
                  <td>
                    <ToggleButton value onToggle={() => {}} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.orderReducer.products,
});

export default connect(mapStateToProps, null)(ProductCategoryList);
