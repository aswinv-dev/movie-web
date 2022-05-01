import React from "react";
import { Container, Navbar, Image, Nav } from "react-bootstrap";

const TopBar = () => {
  return (
    <div style={{ borderBottom: "4px solid #ff4a55" }}>
      <Navbar sticky="top" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <Nav className="me-auto">
              <Image
                src="https://www.kindpng.com/picc/m/30-300778_transparent-movie-marquee-png-movie-icon-png-flat.png"
                width="50"
                height="50"
              />
              <h1>
                Movie
                <span style={{ color: "#ff4a55", fontWeight: "900" }}>
                  Buff
                </span>
              </h1>
              <div style={{ width: "600px" }}></div>
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/">Home </Nav.Link>
                <span
                  style={{
                    color: "gray",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  |
                </span>
                <Nav.Link href="/create">Create Movie</Nav.Link>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
