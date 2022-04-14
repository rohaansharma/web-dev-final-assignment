import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import FoodCard from "./FoodCard";
import axios from "axios";

const UserGrid = ({ email }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const findPosts = async (id) => {
      let find = await axios.get(" http://localhost:8000/order/" + id);
      setPosts((oldArray) => [...oldArray, find.data]);
    };
    const findDelivery = async () => {
      let find = await axios.get(" http://localhost:8000/history/" + email);

      for (let i = 0; i < find.data.length; i++) {
        findPosts(find.data[i].orderId);
      }
    };
    findDelivery();
  }, [email]);

  console.log(posts);

  let items = posts.map((post, index) => {
    return (
      <Col key={index}>
        <FoodCard
          id={post.id}
          url={post.orderImageUrl}
          name={post.orderName}
          deliveryAddress={post.deliveryAddress}
          pickupAddress={post.pickupAddress}
          deliveryStatus={post.deliveryStatus}
        />
      </Col>
    );
  });
  if (items.length === 0) {
    return <h3>Nothing yet :)</h3>;
  }
  return items;
};

export default UserGrid;
