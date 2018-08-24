import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Footer = props => (
  <Container>
    <Row>
      <Col md={2} />
      <Col md={8}>
        <Row>
          <Col md={2} className="text-center">
            <a href="/about">
              <FormattedMessage id="sys.about" />
            </a>
          </Col>
          <Col md={2} className="text-center">
            <a href="/delivery">
              <FormattedMessage id="sys.delivery" />
            </a>
          </Col>
          <Col md={4} className="text-center">
            <a href="/return-policy">
              <FormattedMessage id="sys.returnPolicy" />
            </a>
          </Col>
          <Col md={2} className="text-center">
            <a href="/terms">
              <FormattedMessage id="sys.terms" />
            </a>
          </Col>
          <Col md={2} className="text-center">
            <a href="/help">
              <FormattedMessage id="sys.help" />
            </a>
          </Col>
        </Row>
      </Col>
      <Col md={2} />
    </Row>
  </Container>
);

export default Footer;
