import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Table,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {
  searchProducts,
  clearSearchProducts,
} from '../../actions';

const required = value => (value ? undefined : 'Required');

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const renderDecimalField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <Input {...input} placeholder="0.00" type={type} step=".01" />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

class ProductSearchForm extends Component {
  componentDidMount() {
    const {
      dispatch,
      storeId,
      match: {
        params: { id },
      },
    } = this.props;
  }

  onSearchChange = event => {
    const { dispatch, storeId } = this.props;

    // TODO: replace hardcoded page number and page size
    if (event.target.value.length >= 3) {
      dispatch(searchProducts({ storeId, keyword: event.target.value, pageNo: 1, pageSize: 200 }));
    }
  };

  onSearchClear = () => {
    const { dispatch } = this.props;

    dispatch(clearSearchProducts());
  }

  render() {
    const {
      handleSubmit,
      products,
      intl: { formatMessage },
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Row>
          <Col md={12}>
            <Field
              component={renderField}
              name="search"
              className="form-control"
              id="search"
              placeholder={formatMessage({ id: 'sys.searchProducts' })}
              onChange={this.onSearchChange}
            />
            <Table hover size="sm" style={{ border: '1px solid #eee' }}>
              <tbody style={{ fontSize: 12 }}>
                {
                  products.map(product => {
                    return (
                      <tr key={product.code} onClick={() => alert(product.code)}>
                        <td>{product.name}</td>
                        <td>{product.sku}</td>
                        <td>${product.unitPrice.toFixed(2)}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </Col>
          {/* <Col md={2}>
            <Button color="link" onClick={this.onSearchClick}><FiSearch /></Button>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: 'right' }}>
            <FormattedMessage id="sys.total" />: ${123.45}
          </Col>
        </Row>
        <br />
        <Button color="success" block onClick={this.onSearchClear}><FormattedMessage id="sys.add" /></Button>
      </Form >
    );
  }
}

ProductSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  storeId: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  search: PropTypes.string,
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

ProductSearchForm = reduxForm({
  form: 'productSearchForm',
})(ProductSearchForm);

export default withRouter(
  connect(state => {
    const selector = formValueSelector('productSearchForm');
    const search = selector(state, 'search');

    return {
      search,
      products: state.productReducer.products.data,
      enableReinitialize: true,
    };
  })(injectIntl(ProductSearchForm))
);
