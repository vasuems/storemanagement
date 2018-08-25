import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';

class ProductCategoryList extends Component {
  render() {
    return (
      <Container className="content-body">
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
                      value={true}
                      onToggle={() => {}} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductCategoryList;
