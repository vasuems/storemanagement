import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Form,
  Button,
  Row,
  Col,
  Table,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {
  searchProducts,
  clearSearchProducts,
  selectOrderProduct,
  addOrderProduct,
} from '../../actions';

const renderField = ({ input, type, placeholder, className, style, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} className={className} style={style} />
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

  onItemClick = item => {
    const { dispatch } = this.props;

    dispatch(clearSearchProducts());
    dispatch(selectOrderProduct(item));
  }

  onAddProductSubmit = item => {
    const { dispatch, productSelected } = this.props;

    dispatch(addOrderProduct({
      id: productSelected.code,
      name: productSelected.name,
      price: productSelected.unitPrice,
      quantity: item.qty,
      amount: productSelected.unitPrice * parseInt(item.qty).toFixed(2),
    }));
  }

  render() {
    const {
      handleSubmit,
      products,
      productSelected,
      intl: { formatMessage },
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onAddProductSubmit(data))}>
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
            {products.length > 0 ?
              <Table hover size="sm" style={{ border: '1px solid #eee', fontSize: 12 }}>
                <thead style={{ backgroundColor: '#333', color: '#fff' }}>
                  <tr>
                    <th><FormattedMessage id="sys.productName" /></th>
                    <th><FormattedMessage id="sys.sku" /></th>
                    <th><FormattedMessage id="sys.unitPrice" /></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map(product => {
                      const { code, name, sku, unitPrice } = product;
                      return (
                        <tr style={{ cursor: 'pointer' }} key={code} onClick={() => this.onItemClick({ code, name, sku, unitPrice })}>
                          <td>{product.name}</td>
                          <td>{product.sku}</td>
                          <td>${product.unitPrice.toFixed(2)}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table> : null
            }
          </Col>
          {/* <Col md={2}>
            <Button color="link" onClick={this.onSearchClick}><FiSearch /></Button>
          </Col> */}
        </Row><br />
        {
          productSelected.code ?
            <Row>
              <Col md={10} style={{ fontSize: 13 }}>
                <Row>
                  <Col md={4}><FormattedMessage id="sys.productName" />:</Col>
                  <Col md={8}>{productSelected.name}</Col>
                </Row>
                <Row>
                  <Col md={4}><FormattedMessage id="sys.sku" />:</Col>
                  <Col md={8}>{productSelected.sku}</Col>
                </Row>
                <Row>
                  <Col md={4}><FormattedMessage id="sys.unitPrice" />:</Col>
                  <Col md={8}>${productSelected.unitPrice}</Col>
                </Row>
                <Row>
                  <Col md={4}><FormattedMessage id="sys.qty" />:</Col>
                  <Col md={8}>
                    <Field
                      component={renderField}
                      name="qty"
                      id="qty"
                      type="number"
                      style={{ width: 60, padding: 2 }}
                      value={1}
                      onChange={this.onSearchChange}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={2} style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Button color="success"><FormattedMessage id="sys.add" /></Button>
              </Col>
            </Row> : null
        }
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
  productSelected: PropTypes.object,
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

ProductSearchForm = reduxForm({
  form: 'productSearchForm',
})(ProductSearchForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: { search: '', qty: '1' },
      products: state.productReducer.products.data,
      productSelected: state.orderReducer.productSelected,
      enableReinitialize: true,
    };
  })(injectIntl(ProductSearchForm))
);
