import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const Tile = props => (
  <Card body style={{ background: props.backgroundColor || '#fff' }}>
    <CardTitle style={{ color: props.fontColor || '#000', fontWeight: 200 }}>{props.title}</CardTitle>
    <div style={{ fontWeight: 200 }}>{props.icon}</div>
  </Card>
);

export default Tile;
