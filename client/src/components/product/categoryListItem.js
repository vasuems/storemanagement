import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const CategoryListItem = props => {
  const {
    name,
    status,
    id,
    onClick,
    childCats,
    intl: { formatMessage },
  } = props;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>
          <Badge color={status ? 'success' : 'danger'}>
            {status
              ? formatMessage({ id: 'sys.active' })
              : formatMessage({ id: 'sys.inactive' })}
          </Badge>
        </td>
        <td>
          <Button size="sm" color="link" onClick={() => onClick(id)}>
            <FormattedMessage id="sys.view" />
          </Button>
        </td>
      </tr>
      {childCats.map(cat => (
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cat.name}</td>
          <td>
            <Badge color={cat.status ? 'success' : 'danger'}>
              {cat.status
                ? formatMessage({ id: 'sys.active' })
                : formatMessage({ id: 'sys.inactive' })}
            </Badge>
          </td>
          <td>
            <Button size="sm" color="link" onClick={() => onClick(cat.id)}>
              <FormattedMessage id="sys.view" />
            </Button>
          </td>
        </tr>
      ))
      }
    </tbody>
  );
};

CategoryListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  childCats: PropTypes.array,
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(CategoryListItem);
