import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

const EbaySettingForm = props => {
  const { handleSubmit } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="appId" sm={2}><FormattedMessage id="sys.appId" /></Label>
        <Col sm={10}>
          <Field component="input" name="appId" className="form-control" id="appId" value="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="devId" sm={2}><FormattedMessage id="sys.devId" /></Label>
        <Col sm={10}>
          <Field component="input" name="devId" className="form-control" id="devId" value="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="certId" sm={2}><FormattedMessage id="sys.certId" /></Label>
        <Col sm={10}>
          <Field component="input" name="certId" className="form-control" id="certId" value="" />
        </Col>
      </FormGroup>
      <Button color="danger"><FormattedMessage id="sys.save" /></Button>
    </Form>
  );
};

export default reduxForm({
  form: 'ebaySettings',
})(EbaySettingForm);