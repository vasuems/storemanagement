import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

const EtsySettingForm = props => {
  const { handleSubmit } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="apiKey" sm={2}><FormattedMessage id="sys.apiKey" /></Label>
        <Col sm={10}>
          <Field component="input" name="apiKey" className="form-control" id="apiKey" value="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="secret" sm={2}><FormattedMessage id="sys.secret" /></Label>
        <Col sm={10}>
          <Field component="input" name="secret" className="form-control" id="secret" value="" />
        </Col>
      </FormGroup>
      <Button color="danger"><FormattedMessage id="sys.save" /></Button>
    </Form>
  );
};

export default reduxForm({
  form: 'etsySettings',
})(EtsySettingForm);