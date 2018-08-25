import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';

class Dashboard extends Component {
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
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
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
          data: [{ x: 10, y: 20, r: 5 }]
        }
      ]
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
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    const data4 = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.dashboard" />
        </h3>
        <Row>
          <Col md={6} className="text-center">
            <Bar
              data={data}
              width={100}
              height={200}
              options={{
                maintainAspectRatio: false
              }}
            />
          </Col>
          <Col md={6} className="text-center">
            <Bubble data={data2} />
          </Col>
          <Col md={6} className="text-center">
            <Line data={data3} />
          </Col>
          <Col md={6} className="text-center">
            <Pie data={data4} />
          </Col>
          <Col md={6} className="text-center">
            <Pie data={data4} />
          </Col>
          <Col md={6} className="text-center">
            <Pie data={data4} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
