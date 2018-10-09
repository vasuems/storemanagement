import React from 'react';
import { Col, Form, Input, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Footer from '../components/footer';

const Home = () => (
  <div className="login-page">
    <div className="login-box">      
      <Col md={3}>
        <p id="login-site-name"><FormattedMessage id="sys.siteName" /></p>
        <Form id="login-form">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input type="password" name="password" id="password" placeholder="Password" />      
          <Button block><FormattedMessage id="sys.signin" /></Button>
          <Button color="link"><FormattedMessage id="sys.forgotPwd" /></Button>
        </Form>
      </Col>      
    </div>
    <Footer style={{flex: .1}} />
  </div>
);

export default Home;
