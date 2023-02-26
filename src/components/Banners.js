import React from "react";
import Banner from "./Banner";

const Banners = ({ banner_array }) => {
  return (
    <div className="row second">
      <div className="large-12 columns">
        <div id="carryover-slider">
          <ul className="bjqs">
            {banner_array.map((item) => (
              <Banner key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banners;
