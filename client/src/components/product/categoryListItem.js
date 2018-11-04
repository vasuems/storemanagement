import React from 'react';
import { Button } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const CategoryListItem = (props) => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.parent}</td>
      <td>{props.status ? formatMessage({ id: 'sys.active' }) : formatMessage({ id: 'sys.inactive' })}</td>
      <td>
        <Button
          size="sm"
          color="link"
          onClick={() => props.onClick(props.id)}
        >
          <FormattedMessage id="sys.view" />
        </Button>
      </td>
    </tr>
  );
};

export default injectIntl(CategoryListItem);
