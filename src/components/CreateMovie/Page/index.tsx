import React, { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import CreateMovie from "..";
import people from "../../../asset/people.jpg";

const CreateMoviePage = () => {
  return (
    <Container className="createmovie-page">
      <Row style={{ marginTop: "50px" }}>
        <Col
          style={{
            backgroundImage: `url(${people})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginRight: "30px",
          }}
        ></Col>
        <Col>
          <Row>
            <CreateMovie />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMoviePage;
