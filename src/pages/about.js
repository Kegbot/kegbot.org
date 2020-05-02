import React from "react";
import { Col, Row, Card, ListGroup, Container } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>About Kegbot</h1>
          <p>
            Kegbot is a free, open source project, created in 2003 by Mike
            Wakerly. Kegbot is supported today by a community of volunteers and
            enthusiasts.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3>Help &amp; Support</h3>
          <p>
            Kegbot is run by volunteers. We do not offer emailed help or
            support, or any other forms of official support.
          </p>
          <p>
            If you have a question or are looking for help, we recommend you
            visit the <a href="https://forum.kegbot.org">community forum</a> and
            search for the topic you're interested in.
          </p>

          <h3>Contributing</h3>
          <p>
            We're always open to patches, documentation improvements, new ideas,
            and technical contributions! The best way to contribute is to send
            us a pull request on GitHub for the Kegbot project you're modifying.
          </p>
          <p>
            You can also get in touch in the{" "}
            <a href="https://forum.kegbot.org/c/developers/45">
              Developers forum
            </a>
            .
          </p>

          <h3>Purchasing Hardware</h3>
          <p>
            We do not sell anything, including hardware. If someone is offering
            Kegbot hardware, it's likely a kit they've built based on our plans,
            or a misuse of our name.
          </p>
          <p>
            In 2014, Bevbot LLC ran a sucessful Kickstarter campaign, producing
            the <em>Kegboard Pro Mini</em> controller and some related
            accessories. These products are all discontinued.
          </p>

          <h3>Commercial Uses</h3>
          <p>
            We do not recommend, and in any case cannot directly support, use in
            commercial settings like bars, breweries, and restaurants. However,
            you are absolutely free to use Kegbot however you wish under the
            terms of its license.
          </p>

          <h3>License &amp; Copyright</h3>
          <p>
            All Kegbot software is offered under a free and open source license.
            See the <tt>LICENSE.txt</tt> file in each project for more details.
          </p>
          <p>
            Copyright for all Kegbot software is owned and held by its
            contributors. The name "Kegbot" is a trademark, please don't use it
            for other things.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
