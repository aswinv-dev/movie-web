import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";

const EditMovie = (props: any, refresh: any) => {
  const { show, setShow, data } = props;
  const handleClose = () => setShow(false);

  const [value, setValue] = useState({
    cast: data?.cast || "",
    genre: data?.genre || "",
    image: data?.image || "",
    name: data?.name || "",
    rating: data?.rating || "",
    releaseDate: (data?.releaseDate && data.releaseDate.split("T")[0]) || "",
  });

  useEffect(() => {
    show && getData();
  }, [show]);

  const getData = async () => {
    const { _id } = data;
    try {
      let res = await axios({
        url: `http://localhost:8000/movie/${_id}`,
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("res.data", res);
      return setValue(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandler = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: any) => {
    const { _id } = data;
    const cast =
      typeof value.cast == "string" ? value.cast.split(",") : value.cast;
    const finalPayload = { ...value, cast: cast };
    axios
      .patch(`http://localhost:8000/movie/${_id}`, {
        ...finalPayload,
      })
      .then(function (response: any) {
        if (response.status === 200) {
          setShow(false);
          refresh();
        }
        console.log("Res : ", response);
      })
      .catch(function (error: any) {
        console.log("Error: ", error);
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 style={{ color: "#ff4a55", fontWeight: "700" }}>
                Edit Movie
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>
              Movie Name
              <Form.Control
                name="name"
                type="text"
                value={value?.name || ""}
                onChange={onChangeHandler}
                required
                style={{ width: "450px" }}
              />
            </Form.Label>
            <br />
            <Form.Label>
              Image Link
              <Form.Control
                name="image"
                type="text"
                value={value?.image || ""}
                onChange={onChangeHandler}
                style={{ width: "450px" }}
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
                value={value?.rating || ""}
                onChange={onChangeHandler}
                required
                style={{ width: "70px", marginRight: "5px" }}
              />
            </Form.Label>
            <Form.Label>
              Release Date
              <Form.Control
                name="releaseDate"
                type="date"
                value={
                  (data?.releaseDate && data.releaseDate.split("T")[0]) || ""
                }
                onChange={onChangeHandler}
                required
                style={{ width: "375px" }}
              />
            </Form.Label>
            <br />
            <Form.Label>
              Cast
              <Form.Control
                name="cast"
                type="text"
                value={value?.cast || ""}
                onChange={onChangeHandler}
                required
                style={{ width: "450px" }}
              />
            </Form.Label>
            <br />
            <small style={{ color: "red", fontSize: "11px" }}>
              Please send the data of cast with comma(",") for example John Doe,
              Mark Bird
            </small>
            <br />
            <Form.Label>
              Genre
              <Form.Control
                name="genre"
                type="text"
                value={value.genre}
                onChange={onChangeHandler}
                required
                style={{ width: "450px" }}
              />
            </Form.Label>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button style={{ backgroundColor: "#ff4a55" }} type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default EditMovie;
