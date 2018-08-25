import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FaCcPaypal, FaCcStripe, FaBtc } from "react-icons/fa";
import ToggleButton from 'react-toggle-button';

class Payment extends Component {
  render() {
    return (
      <Container className="content-body">
        <h3>
          <FormattedMessage id="sys.payments" />
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
                    <FormattedMessage id="sys.acctNo" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FaCcPaypal size="3em" /></td>
                  <td>your.paypal@example.com</td>
                  <td>
                    <ToggleButton
                      value={true}
                      onToggle={() => {}} />
                  </td>
                </tr>
                <tr>
                  <td><FaCcStripe size="3em" /></td>
                  <td>your.paypal@example.com</td>
                  <td>
                    <ToggleButton
                      value={true}
                      onToggle={() => {}} />
                  </td>
                </tr>
                <tr>
                  <td><FaBtc size="3em" /></td>
                  <td>your.paypal@example.com</td>
                  <td>
                    <ToggleButton
                      value={true}
                      onToggle={() => {}} />
                  </td>
                </tr>
                <tr>
                  <td><img src="https://www.wirecard.com/uploads/tx_neimagefinder/wirecard-logo-white-black-download-72dpi.png" width="60" /></td>
                  <td>000-123456-1</td>
                  <td>
                    <ToggleButton
                      value={false}
                      onToggle={() => {}} />
                  </td>
                </tr>
                <tr>
                  <td>Bank Transfer</td>
                  <td>000-123456-1</td>
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

export default Payment;
