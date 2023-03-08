import React, { useEffect, useState } from "react";
import Banner from "./Banner";

const Banners = () => {
  const [BannerArray, setBannerArray] = useState([]);
  const [BannerVolume, setBannerVolume] = useState(-1);

  const loadBanners = async () => {
    const banners = (await (await fetch(`/api/GetBanners`)).json()).value;
    let temp = [];
    let count = 0;
    for (const banner of banners) {
      count++;
      temp.push(banner);
    }
    setBannerVolume(count);
    setBannerArray(temp);
  };

  useEffect(() => {
    (async () => {
      loadBanners();
    })();
  }, []);

  return (
    <div className="row second">
      <div className="large-12 columns">
        <div id="carryover-slider">
          <ul className="bjqs">
            {BannerArray.map((item) => (
              <Banner key={item.name} item={item} banner_volume={BannerVolume} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banners;
