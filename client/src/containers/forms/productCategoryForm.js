import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FiSave } from 'react-icons/fi';
import { 
  fetchProductCategories,
  fetchProductCategoryDetails,
} from '../../actions';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
};

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

class ProductCategoryForm extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id },
      },
    } = this.props;

    //TODO: replace the store ID here
    dispatch(fetchProductCategories({storeCode: 'asdfasdfasdfasd', pageSize: 200, pageNo: 1}));
    dispatch(
      fetchProductCategoryDetails({
        storeCode: 'asdfasdfasdfasd',
        categoryCode: id,
      })
    );
  }

  onSubmit = data => {
    const { dispatch } = this.props;
  };

  render() {
    const { handleSubmit, categories } = this.props;

    return (
      <Form onSubmit={handleSubmit(data => this.onSubmit(data))}>
        <Button size="sm" color="primary" className="pull-right form-btn">
          <FiSave />
          &nbsp;
          <FormattedMessage id="sys.save" />
        </Button>
        <br />
        <br />
        <FormGroup row>
          <Label for="name" sm={2}>
            <FormattedMessage id="sys.categoryName" />
          </Label>
          <Col sm={10}>
            <Field
              component={renderField}
              name="name"
              className="form-control"
              id="name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="parent-id" sm={2}>
            <FormattedMessage id="sys.parentCategory" />
          </Label>
          <Col sm={10}>
            <Input type="select" id="parent-id" name="parent-id">
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Input>
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
  match: PropTypes.object,
};

ProductCategoryForm = reduxForm({
  form: 'productCategoryForm',
  validate,
})(ProductCategoryForm);

export default withRouter(
  connect(state => {
    const { name, parentId } = state.productReducer.categoryDetails;
    return {
      initialValues: {
        name: name,
        'parent-id': parentId,
      },
      categories: state.productReducer.categories.data,
      enableReinitialize: true,
    };
  })(ProductCategoryForm)
);
