import React from "react";
import MatchSummary from "./MatchSummary";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};
const manage_closing_time_error = (programDate, kickOffTime, PartitionKey, RowKey) => {
  if (PartitionKey === "ErrorPart" && RowKey === "ErrorRow") {
    return "Sun 1 Dec 15:30";
  } else {
    return getPrettyDate(programDate) + " " + kickOffTime;
  }
};

const PoolItem = ({ item }) => {
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
            <td style={{ textAlign: "center" }}>v</td>
            <th className="righttext">Team B</th>
          </tr>
          {JSON.parse(item.matches).map((match) => (
            <MatchSummary item={match} />
          ))}
        </tbody>
      </table>
      <div class="panel poolinformation">
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

export default PoolItem;
