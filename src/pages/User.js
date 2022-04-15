import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Navbar, Row, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserGrid from "../components/UserGrid";

const User = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <h1>You are not authorised to access this page!</h1>;
  } else {
    return (
      <div>
        <Button
          variant="danger"
          id="logOutButton"
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </Button>
        <Button
          className="homeButton"
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </Button>

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="userInfo">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="ordersDelivered">
          <div className="landingFoodContainer">
            <h2>Orders Delivered</h2>
            <Row xs={1} md={5}>
              <UserGrid email={user.email} />
            </Row>
          </div>
        </div>
      </div>
    );
  }
};

export default User;
