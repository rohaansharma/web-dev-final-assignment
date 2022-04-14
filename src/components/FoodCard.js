import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function FoodCard({
  id,
  url,
  name,
  pickupAddress,
  deliveryAddress,
  deliveryStatus,
}) {
  const { isAuthenticated, user } = useAuth0();
  const [status, setStatus] = useState(deliveryStatus);

  const deliver = () => {
    const markDelivered = async () => {
      const email = user.email;
      const orderDetails = { orderId: id, userEmailId: email };
      await axios.patch("http://localhost:8000/order/" + id);
      await axios.post("http://localhost:8000/history", orderDetails);
    };
    markDelivered();
    setStatus(true);
  };

  return (
    <Card border="dark" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Pickup Address : {pickupAddress}</Card.Text>
        <Card.Text>Delivery Address : {deliveryAddress}</Card.Text>
        {isAuthenticated && !status && (
          <Button variant="primary" onClick={() => deliver()}>
            DELIVER
          </Button>
        )}
        {isAuthenticated && status && (
          <Button variant="success">DELIVERED</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
