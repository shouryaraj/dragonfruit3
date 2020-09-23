/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ratingboxes from "assets/img/brand/ratingboxes.png";
import radarchart from "assets/img/brand/radarchart.png";
import studentcomments from "assets/img/brand/studentcomments.png";
import studentattendance from "assets/img/brand/studentattendance.png";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row> */}
            {/* <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader> */}
            {/* <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody> */}
            {/* </Card>
            </Col> */}
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                {/* <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My </h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader> */}
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Average Student ratings
                    </h6>
                    <div className="pl-lg-4">
                      <img src={ratingboxes} alt="Logo" />

                      <Row>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Little boxes on the top of the dashboard are filled with the average student ratings
                            for each survey measurement for the current week. Percentages are shown below these ratings,
                            which represent the increase/decrease of the current week's rating when compared
                            to the respective rating from the previous week.
                            </label>

                        </FormGroup>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Overview: radar Chart
                    </h6>
                    <div className="pl-lg-4">
                      <img src={radarchart} alt="Logo" />

                      <Row>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Being the main focus of the dashboard, the radar chart shows all the survey measurements
                            in one place, which gives academic staff the ability to gain a good grasp of the student cohort's engagement and understanding
                            of weekly learning content. Moreover, results yielded within different weeks of the teaching semester can be compared against one another or filtered out in just one click on the right-sided icons.
                            </label>

                        </FormGroup>
                      </Row>
                    </div>

                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Student Comments</h6>
                    <div className="pl-lg-4">
                      <img src={studentcomments} alt="Logo" />

                      <Row>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            At the end of each survey, students are encouraged to provide feedback on the current week's
                            learning content. To the right of the radar chart, these comments will be listed.
                            </label>

                        </FormGroup>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">No. of student responses</h6>
                    <div className="pl-lg-4">
                      <img src={studentattendance} alt="Logo" />

                      <Row>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Located towards the bottom of the page, this line graph shows the number of students
                            who have completed the survey in each week. These figures can be used to verify student attendance,
                            and/or aims to give teaching staff an understanding of the sample size in which the results above represent.
                            </label>

                        </FormGroup>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container >
      </>
    );
  }
}

export default Profile;
