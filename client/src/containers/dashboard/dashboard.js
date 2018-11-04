import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Table, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  Line, Pie,
} from 'react-chartjs-2';
import { fetchDashboardData } from '../../actions';
import { FeedItem } from '../../components';

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchDashboardData());
  }

  render() {
    const { weeklySales, categoryProducts } = this.props.data;
    return (
      <div className="content-body">
        <h3 style={{ marginTop: 70 }}>
          <FormattedMessage id="sys.dashboard" />
        </h3>
        <Row style={{marginTop: 15}}>
          <Col md={9}>
            <Row>
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
            <Card body style={{borderTop: '2px solid red', padding: 0}}>
              <CardTitle style={{padding: 10}}><FormattedMessage id="sys.shipToday" /></CardTitle>
              <Table hover>
                <tbody>
                  <tr>
                    <td>#123456</td>
                    <td>John Doe</td>
                  </tr>
                  <tr>
                    <td>#2342343</td>
                    <td>Helen Will</td>
                  </tr>
                  <tr>
                    <td>#22343</td>
                    <td>Jack Lee</td>
                  </tr>
                  <tr>
                    <td>#223423</td>
                    <td>Jack Lee</td>
                  </tr>
                  <tr>
                    <td>#223431</td>
                    <td>Jack Lee</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dashboardReducer.data,
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
