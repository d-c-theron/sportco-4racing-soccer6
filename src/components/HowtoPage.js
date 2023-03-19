import React from "react";
import S6Howto from "./S6Howto";
import S10Howto from "./S10Howto";
import S13Howto from "./S13Howto";
import S4Howto from "./S4Howto";
import S13XHowto from "./S13XHowto";
import MegastrikeHowto from "./MegastrikeHowto";

const HowtoPage = ({ pool_id }) => {
  const renderHowtoType = (pool_id) => {
    switch (pool_id) {
      case 6:
        return <S6Howto />;
      case 10:
        return <S10Howto />;
      case 13:
        return <S13Howto />;
      case 4:
        return <S4Howto />;
      case 16:
        return <S13XHowto />;
      case 12:
        return <MegastrikeHowto />;
      default:
        return null;
    }
  };

  const renderPageName = (pool_id) => {
    switch (pool_id) {
      case 6:
          return "How To Play - Soccer 6";
      case 10:
          return "How To Play - Soccer 10";
      case 13:
          return "How To Play - Soccer 13";
      case 4:
          return "How To Play - Soccer 4";
      case 16:
          return "How To Play - Soccer Any 13 Xtra";
      case 12:
          return "How To Play - MegaStrike 10";
      default:
        return null;
    }
  };

  return (
    <div className="row second">
      <div className="large-12 columns">
        <h1>{renderPageName(pool_id)}</h1>
        {renderHowtoType(pool_id)}
      </div>
    </div>
  );
};

export default HowtoPage;
