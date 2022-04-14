import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import FoodCard from "./FoodCard";
import axios from "axios";

const FoodGrid = ({ unregister }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const findPosts = async () => {
      let post = await axios.get(" http://localhost:8000/order");
      setPosts(post.data);
    };
    findPosts();
  }, []);

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
  if (unregister) {
    return items.slice(0, 9);
  } else {
    return items;
  }
};

export default FoodGrid;
