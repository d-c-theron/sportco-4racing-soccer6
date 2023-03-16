import React, { useEffect, useState } from "react";
import S6Result from "./S6Result";
import S10Result from "./S10Result";
import S13Result from "./S13Result";
import S4Result from "./S4Result";
import S13XResult from "./S13XResult";
import MegastrikeResult from "./MegastrikeResult";
import PendingResult from "./PendingResult";

const ResultsPage = ({ pool_id }) => {
  const [Results, setResults] = useState([]);
  const [PendingResults, setPendingResults] = useState([]);
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

  const renderPendingResultType = (item) => {
    switch (pool_id) {
      case 6:
        if (item.league_title.startsWith("S6 ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
      case 10:
        if (item.league_title.startsWith("S10 ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
      case 13:
        if (item.league_title.startsWith("S13 ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
      case 4:
        if (item.league_title.startsWith("S4 ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
      case 16:
        if (item.league_title.startsWith("S13X ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
      case 12:
        if (item.league_title.startsWith("Megastrike ")) {
          return <PendingResult item={item} />;
        } else {
          return null;
        }
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

      const loadPendingResults = async () => {
        const pending_results = (await (await fetch(`/api/GetPendingResults`)).json()).value;
        const temp = [];
        for (const pending_result of pending_results) {
          temp.push(pending_result);
        }
        setPendingResults(temp);
      };

      loadPendingResults();
      loadResults();
    })();
  }, [pool_id]);

  return (
    <div className="row second">
      <div className="large-12 columns">
        <h1>{PageName}</h1>
        {PendingResults.map((item) => renderPendingResultType(item))}
        {Results.map((item) => renderResultType(item))}
      </div>
    </div>
  );
};

export default ResultsPage;
