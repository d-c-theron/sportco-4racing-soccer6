import React from "react";

const pick_result_colour = (result) => {
  if (result === "W") {
    return "round radius label success";
  } else if (result === "D") {
    return "round radius label warning";
  } else if (result === "L") {
    return "round radius label alert";
  } else {
    return "round radius label secondary";
  }
};

const manage_date_format = (kickoff_string) => {
  if (kickoff_string.includes(" ")) {
    const regexDate = /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2})/;
    const match = kickoff_string.match(regexDate);
    let d = new Date(match[1]);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()] + ", " + match[2];
  } else {
    return `${kickoff_string} `;
  }
};

const MatchSummaryWide = ({ item, pool_title }) => {
  return (
    <tr>
      <td className="bold">{"M" + item.mnum}</td>
      <td>
        <span className="bold">{item.teamA}</span>
        <br />
        {pool_title.startsWith("Megastrike") ? null : (
          <div>
            <span className={pick_result_colour(item.a1)}> {item.a1} </span>&nbsp;
            <span className={pick_result_colour(item.a2)}> {item.a2} </span>&nbsp;
            <span className={pick_result_colour(item.a3)}> {item.a3} </span>&nbsp;
          </div>
        )}
      </td>
      <td>
        <center>
          <span className="bold">{manage_date_format(item.ko)}</span>
          <br />
          <a style={{ color: "#001489" }} href={"/h2h/" + item.id}>
            View H2H
          </a>
        </center>
      </td>
      <td className="bold righttext">
        {item.teamB} <br />
        {pool_title.startsWith("Megastrike") ? null : (
          <div>
            <span className={pick_result_colour(item.b1)}> {item.b1} </span>&nbsp;
            <span className={pick_result_colour(item.b2)}> {item.b2} </span>&nbsp;
            <span className={pick_result_colour(item.b3)}> {item.b3} </span>&nbsp;
          </div>
        )}
      </td>
    </tr>
  );
};

export default MatchSummaryWide;
