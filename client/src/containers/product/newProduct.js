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
import ToggleButton from 'react-toggle-button';
import { FiSave } from 'react-icons/fi';
import { NewProductForm } from '../../components/forms';

class NewProduct extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
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
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/products')}
            >
              <FormattedMessage id="sys.products" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.newProduct" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row className="table-container">
            <Col md={12} className="table-content">
              <NewProductForm
                categories={[]} />
              <Button size="sm" color="primary">
                <FiSave />
                &nbsp;
                <FormattedMessage id="sys.save" />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(withRouter(NewProduct));
