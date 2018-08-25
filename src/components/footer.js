import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Footer = props => (
  <Container id="footer">
    <Row>
      <Col md={2} />
      <Col md={8} className="text-center">
        <a href="/about">
          <FormattedMessage id="sys.about" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="/delivery">
          <FormattedMessage id="sys.delivery" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="/return-policy">
          <FormattedMessage id="sys.returnPolicy" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="/terms">
          <FormattedMessage id="sys.terms" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href="/help">
          <FormattedMessage id="sys.help" />
        </a>
      </Col>
      <Col md={2} />
    </Row><br />
    <div className="text-center copyright">
      <span>Copyright &copy; 2018</span>&nbsp;&nbsp;
      <span>Creator: <a href="https://github.com/ccwukong">Nick Chen</a></span>
    </div>
  </Container>
);

export default Footer;
