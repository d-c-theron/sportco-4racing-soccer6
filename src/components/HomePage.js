import React from "react";
import PoolsWidget from "./PoolsWidget";
import ArticlesElement from "./ArticlesElement";

const HomePage = () => {
  return (
    <div>
      <PoolsWidget />
      <ArticlesElement />
      <div className="row third">
        <div>
          <a href="https://aztabstorage.blob.core.windows.net/tabonline-blob/FieldsPDF/SportsExpress/SportsExpress.pdf">
            <img alt="Sports Express" src="/images/Sports_Express.jpg" style={{ width: "100%", height: "10%" }} />
          </a>
          <br />
          <br />
        </div>
      </div>
      <div className="row fourth">
        <div className="large-6 columns smallpaddingright">
          <div className="sectionheader nospace">General Info</div>
          <div className="flex-video">
            <iframe width={252} height={206} frameBorder={0} src="https://www.youtube.com/embed/2sWEJb_6jZE?rel=0" title="General Info"></iframe>
          </div>
        </div>
        <div className="large-6 columns smallpaddingleft">
          <div className="sectionheader nospace">PROMO</div>
          <div className="flex-video">
            <iframe width={252} height={206} frameBorder={0} src="https://www.youtube.com/embed/WjWXNPK0G_Y?rel=0" title="General Info"></iframe>
          </div>
        </div>
      </div>
      <div className="large-4 columns" style={{ paddingLeft: "3px", paddingRight: "0" }}></div>
    </div>
  );
};

export default HomePage;
