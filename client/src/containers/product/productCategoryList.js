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
import { CategoryListItem } from '../../components';
import { fetchProductCategories } from '../../actions';

class ProductCategoryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductCategories());
  }

  onViewClick = id => {
    this.props.history.push(`/categories/${id}`);
  };

  render() {
    const { categories } = this.props;
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
                    <th>
                      <FormattedMessage id="sys.parent" />
                    </th>
                    <th>
                      <FormattedMessage id="sys.status" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {categories.map(cat => {
                    return (
                      <CategoryListItem
                        id={cat.id}
                        name={cat.name}
                        parent={cat.parent}
                        status={cat.active}
                        onClick={this.onViewClick}
                      />
                    );
                  })}
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
  categories: state.productReducer.categories,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(ProductCategoryList));
