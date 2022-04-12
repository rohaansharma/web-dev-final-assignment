import React from "react";
import Row from "react-bootstrap/Row";
import FoodGrid from "../components/FoodGrid";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { isAuthenticated, logout } = useAuth0();
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
        <div className="userInfo">
          <p>Name: XYZ</p>
          <p>Email: email</p>
        </div>
        <div className="ordersDelivered">
          <div className="landingFoodContainer">
            <h2>Orders Delivered</h2>
            <Row xs={1} md={3} className="g-3">
              <FoodGrid />
            </Row>
          </div>
        </div>
      </div>
    );
  }
};

export default User;
