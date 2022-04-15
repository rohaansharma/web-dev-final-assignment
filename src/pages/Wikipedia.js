import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Wikipedia = () => {
  const { state } = useLocation();
  const { foodName } = state;

  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=1&explaintext&origin=*&titles=" +
    foodName;

  const [info, setInfo] = useState([]);
  let text;

  useEffect(() => {
    const findInfo = async () => {
      let post = await axios.get(url);
      setInfo(post.data);
    };
    findInfo();
  }, [url]);

  if (Object.keys(info).length > 0) {
    let id;
    for (const property in info.query.pages) {
      id = property;
    }
    text = info.query.pages[id].extract;
  }

  return (
    <div className="wikipediaPage">
      <h2 className="wikipediaTitle">{foodName}</h2>
      <p className="wikipediaParagraph">{text}</p>
    </div>
  );
};

export default Wikipedia;
