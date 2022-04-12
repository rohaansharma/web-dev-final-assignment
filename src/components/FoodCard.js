import React from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function FoodCard({ url }) {
  const { isAuthenticated } = useAuth0();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {isAuthenticated && <Button variant="primary">Deliver</Button>}
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
