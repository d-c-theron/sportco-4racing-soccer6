import React from "react";
import PendingResultMatch from "./PendingResultMatch";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};

const PendingResult = ({ item }) => {
  return (
    <div>
      <div class="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - {item.league_title}
      </div>
      <table class="pooltable">
        <tr>
          <th>Match</th>
          <th>Team A</th>
          <th>Score</th>
          <th>Team B</th>
        </tr>
        {JSON.parse(item.matches).map((match) => (
          <PendingResultMatch item={match} />
        ))}
      </table>
      <div class="panel poolinformation">
        Closing Pool: {item.poolTotal}
        <br />
        Status: PENDING
      </div>
    </div>
  );
};

export default PendingResult;
