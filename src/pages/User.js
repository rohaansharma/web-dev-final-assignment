import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Navbar, Row, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserGrid from "../components/UserGrid";

const User = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  if (!isAuthenticated) {
    return <h1>You are not authorised to access this page!</h1>;
  } else {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="active" to="/user">
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
