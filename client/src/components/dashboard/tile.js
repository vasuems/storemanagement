import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const Tile = props => {
  return (
    <Card body style={{background: props.backgroundColor || '#fff'}}>
      <CardTitle style={{color: props.fontColor || '#000'}}>{props.title}</CardTitle>
    </Card>
  )
}

export default Tile;