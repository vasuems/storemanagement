import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';

class ProductCategoryList extends Component {
  render() {
    return (
      <div className="content-body">
        <Row>
          <Col md={6}>
            <h3>
              <FormattedMessage id="sys.prodCats" />
            </h3>
          </Col>
          <Col md={6}>
            <Button color="danger" className="pull-right">+ <FormattedMessage id="sys.addNew" /></Button>
          </Col>
        </Row><br />
        <Row>
          <Col md={12}>
            <Table condensed responsive style={{ backgroundColor: '#fff' }}>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="sys.name" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sports</td>
                  <td>
                    <ToggleButton
value onToggle={() => {}} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductCategoryList;
