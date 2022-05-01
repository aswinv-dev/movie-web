import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import EditMovie from "../EditMovie";

const Movie = (props: any, refresh: any) => {
  const onDelete = () => {
    const { _id } = props;
    axios.delete(`http://localhost:8000/movie/${_id}`).then((res) => {
      if (res.status == 200) refresh();
    });
  };

  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);

  const option = { show: show, setShow: setShow, data: props };

  return (
    <>
      {<EditMovie {...option} refresh={refresh} />}
      {
        <span style={{ display: "inline-flex" }}>
          <Card
            style={{
              borderRadius: "5px",
              margin: "10px",
              width: "200px",
              height: "600px",
            }}
          >
            <Card.Img
              style={{ maxHeight: "200px" }}
              variant="top"
              src={props.image}
            />
            <Card.Body>
              <Card.Text>
                <h5>{props.name}</h5>
                <hr />
              </Card.Text>
              <div>Rating: {props.rating}/5</div>
              Genre: {props.genre}
              <div>
                Cast
                <br />
                <div style={{ overflow: "auto", height: "75px" }}>
                  {props.cast.map((cast: any): any => {
                    return (
                      <div
                        style={{
                          backgroundColor: "lightBlue",
                          border: "2px solid blue",
                          marginRight: "2px",
                          marginTop: "5px",
                          padding: "2px",
                          color: "blue",
                          borderRadius: "5px",
                        }}
                      >
                        {cast}
                      </div>
                    );
                  })}
                </div>
              </div>
              <br />
              Release Date
              <br />
              {props.releaseDate.split("T")[0]}
              <br />
              <Button
                onClick={handleShow}
                variant="info"
                style={{ marginLeft: "5px" }}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button
                onClick={onDelete}
                variant="danger"
                style={{ marginLeft: "5px" }}
              >
                <i className="bi bi-trash-fill"></i>
              </Button>
            </Card.Body>
          </Card>
        </span>
      }
    </>
  );
};

export default Movie;
