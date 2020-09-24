/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim & Om & Two Doms

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

import RadarChart from "../RadarChart"
import LineChart from "../LineChart"

import { Popover, Pane, Button as EvergreenButton, Text } from 'evergreen-ui'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      items: []
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("/getUnit", requestOptions)
      .then(response => response.json())
      .then((json) => {
        let temp_items = json.week[0].questions.improvements[0];

        this.setState({ items: temp_items })
      })
      .catch(error => console.log('error', error))
  }

  render() {
    let items = this.state.items

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="text-uppercase beFknWhite ls-1 mb-1" style={{ color: "#ffffff" }}>
                        Overview
                      </h3>
                    </div>
                    <div className="col-auto">
                      <Popover
                        content={
                          <Pane
                            width={300}
                            height={80}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                          >
                            <h6 style={{ fontSize: "12px" }}>Outward values mean that there have
                              <br />
                              been more positive responses from students.
                              <br />
                              In general the larger the area the better.
                            </h6>
                          </Pane>
                        }
                      >
                        <EvergreenButton> ?</EvergreenButton>
                      </Popover>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <RadarChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="text-uppercase text-muted ls-1 mb-1">
                        Survey Responses
                      </h3>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody style={{ height: "400px" }}>
                  <Table className="align-items-center table-flush" responsive>
                    <tbody style={{ overflow: "hidden" }}>
                      {/* {items.map(item => (
                        <tr>
                          <td>
                            {item}
                          </td>
                        </tr>
                      ))} */}
                      <tr>
                        <td>Explanation is very thorough and aids my understanding, keep up <br /> the great work!</td>
                      </tr>
                      <tr>
                        <td>Needs more worked examples, I'm quite a visual learner and the <br /> theory is quite difficult to absorb.</td>
                      </tr>
                      <tr>
                        <td>I think the amount of work is spot on.</td>
                      </tr>
                      <tr>
                        <td>Content is ok, the workload is just right however</td>
                      </tr>
                      <tr>
                        <td>Finding the breakouts very beneficial toward my understanding.</td>
                      </tr>
                      <tr>
                        <td>I need more practice questions.</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-gradient-blue shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="text-uppercase beFknWhite ls-1 mb-1" style={{ color: "#ffffff" }}>
                        Attendance Survey Responses Over Weeks
                      </h3>

                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <LineChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
