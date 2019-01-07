import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Form,
  Input,
  Button,
  FormGroup,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {
  ProfileLoader,
} from '../../components';
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

  onSearchClick = event => {
    const { dispatch, storeId } = this.props;
    if (event.target.value.length >= 2) {
      // TODO: replace hardcoded page number and page size
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
        <FormGroup row>
          <Field
            component={renderField}
            name="search"
            className="form-control"
            id="search"
            placeholder={formatMessage({ id: 'sys.searchProducts' })}
            onChange={this.onSearchChange}
            validate={[required]}
          />
          <Button>Search</Button>
        </FormGroup>

        <div>
          {
            products.map(product => {
              return (
                <div>{product.name}</div>
              );
            })
          }
        </div><br />
        <Field
          component={renderField}
          name="quantity"
          className="form-control"
          id="quantity"
          type="number"
          placeholder={formatMessage({ id: 'sys.qty' })}
          validate={[required]}
        />
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
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

ProductSearchForm = reduxForm({
  form: 'productSearchForm',
})(ProductSearchForm);

export default withRouter(
  connect(state => {
    return {
      products: state.productReducer.products.data,
      enableReinitialize: true,
    };
  })(injectIntl(ProductSearchForm))
);
