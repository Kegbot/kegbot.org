import React from "react";
import { Col, Row, Card, Nav, Container } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const GettingStartedPage = () => (
  <Layout>
    <SEO title="Getting started building a Kegbot" />
    <Container fluid>
      <Row>
        <Col md={3}></Col>
        <Col>
          <h1>Build a Kegbot</h1>
          <p className="lead">
            This page will get you going build a Kegbot. We'll start by getting
            the software working, then give you pointers for the hardware build.
          </p>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col>
          <p>Coming soon</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default GettingStartedPage;
