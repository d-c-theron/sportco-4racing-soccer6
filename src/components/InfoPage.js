import React from "react";
import InfoAboutUs from "./InfoAboutUs";
import InfoContactUs from "./InfoContactUs";
import InfoRules from "./InfoRules";

const InfoPage = ({ page }) => {
  const renderInfoType = (page) => {
    switch (page) {
      case "about-us":
        return <InfoAboutUs />;
      case "contact-us":
        return <InfoContactUs />;
      case "rules":
        return <InfoRules />;
      default:
        return null;
    }
  };

  const renderPageName = (page) => {
    switch (page) {
      case "about-us":
        return "About Us";
      case "contact-us":
        return "Contact Us by Email or Phone";
      case "rules":
        return "CHAPTER 6 - SOCCER";
      default:
        return null;
    }
  };

  return (
    <div className="row second">
      <div className="large-12 columns">
        <h1>{renderPageName(page)}</h1>
        {renderInfoType(page)}
      </div>
    </div>
  );
};

export default InfoPage;
