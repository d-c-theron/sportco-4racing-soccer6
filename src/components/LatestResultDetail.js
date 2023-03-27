import React from "react";

const get_result_style = (result) => {
  if (result === "W") {
    return "success";
  } else if (result === "D") {
    return "warning";
  } else if (result === "L") {
    return "alert";
  } else {
    return "secondary";
  }
};

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (match_date) => {
  let d = new Date(match_date);
  return d.getDate() + " " + monthName[d.getMonth()];
};

const LatestResultDetail = ({ item }) => {
  return (
    <tr>
      <td>{getPrettyDate(item.match_date)}</td>
      <td>{item.opponent}</td>
      <td>{item.match_home_or_away}</td>
      <td>{item.competition}</td>
      <td>
        <span className={"round radius label " + get_result_style(item.result)}>{item.match_score}</span>
      </td>
    </tr>
  );
};

export default LatestResultDetail;
