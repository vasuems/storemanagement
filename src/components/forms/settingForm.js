import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

const required = value => value ? undefined : 'Required';

const SettingForm = props => {
  const { handleSubmit } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="siteName" sm={2}><FormattedMessage id="sys.siteName" /></Label>
        <Col sm={10}>
          <Field component="input" name="siteName" className="form-control" id="siteName" value="" validate={[required]} />
        </Col>
      </FormGroup>
      <Button color="primary"><FormattedMessage id="sys.save" /></Button>
    </Form>
  );
};

export default reduxForm({
  form: 'siteSettings',
})(SettingForm);