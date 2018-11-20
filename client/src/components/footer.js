import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <Container id="footer">
    <div className="text-center copyright">
      <span>Copyright &copy; 2018</span>
      &nbsp;&nbsp;
      <span>
        Created by:&nbsp;
        <a href="https://github.com/ccwukong">Nick Chen</a>
      </span>
    </div>
  </Container>
);

export default Footer;
