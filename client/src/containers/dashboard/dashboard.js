import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardTitle,
  Table,
  Row,
  Col,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { Line, Pie } from 'react-chartjs-2';
import {
  fetchAccount,
  fetchDashboardData,
} from '../../actions';
import {
  FeedItem,
  ShipTodayItem,
  Tile,
} from '../../components';

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchDashboardData());
  }

  onShipTodayItemClick = id => {
    const { history } = this.props;
    history.push(`/orders/${id}`);
  };

  render() {
    const { weeklySales, categoryProducts } = this.props.data;
    return (
      <div className="content-body">
        <h4>
          <FormattedMessage id="sys.dashboard" />
        </h4>
        <Row style={{ marginTop: 15 }}>
          <Col md={9}>
            {/* <Row>
              <Col md={6} className="text-center">
                <div className="chart-container">
                  <Line data={weeklySales} height={200} />
                </div>
              </Col>
              <Col md={6} className="text-center">
                <div className="chart-container">
                  <Pie data={categoryProducts} height={200} />
                </div>
              </Col>
            </Row> */}
            <Row>
              <Col md={4}>
                <Tile
                  title="200 Orders"
                  tileStyle={{ borderRadius: 0, borderTop: '2px solid #888' }}
                  description={<p>$12,877.98<br /><br /></p>}
                />
              </Col>
              <Col md={4}>
                <Tile
                  title="100 Products"
                  tileStyle={{ borderRadius: 0, borderTop: '2px solid #55d0e0' }}
                  description={<p>$8,101.12<br /><br /></p>}
                />
              </Col>
              <Col md={4}>
                <Tile
                  title="50 Shipments"
                  tileStyle={{ borderRadius: 0, borderTop: '2px solid #3bc633' }}
                  description={<p>10 in transit<br />40 in warehouses</p>}
                />
              </Col>
            </Row>

            <FeedItem
              backgroundColor="#fff"
              fontColor="#333"
              title="A new product has been created."
              content="Your collegue John Doe has just created a new product: sdlfladsjf"
              datetime="2018-11-11 11:11:00"
            />
            <FeedItem
              backgroundColor="#fff"
              fontColor="#333"
              title="A new product has been created."
              content="Your collegue John Doe has just created a new product: asdfasdf sdf asdfasd"
              datetime="2018-11-01 11:11:00"
            />
            <FeedItem
              backgroundColor="#fff"
              fontColor="#333"
              title="A new product has been created."
              content="Your collegue John Doe has just created a new product: adsafs sadf asdfasdf sdf asdfasd"
              datetime="2018-10-11 11:11:00"
            />
          </Col>
          <Col md={3}>
            <Card
              body
              style={{
                borderTop: '2px solid red',
                padding: 0,
                borderRadius: 0,
              }}
            >
              <CardTitle style={{ padding: 10 }}>
                <FormattedMessage id="sys.shipToday" />
              </CardTitle>
              <Table hover style={{ marginBottom: 0 }}>
                <tbody>
                  <ShipTodayItem
                    orderId="123456"
                    customerName="John Doe"
                    onClick={this.onShipTodayItemClick}
                  />
                  <ShipTodayItem
                    orderId="2342343"
                    customerName="Helen Will"
                    onClick={this.onShipTodayItemClick}
                  />
                  <ShipTodayItem
                    orderId="22343"
                    customerName="Jack Lee"
                    onClick={this.onShipTodayItemClick}
                  />
                  <ShipTodayItem
                    orderId="223423"
                    customerName="Leo"
                    onClick={this.onShipTodayItemClick}
                  />
                  <ShipTodayItem
                    orderId="223431"
                    customerName="Nick Chen"
                    onClick={this.onShipTodayItemClick}
                  />
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data: state.dashboardReducer.data,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Dashboard));
