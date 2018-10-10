import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

const ApiSettingForm = props => {
  const { handleSubmit } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="amazonApiKey" sm={2}>Amazon</Label>
        <Col sm={10}>
          <Field component="input" name="amazonApiKey" className="form-control" id="amazonApiKey" value="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lazadaApiKey" sm={2}>Lazada</Label>
        <Col sm={10}>
          <Field component="input" name="lazadaApiKey" className="form-control" id="lazadaApiKey" value="" />
        </Col>
      </FormGroup>
      <Button color="primary"><FormattedMessage id="sys.save" /></Button>
    </Form>
  );
};

export default reduxForm({
  form: 'apiSettings',
})(ApiSettingForm);