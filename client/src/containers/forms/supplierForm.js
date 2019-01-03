import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import { FiSave } from 'react-icons/fi';
import {
  fetchCountries,
  submitSupplier,
  fetchSupplierDetails,
  clearSupplierDetails,
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
      {data.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
    {touched && (error && <div><span className="text-danger">{error}</span></div>)}
  </div>
);

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0]);

const renderFileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps,
  },
  meta: omitMeta,
  ...props,
}) =>
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />

class SupplierForm extends Component {
  componentDidMount() {
    const {
      dispatch,
      mode,
      storeId,
      match: {
        params: { id },
      },
    } = this.props;

    dispatch(fetchCountries());

    if (mode === 'update') {
      dispatch(
        fetchSupplierDetails({ storeId, supplierId: id })
      );
    } else {
      dispatch(
        clearSupplierDetails()
      );
    }
  }

  onSubmit = data => {
    const { 
      dispatch, 
      storeId,
      mode,
      match: {
        params: { id },
      },
    } = this.props;

    data.storeId = storeId;

    if(mode === 'update'){
      data.supplierId = id;
    }

    dispatch(submitSupplier(data));
  };

  render() {
    const {
      handleSubmit,
      initialValues,
      countries,
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
        <Row>
          <Col md={3}>
            <p className="lead"><FormattedMessage id="sys.logo" /></p>
            <img
              src={initialValues.logo || require('../../assets/no_image.svg')}
              style={{ width: 128, height: 128 }}
            /><br /><br />
            <Field
              name="logo"
              id="logo"
              component={renderFileInput}
            />
          </Col>
          <Col md={9}>
            <Card>
              <CardHeader>
                <FormattedMessage id="sys.basicInfo" />
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="name" sm={3}>
                    <FormattedMessage id="sys.name" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
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
                  <Label for="url" sm={3}>
                    <FormattedMessage id="sys.website" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="url"
                      className="form-control"
                      id="url"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    <FormattedMessage id="sys.email" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="email"
                      className="form-control"
                      id="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contact" sm={3}>
                    <FormattedMessage id="sys.contactNo" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="contact"
                      className="form-control"
                      id="contact"
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contact" sm={3}>
                    <FormattedMessage id="sys.country" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderSelect}
                      name="countryId"
                      id="country-id"
                      data={countries}
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="address" sm={3}>
                    <FormattedMessage id="sys.address" />
                    <span className="text-danger mandatory-field">*</span>
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="address"
                      className="form-control"
                      id="address"
                      validate={[required]}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
}

SupplierForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  mode: PropTypes.string,
  newSuccess: PropTypes.bool,
  storeId: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired,
};

SupplierForm = reduxForm({
  form: 'supplierForm',
})(SupplierForm);

export default withRouter(
  connect(state => {
    return {
      initialValues: state.supplierReducer.supplierDetails,
      countries: state.publicReducer.countries,
      newSuccess: state.supplierReducer.newSuccess,
      enableReinitialize: true,
    };
  })(SupplierForm)
);
