import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

const SettingForm = props => {
  const { onSubmit } = props;
  return(
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="siteName" sm={2}><FormattedMessage id="sys.siteName" /></Label>
        <Col sm={10}>
          <Field component="input" name="siteName" className="form-control" id="siteName" value="" />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'siteSettings',
})(SettingForm);