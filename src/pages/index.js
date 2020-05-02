import * as typicons from "@styled-icons/typicons";
import { Link } from "gatsby";
import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.scss";
import { Android, RaspberryPi } from "@styled-icons/fa-brands";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron className="main-jumbotron">
      <h1>Kegbot: The Smart Beer Keg Tracker</h1>
      <p>
        Kegbot is a <b>free, open-source</b> software and hardware system to
        build an intelligent beer or beverage keg monitor.
      </p>
    </Jumbotron>
    <Container>
      <div className="features-section" name="features">
        <Row>
          <Col>
            <h2>Features</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <typicons.ChartBarOutline className="icon" />
            <h3>Keg Monitoring</h3>
            <p>
              Always know how much is left in your kegs, with a detailed history
              of pours and a built-in keg and beverage management database.
            </p>
          </Col>
          <Col md={4}>
            <typicons.GroupOutline className="icon" />
            <h3>Pour Tracking</h3>
            <p>
              Record detailed history of pours. Optionally, add and manage user
              accounts to keep individual records and statistics on usage.
            </p>
          </Col>
          <Col md={4}>
            <typicons.PuzzleOutline className="icon" />
            <h3>Extendable</h3>
            <p>
              Kegbot is a community-built, community supported project. Want to
              integrate Kegbot with something else or add a new feature? The
              code is free for you to use and extend.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Android className="icon" />
            <h3>Android Tablet App</h3>
            <p>
              Use the free Android tablet app to show keg status and
              statistics, right at your taps. It can also take pictures
              as you pour.
            </p>
          </Col>
          <Col md={4}>
            <RaspberryPi className="icon" />
            <h3>Raspberry Pi Friendly</h3>
            <p>
              Kegbot works great with Raspberry Pi. You can use your Pi as a
              controller, or just run the server part alone.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
    <Container fluid className="components" name="components">
      <Row>
        <Col md={4}>
          <h2>Components</h2>
        </Col>
        <Col>
          <div className="component">
            <h2>Kegbot Server</h2>
            <p>
              Kegbot Server is the brains of every Kegbot system. It manages the
              Kegbot database, including all kegs, beverages, pours, and users.
            </p>
            <p>
              Kegbot Server also includes a built-in web interface for browsing
              your Kegbot's data, showing current levels, recent activity, and
              system statistics. You can use this server just for yourself, or
              publish it on the web.
            </p>
            <p>
              Kegbot Server runs on any system supporting Docker, including
              Linux, MacOS, Raspberry Pi, and Heroku.
            </p>
            <div className="release-info">
              <p>
                <b>Latest Release</b>: 1.3.0 (May 2, 2020)
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://kegbot-server.readthedocs.io/en/latest/"
                >
                  Documentation
                </a>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Kegbot/kegbot-server"
                >
                  Source code
                </a>
              </p>
            </div>
          </div>

          <div className="component">
            <h2>Kegbot Android App</h2>
            <p>
              The Kegbot Android App lets you present a tablet interface to your
              system right next to your taps. It shows current system status and
              realtime pouring information.
            </p>
            <p>
              The Kegbot Android App is{" "}
              <a href="https://play.google.com/store/apps/details?id=org.kegbot.app">
                published in the Google Play store
              </a>
              .
            </p>

            <div className="release-info">
              <p>
                <b>Latest Release</b>: 1.0.0b24 (June 20, 2014)
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Kegbot/kegbot-android"
                >
                  Source code
                </a>
              </p>
            </div>
          </div>

          <div className="component">
            <h2>Kegboard Arduino Firmware</h2>
            <p>
              The Kegboard Arduino Firmware lets you turn an Arduino device into
              a Kegbot-compatible USB flow sensor. Do-it-yourself plans and
              diagrams show you how to build.
            </p>

            <div className="release-info">
              <p>
                <b>Latest Release</b>: v18 (May 14, 2014)
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://github.com/Kegbot/kegboard"
                >
                  Source code
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className="next-steps">
      <Row>
        <Col>
          <h2>Next Steps</h2>
          <p className="lead">
            Ready to get started building? Visit our getting started guide. Have
            questions or not sure Kegbot is for you? Visit our community forum.
          </p>
          <p>
            <Link to={`/getting-started`} className="btn btn-lg btn-success">
              Get started &raquo;
            </Link>
            <a href="https://forum.kegbot.org" className="btn btn-lg btn-info">
              Community forum &raquo;
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
