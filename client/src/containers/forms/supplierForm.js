import React from 'react';
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

const validate = (values) => {
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
  input, placeholder, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

const SupplierForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader><FormattedMessage id="sys.basicInfo" /></CardHeader>
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
                <Label for="website" sm={3}>
                  <FormattedMessage id="sys.website" />
                </Label>
                <Col sm={9}>
                  <Field
                    component={renderField}
                    name="website"
                    className="form-control"
                    id="website"
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
                <Label for="contact-no" sm={3}>
                  <FormattedMessage id="sys.contactNo" />
                </Label>
                <Col sm={9}>
                  <Field
                    component={renderField}
                    name="contact-no"
                    className="form-control"
                    id="contact-no"
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
};

SupplierForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'supplierForm',
  validate,
})(SupplierForm);
