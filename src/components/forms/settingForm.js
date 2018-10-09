import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

let SettingForm = props => {
  const { handleSubmit } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="siteName" sm={2}><FormattedMessage id="sys.siteName" /></Label>
        <Col sm={10}>
          <Field type="text" name="siteName" id="siteName" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
    </Form>
  );
};

SettingForm = reduxForm({
  form: 'acctSettings',
})(SettingForm);

export default SettingForm;