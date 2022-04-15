import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";

const Wikipedia = () => {
  const { state } = useLocation();
  const { foodName } = state;

  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=1&explaintext&origin=*&titles=" +
    foodName;

  const [info, setInfo] = useState([]);
  let text;

  useEffect(() => {
    const findInfo = async () => {
      let post = await axios.get(url);
      setInfo(post.data);
    };
    findInfo();
  }, [url]);

  if (Object.keys(info).length > 0) {
    let id;
    for (const property in info.query.pages) {
      id = property;
    }
    text = info.query.pages[id].extract;
  }

  return (
    <div className="wikipediaPage">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/user">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="wikipediaTitle">{foodName}</h2>
      <p className="wikipediaParagraph">{text}</p>
    </div>
  );
};

export default Wikipedia;
