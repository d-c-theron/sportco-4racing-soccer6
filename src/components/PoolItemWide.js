import React from "react";
import MatchSummaryWide from "./MatchSummaryWide";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};
const getTipsPage = (league_title) => {
  if (league_title.startsWith("S6 ")) {
    return "soccer-6";
  } else if (league_title.startsWith("S10 ")) {
    return "soccer-10";
  } else if (league_title.startsWith("S13 ")) {
    return "soccer-13";
  } else if (league_title.startsWith("S4 ")) {
    return "soccer-4";
  } else if (league_title.startsWith("S13X ")) {
    return "soccer-13-extra";
  } else {
    return "#";
  }
};
const manage_closing_time_error = (programDate, kickOffTime, PartitionKey, RowKey) => {
  if (PartitionKey === "ErrorPart" && RowKey === "ErrorRow") {
    return "Sun 1 Dec 15:30";
  } else {
    return getPrettyDate(programDate) + " " + kickOffTime;
  }
};

const PoolItemWide = ({ item }) => {
  return (
    <div>
      <div className="pooldateindicator4R">
        {getPrettyDate(item.programDate)} - {item.PartitionKey}
      </div>
      <table className="pooltable">
        <tbody>
          <tr>
            <th>Match</th>
            <th>Team A</th>
            <th className="centertext">v</th>
            <th className="righttext">Team B</th>
          </tr>
          {JSON.parse(item.matches).map((match) => (
            <MatchSummaryWide item={match} pool_title={item.PartitionKey} />
          ))}
        </tbody>
      </table>
      <div className="panel poolinformation">
        Betting Opens: {getPrettyDate(item.poolOpenDate)}
        <br />
        Closes: {manage_closing_time_error(item.programDate, item.kickOffTime)}
        <br />
        Current Pool: {item.poolTotal}
        <br />
        Status: {item.poolStatus}. Pool Code {item.programCode}
        <br />
        {item.poolStatus === "OPEN" ? (
          <a
            href={"https://www.tab4racing.com/tabs/soccer?event=soccer&code=" + item.programCode}
            className="button button4R tiny right betnowbutton"
            target="_blank"
            rel="noopener noreferrer"
          >
            BET NOW
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PoolItemWide;
