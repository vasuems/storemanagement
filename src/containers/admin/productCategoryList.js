import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';

class ProductCategoryList extends Component {
  render() {
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.prodCats" />
        </h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive>
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
