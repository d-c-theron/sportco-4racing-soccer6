import React from "react";

const Banner = ({ item }) => {
  return (
    <li key={item.PartitionKey}>
      <a href={"/pools-and-matches/" + item.pointer}>
        <img src={"data:image/jpeg;base64," + item.base64} alt={item.PartitionKey} style={{ height: "100%", width: "100%" }} />
      </a>
    </li>
  );
};

export default Banner;
