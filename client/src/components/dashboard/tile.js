import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';

const Tile = props => (
  <Card body style={{ background: props.backgroundColor || '#fff' }}>
    <CardTitle style={{ color: props.fontColor || '#000', fontWeight: 200 }}>
      {props.title}
    </CardTitle>
    <div style={{ fontWeight: 200 }}>{props.icon}</div>
  </Card>
);

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Tile;
