import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FiSave } from 'react-icons/fi';
import {
  Col,
  Row,
  Form,
  Card,
  Nav,
  TabContent,
  NavItem,
  NavLink,
  Input,
  TabPane,
  Button,
  Alert,
  CardTitle,
  Table,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FiDownload, FiPrinter, FiPlusCircle } from 'react-icons/fi';
import classnames from 'classnames';
import {
  ProfileLoader,
  OrderShippingItem,
  OrderProductListItem,
} from '../../components';
import {
  searchProduct,
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

  onSubmit = data => {
    const { dispatch, storeId } = this.props;
    data.storeId = storeId;

    dispatch(searchProduct(data));
  };

  render() {
    const {
      history,
      handleSubmit,
      done,
      loaded,
      error,
      intl: { formatMessage },
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Field
          component={renderField}
          name="search"
          className="form-control"
          id="search"
          placeholder={formatMessage({ id: 'sys.searchProducts' })}
          validate={[required]}
        /><br />
        <Button color="primary" block><FormattedMessage id="sys.add" /></Button>
      </Form >
    );
  }
}

ProductSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  storeId: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  initialValues: PropTypes.object,
  history: PropTypes.object.isRequired,
};

ProductSearchForm = reduxForm({
  form: 'productSearchForm',
})(ProductSearchForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: state.productReducer.productDetails,
      done: state.productReducer.done,
      loaded: state.productReducer.loaded,
      error: state.productReducer.error,
      enableReinitialize: true,
    };
  })(injectIntl(ProductSearchForm))
);
