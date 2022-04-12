import React from "react";
import Row from "react-bootstrap/Row";
import FoodGrid from "../components/FoodGrid";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isAuthenticated) {
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
          className="userIcon"
          onClick={() => {
            navigate("/user");
          }}
        >
          <FaUser size={23} />
        </Button>

        <div className="landingFoodContainer">
          <h2 className="foodNearYou">Food To Deliver Near You</h2>
          <Row xs={1} md={3} className="g-3">
            <FoodGrid />
          </Row>
        </div>
      </div>
    );
  } else {
    return <h1>You are not authorised to access this page!</h1>;
  }
};

export default Home;
