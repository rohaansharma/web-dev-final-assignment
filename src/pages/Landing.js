import React from "react";
import food from "../images/food.jpg";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FoodUnregisterUser from "../components/FoodUnregisterUser";

function Landing() {
  return (
    <div className="landing">
      <img className="foodImage" src={food} alt="food" />
      <h2 className="imageText">Food Delivery Volunteer Website</h2>
      <Button variant="light" id="signInButton">
        Sign In
      </Button>
      <Button variant="light" id="signUpButton">
        Sign Up
      </Button>

      <div className="landingFoodContainer">
        <h2 className="foodNearYou">Food To Deliver Near You</h2>
        <Row xs={1} md={3} className="g-3">
          <FoodUnregisterUser />
        </Row>
      </div>
      <h3 className="signInText">Sign in to see more food to be delivered !</h3>
    </div>
  );
}

export default Landing;
