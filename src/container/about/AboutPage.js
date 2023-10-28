import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutPic from "../../images/course01.jpeg";
// import card from "../..?/images/card.png";

class AboutPage extends Component {
  render() {
    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>About</h1>
              <p>
                Home / <span style={{ color: "brown" }}>About</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col className="mx-auto px-lg-5 text-left mt-5 mb-5">
              <h1>Overview</h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              {/* <img src={card}/> */}
              <p className="mt-3">
                AIZZA COLLEGE
                OF ENGINEERING AND TECHNOLOGY
                Mulkalla, Mdl: Hazipur, Dist: Mancherial, T.S.
                (A Musilm Minority Instituion)
                Approved by AICTE, New Delhi, Affilated to Kakatiya University Warangal) & SETET, HYD, T.S.
                S
                Super
                94
              </p>
              <p className="mt-3">
              AIZZA CAMPUS
              ONLY COLLEGE FOR ENGINEERING & MANAGEMENT
              PROFESSIONALS IN" ERSTWHILE ADILABAD DISTRICT
              NOW WE ARE AFFILIATED WITH
              KAKATIYA UNIVERSITY, WARANGAL
              K
              SAILENT FEATURES OF OUR COLLEGE:
              ◆ Well experienced and highly qualified faculty
              ◆ Our Students Placed in MNC's like WIPRO, INFOSYS
              Estd: 1999
              SATYAM, CTS, IBM, HCL, ARMY
              </p>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#E0E0E0", color: "white" }}>
            <Col xs={10} lg={8} md={6} className="mx-auto px-lg-5 my-5">
              <h1 className="text-capitalize">
                <strong className="banner-title">Mission</strong>
              </h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
               The academy activites of the department
                emphasizes deep understanding
                of fundamental principles, development
                creative ability to handle the challenges"
                Achieve your dreams
                with our Aizza Streams
                Brook Time
                2000 DEA
                MUJAHID ALAM KHAN
                Hond Joint Secretary
                RD Pared
                <br />
                Our Vision:
                  To be a leading institute with best quality of
                  technical education, to get breakthrough
                  environment for professional education and research.
                  Lab
              </p>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto px-lg-5 my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image
                  src={aboutPic}
                  fluid
                  style={{ border: "1px solid brown", padding: "5px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutPage;
