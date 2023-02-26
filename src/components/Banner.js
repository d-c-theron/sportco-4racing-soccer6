import React from "react";

const Banner = ({ item }) => {
  return (
    <li key={item.PartitionKey}>
      <img src={"data:image/jpeg;base64," + item.base64} alt={item.PartitionKey} style={{ height: "100%", width: "100%" }} />
    </li>
  );
};

export default Banner;
