import React from 'react';
import { FormGroup, Col, Label, Input, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const FormItem = props => {
  const {
    label,
    fieldName,
    fieldType,
    fieldValue,
    fieldPlaceholder,
    allowUpdate,
    disable
  } = props;
  return (
    <FormGroup row>
      <Col sm={2}>
        <Label for={fieldName}>{label}</Label>
      </Col>
      <Col sm={8}>
        <Input
          type={fieldType}
          name={fieldName}
          id={fieldName}
          value={fieldValue}
          placeholder={fieldPlaceholder}
          disabled={!!disable}
        />
      </Col>
      {allowUpdate ? (
        <Col sm={2}>
          <Button color="link" className="text-primary">
            <FormattedMessage id="sys.update" />
          </Button>
        </Col>
      ) : null}
    </FormGroup>
  );
};

export default FormItem;
