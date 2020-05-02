import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>NOT FOUND</h1>
          <p>
            Oops! That page doesn't exist.
          </p>
          <p className="text-muted">
            Looking for help? Try the <em>Discussion Forum</em> link
            at the top.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
