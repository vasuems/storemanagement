import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FiUser, FiLock } from 'react-icons/fi';
import { LoginForm } from './forms';
import Footer from '../components/footer';

class Home extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <Col sm={6} md={3}>
            <p id="login-site-name">
              <FormattedMessage id="site.name" />
            </p>
            <LoginForm />
            <br />
            <Card>
              <CardHeader>Demo account</CardHeader>
              <CardBody>
                <FiUser />:&nbsp;&nbsp;test@test.com<br />
                <FiLock />:&nbsp;&nbsp;123
              </CardBody>
            </Card>
          </Col>
        </div><br />
        <Footer style={{ flex: 0.1 }} />
      </div>
    );
  }
}

export default Home;