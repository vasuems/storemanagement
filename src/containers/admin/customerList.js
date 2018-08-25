import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';

class CustomerList extends Component {
  render() {
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.customers" />
        </h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="sys.name" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.email" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nick Chen</td>
                  <td>nick.chen@example.com</td>
                  <td>
                    <ToggleButton
                      value={true}
                      onToggle={() => {}} />
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

export default CustomerList;
