import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import college from "../../images/College Logo.png";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <section
        className="about py-5"
        id="about"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Row>
            <Col xs={10} lg={8} md={6} className="mx-auto my-5">
              <h1 className="text-capitalize">
                about the <br />
                <strong className="banner-title">University</strong>
              </h1>
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
                AIZZA CAMPUS
                ONLY COLLEGE FOR ENGINEERING & MANAGEMENT
                PROFESSIONALS IN" ERSTWHILE ADILABAD DISTRICT
                NOW WE ARE AFFILIATED WITH
                KAKATIYA UNIVERSITY, WARANGAL
                K
                SAILENT FEATURES OF OUR COLLEGE:
                ◆ Well experienced and highly qualified faculty
                ◆ Our Students Placed in MNC's like WIPRO, INFOSYS
              </p>
              <a
                href="/about"
                className="btn btn-outline-primary text-uppercase learn-more"
                data-aos="fade-right"
              >
                <Link to="/about">learn more</Link>
                <span>
                  <i
                    style={{ marginLeft: 10 }}
                    className="fas fa-arrow-right"
                  ></i>
                </span>
              </a>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image src={college} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
