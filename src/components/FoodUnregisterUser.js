import React from "react";
import Col from "react-bootstrap/Col";
import food from "../images/food.jpg";
import FoodCard from "./FoodCard";

const FoodUnregisterUser = () => {
  let posts = ["", "", "", "", "", ""];
  let items = posts.map((post, index) => {
    return (
      <Col>
        <FoodCard url={food} />
      </Col>
    );
  });
  return items;
};

export default FoodUnregisterUser;
