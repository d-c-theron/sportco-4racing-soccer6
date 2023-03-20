import React from "react";

const Banner = ({ item, imageLoaded, index, imageIndex, confirmLoaded }) => {
  return (
    <a href={"/pools-and-matches/" + item.pointer}>
      <img
        style={imageLoaded && index === imageIndex ? { display: "inline" } : { display: "none" }}
        src={item.url}
        alt={item.PartitionKey}
        onLoad={confirmLoaded}
      />
    </a>
  );
};

export default Banner;
