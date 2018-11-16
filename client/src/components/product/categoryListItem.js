import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const CategoryListItem = (props) => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.parent}</td>
      <td><Badge color={props.status ? 'success' : 'danger'}>{props.status ? formatMessage({ id: 'sys.active' }) : formatMessage({ id: 'sys.inactive' })}</Badge></td>
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

CategoryListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parent: PropTypes.string,
  status: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(CategoryListItem);
