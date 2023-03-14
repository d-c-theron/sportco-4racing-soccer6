import React, { useEffect, useState } from "react";
import S6Result from "./S6Result";
import S10Result from "./S10Result";
import S13Result from "./S13Result";
import S4Result from "./S4Result";
import S13XResult from "./S13XResult";
import MegastrikeResult from "./MegastrikeResult";

const ResultsPage = ({ pool_id }) => {
  const [Results, setResults] = useState([]);
  const [PageName, setPageName] = useState("");

  const renderResultType = (item) => {
    switch (pool_id) {
      case 6:
        return <S6Result item={item} />;
      case 10:
        return <S10Result item={item} />;
      case 13:
        return <S13Result item={item} />;
      case 4:
        return <S4Result item={item} />;
      case 16:
        return <S13XResult item={item} />;
      case 12:
        return <MegastrikeResult item={item} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    (async () => {
      const loadResults = async () => {
        let page_name = "";
        switch (pool_id) {
          case 6:
            page_name = "Results and Payouts - Soccer 6";
            break;
          case 10:
            page_name = "Results and Payouts - Soccer 10";
            break;
          case 13:
            page_name = "Results and Payouts - Soccer 13";
            break;
          case 4:
            page_name = "Results and Payouts - Soccer 4";
            break;
          case 16:
            page_name = "Results and Payouts - Soccer Any 13 Xtra";
            break;
          case 12:
            page_name = "Results and Payouts - MegaStrike 10";
            break;
          default:
            page_name = "Error ";
        }
        const results = (await (await fetch(`/api/GetResults/${pool_id}`)).json()).value;
        const temp = [];
        for (const result of results) {
          temp.push(result);
        }
        temp.reverse();
        setResults(temp);
        setPageName(page_name);
      };
      loadResults();
    })();
  }, [pool_id]);

  return (
    <div class="row second">
      <div class="large-12 columns">
        <h1>{PageName}</h1>
        {Results.map((item) => renderResultType(item))}
      </div>
    </div>
  );
};

export default ResultsPage;
