import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
} from 'reactstrap';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { OrderInfoItem, OrderShippingItem } from '../../components';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { history } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/orders')}
            >
              <FormattedMessage id="sys.orders" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.orderDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row>
            <Col md={12}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    <FormattedMessage id="sys.orderDetails" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    <FormattedMessage id="sys.shipping" />
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab} style={{backgroundColor: '#fff', padding: 15}}>
                <TabPane tabId="1">
                  <Row>
                    <Col md={6}>
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.productName' })}
                        content="Product 1"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.desc' })}
                        content="adsf asdfkajsdlfk jalsdjf alkdjsf lkajsdlk jaslkdjf laksdj lkajsdlfkjasdlkf jaksdjflasdjflajsdlf ajsdlk jfalksdj falkdslk lasdjlfjalskd fjalkdsj flkadjslkfjadlskjfalkds fjkdalsfajdslk jf"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.category' })}
                        content="Kitchen"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.sku' })}
                        content="sku-sdfjaksdjflkasdjf "
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.price' })}
                        content="SGD $100.10"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.qty' })}
                        content="2"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.subTotal' })}
                        content="SGD $200.20"
                      />
                    </Col>
                    <Col md={6}>
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.customerName' })}
                        content="Nick Chen"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.customerContact' })}
                        content="+65-99999999"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.deliveryAddr' })}
                        content="BLK 666, Bugis, Singapore, 100666"
                      />
                      <OrderInfoItem 
                        title={formatMessage({ id: 'sys.billingAddr' })}
                        content="Not provided"
                      />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <OrderShippingItem 
                    courier="Fedex Express"
                    trackingId="asa3djfa123lksdfj23432sdf"
                    datetime="2018-11-11 11:11:00"
                    location="Singapore logistics center"
                    status="Processing"
                    statusColor="green"
                  />
                  <OrderShippingItem 
                    courier="Fedex Express"
                    trackingId="234adsf9asdf31asdf"
                    datetime="2018-11-10 07:10:00"
                    location="Malaysia logistic center"
                    status="Shipped out"
                  />
                  <OrderShippingItem 
                    courier="Fedex Express"
                    trackingId="Not available"
                    datetime="2018-11-08 16:30:00"
                    location="Seller"
                    status="Dispatched"
                  />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default connect(
  null,
  null
)(injectIntl(withRouter(Order)));
