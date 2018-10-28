import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiPlusCircle } from 'react-icons/fi';
import ToggleButton from 'react-toggle-button';
import { fetchProductCategories } from '../../actions';

class ProductCategoryList extends Component {
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
          <BreadcrumbItem active>
            <FormattedMessage id="sys.prodCats" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row className="table-container">
            <Col md={12} className="table-content">
              <Button
                size="sm"
                color="primary"
                className="pull-right"
                onClick={() => this.props.history.push('/categories/new')}
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
)(withRouter(ProductCategoryList));
