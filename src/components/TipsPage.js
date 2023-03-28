import React, { useEffect, useState } from "react";
import S6Tips from "./S6Tips";
import S10Tips from "./S10Tips";
import S13Tips from "./S13Tips";
import S4Tips from "./S4Tips";
import S13XTips from "./S13XTips";
import PoolItemWideLoaderLarge from "./PoolItemWideLoaderLarge";

const TipsPage = ({ pool_id }) => {
  const [Tips, setTips] = useState([]);
  const [PageName, setPageName] = useState("");
  const [TipsVolume, setTipsVolume] = useState(-1);

  const renderTipsType = (item) => {
    switch (pool_id) {
      case 6:
        return <S6Tips item={item} />;
      case 10:
        return <S10Tips item={item} />;
      case 13:
        return <S13Tips item={item} />;
      case 4:
        return <S4Tips item={item} />;
      case 16:
        return <S13XTips item={item} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    (async () => {
      const loadTips = async () => {
        let page_name = "";
        switch (pool_id) {
          case 6:
            page_name = "Top Tips - Soccer 6";
            break;
          case 10:
            page_name = "Top Tips - Soccer 10";
            break;
          case 13:
            page_name = "Top Tips - Soccer 13";
            break;
          case 4:
            page_name = "Top Tips - Soccer 4";
            break;
          case 16:
            page_name = "Top Tips - Soccer Any 13 Xtra";
            break;
          default:
            page_name = "Error ";
        }
        const tips = (await (await fetch(`/api/GetTips/${pool_id}`)).json()).value;
        const temp = [];
        for (const tip of tips) {
          temp.push(tip);
        }
        setTips(temp);
        setTipsVolume(temp.length);
        setPageName(page_name);
      };
      loadTips();
    })();
  }, [pool_id]);

  return (
    <div className="row second">
      <div className="large-12 columns">
        <h1>
          {PageName}
          <img src="/images/Mark Gleeson.jpg" alt="Mark Gleeson" width="50" height="76" style={{ float: "right", padding: "2px" }} />
        </h1>
        {TipsVolume === -1 ? (
          <PoolItemWideLoaderLarge />
        ) : TipsVolume === 0 ? (
          <div classNameName="panel">No tips currently available for this pool.</div>
        ) : (
          ""
        )}
        {Tips.map((item) => renderTipsType(item))}
      </div>
    </div>
  );
};

export default TipsPage;
