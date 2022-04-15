import React from "react";
import Row from "react-bootstrap/Row";
import FoodGrid from "../components/FoodGrid";
import { Button, Nav, Navbar, Container, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { logout, isAuthenticated, isLoading, user } = useAuth0();
  const apiUrl = "http://localhost:8000/user";

  const addUser = async () => {
    const email = user.email;
    const name = user.name;
    const userDetails = { name: name, email: email };
    await axios.post(apiUrl, userDetails);
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isAuthenticated) {
    addUser();
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} className="active" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/user">
                Profile
              </Nav.Link>
            </Nav>
            <Form inline>
              <Button
                variant="danger"
                onClick={() => {
                  logout();
                }}
              >
                LOGOUT
              </Button>
            </Form>
          </Container>
        </Navbar>
        <div className="homePage">
          <div className="landingFoodContainer">
            <h2 className="foodNearYou">Food To Deliver Near You</h2>
            <Row xs={1} md={5}>
              <FoodGrid />
            </Row>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>You are not authorised to access this page!</h1>;
  }
};

export default Home;
