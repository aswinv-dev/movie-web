import React, { useState } from "react";
import { Alert, Button, Card, Container, Form, Row } from "react-bootstrap";
import useForm from "../../utils/hooks/useForm";
import axios from "axios";

const CreateMovie = () => {
  const handleData = () => {
    const finalPayload = { ...data, cast: data.cast.split(",") };
    axios
      .post("http://localhost:8000/movie", {
        ...finalPayload,
      })
      .then(function (response: any) {
        if (response.status === 200) {
          setShow(true);
        }
        console.log("Res : ", response);
      })
      .catch(function (error: any) {
        console.log("Error: ", error);
      });
  };
  const [show, setShow] = useState(false);

  const [data, onChangeHandler, onSubmitHandler] = useForm(handleData);

  return (
    <>
      <h3 style={{ color: "#ff4a55", fontWeight: "700" }}>Create Movie</h3>
      <Row>
        <Card style={{ width: "30 rem", padding: "20px", height: "auto" }}>
          <Form onSubmit={onSubmitHandler}>
            <Form.Label>
              Movie Name
              <Form.Control
                name="name"
                type="text"
                value={data.name}
                onChange={onChangeHandler}
                required
                style={{ width: "300px" }}
              />
            </Form.Label>
            <br />
            <Form.Label>
              Image Link
              <Form.Control
                name="image"
                type="text"
                value={data.image}
                onChange={onChangeHandler}
                style={{ width: "300px" }}
              />
            </Form.Label>
            <br />
            <Form.Label>
              Rating
              <Form.Control
                name="rating"
                type="number"
                min="1"
                max="5"
                value={data.rating}
                onChange={onChangeHandler}
                required
                style={{ width: "60px", marginRight: "5px" }}
              />
            </Form.Label>
            <Form.Label>
              Release Date
              <Form.Control
                name="releaseDate"
                type="date"
                value={data.releaseDate}
                onChange={onChangeHandler}
                required
                style={{ width: "235px" }}
              />
            </Form.Label>
            <br />
            <Form.Label>
              Cast
              <Form.Control
                name="cast"
                type="text"
                value={data.cast}
                onChange={onChangeHandler}
                required
                style={{ width: "300px" }}
              />
            </Form.Label>
            <br />
            <small style={{ color: "red", fontSize: "11px" }}>
              Please send the data of cast with comma(",") for example John Doe,
              Mark{" "}
            </small>
            <br />
            <Form.Label>
              Genre
              <Form.Control
                name="genre"
                type="text"
                value={data.genre}
                onChange={onChangeHandler}
                required
                style={{ width: "300px" }}
              />
            </Form.Label>
            <br />
            <Button style={{ backgroundColor: "#ff4a55" }} type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Alert show={show} variant="success">
          <Alert.Heading>Hooray!!!!! your movie is added</Alert.Heading>
          <p>Your Movie will be displayed on the Home page in few seconds</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" style={{ marginRight: "2px" }}>
              <a
                style={{ textDecoration: "none", color: "#368e5d" }}
                href="http://localhost:3000/"
              >
                Check It Out
              </a>
            </Button>
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
      </Row>
    </>
  );
};

export default CreateMovie;
