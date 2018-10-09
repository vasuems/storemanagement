import React, { Component } from 'react';
import { Col, Form, Input, Button } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import Footer from '../components/footer';

class Home extends Component{
  login = () => {
    window.location.href = '/dashboard';
  }
  render(){
    const { formatMessage } = this.props.intl;
    return(
      <div className="login-page">
        <div className="login-box">      
          <Col sm={6} md={3}>
            <p id="login-site-name"><FormattedMessage id="site.name" /></p>
            <Form id="login-form">
              <Input type="email" name="email" id="email" placeholder={formatMessage({ id: 'sys.email' })} />
              <Input type="password" name="password" id="password" placeholder={formatMessage({ id: 'sys.pwd' })} />      
              <Button block onClick={this.login}><FormattedMessage id="sys.signin" /></Button>
              <br />
              <Button color="link"><FormattedMessage id="sys.forgotPwd" /></Button>
            </Form>
          </Col>      
        </div>
        <Footer style={{flex: .1}} />
      </div>
    );
  }
}

export default injectIntl(Home);
