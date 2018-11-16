import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const CategoryListItem = (props) => {
  const { name, parent, status, id, onClick, intl: { formatMessage } } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{parent}</td>
      <td><Badge color={status ? 'success' : 'danger'}>{status ? formatMessage({ id: 'sys.active' }) : formatMessage({ id: 'sys.inactive' })}</Badge></td>
      <td>
        <Button
          size="sm"
          color="link"
          onClick={() => onClick(id)}
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
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(CategoryListItem);
