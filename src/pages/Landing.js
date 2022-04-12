import React, { useEffect } from "react";
import food from "../images/food.jpg";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FoodGrid from "../components/FoodGrid";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/home");
  } else {
    return (
      <div className="landing">
        <img className="foodImage" src={food} alt="food" />
        <h2 className="imageText">Food Delivery Volunteer Website</h2>
        <Button
          variant="light"
          id="signInButton"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          LOGIN
        </Button>

        <div className="landingFoodContainer">
          <h2 className="foodNearYou">Food To Deliver Near You</h2>
          <Row xs={1} md={3} className="g-3">
            <FoodGrid />
          </Row>
        </div>
        <h3 className="signInText">
          Sign in to see more food to be delivered !
        </h3>
      </div>
    );
  }
};

export default Landing;
