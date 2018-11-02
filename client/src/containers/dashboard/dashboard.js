import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';
import { FaShoppingCart, FaBoxes, FaTruck, FaUsers } from 'react-icons/fa';
import { fetchDashboardData } from '../../actions';
import { Tile } from '../../components';

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchDashboardData());
  }

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    const data2 = {
      labels: ['January'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [{ x: 10, y: 20, r: 5 }],
        },
      ],
    };
    const data3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    const data4 = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    return (
      <div className="content-body">
        <h3 style={{ marginTop: 70 }}>
          <FormattedMessage id="sys.dashboard" />
        </h3>
        <Row>
          <Col md={3}>
            <Tile 
              title="200 Products"
              backgroundColor="#fcae05"
              icon={<FaShoppingCart color="#fff" size={18} />}
              fontColor="#fff"
            />
          </Col>
          <Col md={3}>
            <Tile 
              title="100 Orders" 
              backgroundColor="#ff4c28"
              icon={<FaBoxes color="#fff" size={18} />}
              fontColor="#fff"
            />
          </Col>
          <Col md={3}>
            <Tile 
              title="2K Customers"
              backgroundColor="#666"
              icon={<FaUsers color="#fff" size={18} />}
              fontColor="#fff"
            />
          </Col>
          <Col md={3}>
            <Tile 
              title="2 Shipments"
              backgroundColor="#12b772"
              icon={<FaTruck color="#fff" size={18} />}
              fontColor="#fff"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6} className="text-center">
            <div className="chart-container">
              <Bar data={data} height={200} />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="chart-container">
              <Bubble data={data2} height={200} />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="chart-container">
              <Line data={data3} height={200} />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="chart-container">
              <Pie data={data4} height={200} />
            </div>
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
