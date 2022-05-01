import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import Movie from "../Movie";
import axios from "axios";
import "./styles.css";

const MovieDisplayPage = () => {
  const [data, setData] = useState<any>([]);
  const refresh = () => null;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios({
        url: "http://localhost:8000/movie",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Container>
        {data.map((movie: any) => {
          return (
            <span style={{ display: "inline-flex" }}>
              <Movie {...movie} refresh={refresh} />
            </span>
          );
        })}
      </Container>
    </div>
  );
};

export default MovieDisplayPage;
