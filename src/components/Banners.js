import React, { useEffect, useState } from "react";
import Banner from "./Banner";

const Banners = () => {
  const [BannerArray, setBannerArray] = useState([]);
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [ImageIndex, setImageIndex] = useState(0);

  const confirmLoaded = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    (async () => {
      let banner_count = 0;
      let pointer = 0;

      const goToNext = () => {
        const isLastBanner = pointer === banner_count - 1;
        const newIndex = isLastBanner ? 0 : pointer + 1;
        pointer = isLastBanner ? 0 : pointer + 1;
        setImageIndex(newIndex);
      };

      const loadBanners = async () => {
        const banners = (await (await fetch(`/api/GetBanners`)).json()).value;
        let temp = [];
        for (const banner of banners) {
          temp.push(banner);
          banner_count++;
        }
        setBannerArray(temp);
        console.log("loaded new length", banner_count);
      };

      loadBanners();
      const intervalId = setInterval(() => {
        if (banner_count > 1) {
          goToNext();
        }
      }, 5000);
      return () => clearInterval(intervalId);
    })();
  }, []);

  return (
    <div className="row second">
      <div className="large-12 columns">
        {ImageLoaded ? null : (
          <div
            style={{
              background: "#d7e5d7",
              height: "135px",
              width: "773px",
            }}
          />
        )}
        {BannerArray.map((item, index) => (
          <Banner key={item.name} index={index} imageIndex={ImageIndex} item={item} imageLoaded={ImageLoaded} confirmLoaded={confirmLoaded} />
        ))}
      </div>
    </div>
  );
};

export default Banners;
