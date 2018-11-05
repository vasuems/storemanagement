import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const validate = (values) => {
  const errors = {};
  if (!values.siteName) {
    errors.siteName = 'Required';
  }
  return errors;
};

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
);

class SettingForm extends Component {

  render(){
    const { handleSubmit, currencies, countries, languages } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Card>
              <CardHeader><FormattedMessage id="sys.basicInfo" /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="siteName" sm={3}>
                    <FormattedMessage id="sys.siteName" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="siteName"
                      className="form-control"
                      id="siteName"
                      value=""
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="currency" sm={3}>
                    <FormattedMessage id="sys.currency" />
                  </Label>
                  <Col sm={9}>
                    <Input type="select" name="currency">
                      {currencies.map(currency => (
                        <option key={currency.id} value={currency.id}>{currency.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="country" sm={3}>
                    <FormattedMessage id="sys.country" />
                  </Label>
                  <Col sm={9}>
                    <Input type="select" name="country">
                      {countries.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="language" sm={3}>
                    <FormattedMessage id="sys.lang" />
                  </Label>
                  <Col sm={9}>
                    <Input type="select" name="language">
                      {languages.map(lang => (
                        <option key={lang.id} value={lang.id}>{lang.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardHeader><FormattedMessage id="sys.socialMedia" /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="facebook" sm={3}>
                    <FormattedMessage id="sys.facebook" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="facebook"
                      className="form-control"
                      id="facebook"
                      value=""
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="twitter" sm={3}>
                    <FormattedMessage id="sys.twitter" />
                  </Label>
                  <Col sm={9}>
                    <Field
                      component={renderField}
                      name="twitter"
                      className="form-control"
                      id="twitter"
                      value=""
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

SettingForm = reduxForm({
  form: 'siteSettings',
  validate,
})(SettingForm);

export default connect((state) => {
  const {
    siteName,
    facebook,
    twitter,
  } = state.settingReducer.settings;
  return {
    initialValues: {
      siteName,
      facebook,
      twitter,
    },
    enableReinitialize: true,
  };
})(SettingForm);
