import React from "react";
import MatchSummary from "./MatchSummary";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
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
    </div>
  );
};

export default PoolItem;
