import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
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
} from 'reactstrap';
import Dropzone from 'react-dropzone';

const validate = values => {
  const errors = {};
  if (!values.currentPwd) {
    errors.currentPwd = 'Required';
  }
  if (!values.newPwd) {
    errors.newPwd = 'Required';
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

class SupplierForm extends Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    // do stuff with files...
  };

  render() {
    const { handleSubmit, initialValues } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            {initialValues ? (
              <img
                src={initialValues.logo}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
                <Dropzone
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '1px dashed #999',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      <b>
                        <FormattedMessage id="sys.supplierLogo" />
                      </b>
                    </p>
                    <p>
                      <FormattedMessage id="sys.dragImageFile" />
                    </p>
                  </div>
                </Dropzone>
              )}
          </Col>
          <Col md={8}>
            <Card>
              <CardHeader>
                <FormattedMessage id="sys.basicInfo" />
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="name" sm={3}>
                    <FormattedMessage id="sys.name" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="name"
                      className="form-control"
                      id="name"
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
                      readonly
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
                      readonly
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contact" sm={3}>
                    <FormattedMessage id="sys.contactNo" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="contact"
                      className="form-control"
                      id="contact"
                      readonly
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="address" sm={3}>
                    <FormattedMessage id="sys.address" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="address"
                      className="form-control"
                      id="address"
                      readonly
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
};

SupplierForm = reduxForm({
  form: 'supplierForm',
  validate,
})(SupplierForm);

export default connect(state => {
  const {
    name,
    email,
    url,
    address,
    logo,
    contact,
  } = state.supplierReducer.supplierDetails;
  return {
    initialValues: {
      name,
      email,
      url,
      address,
      logo,
      contact,
    },
    enableReinitialize: true,
  };
})(SupplierForm);
