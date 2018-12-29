import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button, Input, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FiSave } from 'react-icons/fi';
import {
  fetchProductCategories,
  fetchProductCategoryDetails,
  submitProductCategory,
} from '../../actions';

const required = value => (value ? undefined : 'Required');

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
    <div>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched && (error && <span className="text-danger">{error}</span>)}
    </div>
  );

const renderSelect = ({ input, type, data, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control">
      <option />
      {data.map(cat => (
        <option key={cat.code} value={cat.code}>
          {cat.name}
        </option>
      ))}
    </select>
    {touched && (error && <div><span className="text-danger">{error}</span></div>)}
  </div>
);

class ProductCategoryForm extends Component {
  componentDidMount() {
    const {
      dispatch,
      mode,
      match: {
        params: { id },
      },
    } = this.props;

    //TODO: replace the store ID here
    dispatch(fetchProductCategories({ storeId: 'asdfasdfasdfasd', pageSize: 200, pageNo: 1 }));

    if (mode === 'update') {
      dispatch(
        fetchProductCategoryDetails({
          storeId: 'asdfasdfasdfasd',
          categoryId: id,
        })
      );
    }
  }

  onSubmit = data => {
    const { dispatch } = this.props;

    data.storeId = 'asdfasdfasdfasd';
    dispatch(submitProductCategory(data));
  };

  render() {
    const {
      handleSubmit,
      categories,
      newSuccess,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Button size="sm" color="primary" className="pull-right form-btn">
          <FiSave />
          &nbsp;
          <FormattedMessage id="sys.save" />
        </Button>
        <br />
        <br />
        {
          newSuccess === false ?
            <Alert color="danger">
              <FormattedMessage id="sys.newFailed" />
            </Alert> :
            newSuccess === true ?
              <Alert color="success">
                <FormattedMessage id="sys.newSuccess" />
              </Alert> : null
        }
        <FormGroup row>
          <Label for="name" sm={2}>
            <FormattedMessage id="sys.categoryName" />
            <span className="text-danger mandatory-field">*</span>
          </Label>
          <Col sm={10}>
            <Field
              component={renderField}
              name="name"
              className="form-control"
              id="name"
              validate={[required]}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="parent-id" sm={2}>
            <FormattedMessage id="sys.parentCategory" />
          </Label>
          <Col sm={10}>
            <Field
              component={renderSelect}
              id="parent-id"
              name="parentId"
              data={categories.filter(cat => !cat.parentId)}
            >
            </Field>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

ProductCategoryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  newSuccess: PropTypes.bool,
  match: PropTypes.object,
  mode: PropTypes.string,
};

ProductCategoryForm = reduxForm({
  form: 'productCategoryForm',
})(ProductCategoryForm);

export default withRouter(
  connect(state => {
    const { name, parentId } = state.productReducer.categoryDetails;

    return {
      initialValues: {
        name,
        parentId,
      },
      newSuccess: state.productReducer.newSuccess,
      categories: state.productReducer.categories.data,
      enableReinitialize: true,
    };
  })(ProductCategoryForm)
);
