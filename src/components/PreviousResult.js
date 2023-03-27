import React from "react";

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (match_date) => {
  let d = new Date(match_date);
  return d.getDate() + " " + monthName[d.getMonth()] + ", " + d.getFullYear();
};

const PreviousResult = ({ item, team_a_id, team_b_id }) => {
  return (
    <tr>
      <td>{getPrettyDate(item.match_date)}</td>
      <td>{item.competition}</td>
      {item.winner_home_away === "H" && item.winner_id === team_a_id ? (
        <>
          <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em" }}>{item.home_team}</td>
          <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em", textAlign: "center", whiteSpace: "nowrap" }}>{item.match_score}</td>
          <td style={{ textAlign: "right" }}>{item.away_team}</td>
        </>
      ) : null}
      {item.winner_home_away === "H" && item.winner_id === team_b_id ? (
        <>
          <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em" }}>{item.home_team}</td>
          <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em", textAlign: "center", whiteSpace: "nowrap" }}>{item.match_score}</td>
          <td style={{ textAlign: "right" }}>{item.away_team}</td>
        </>
      ) : null}
      {item.winner_home_away === "A" && item.winner_id === team_a_id ? (
        <>
          <td>{item.home_team}</td>
          <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em", textAlign: "center", whiteSpace: "nowrap" }}>{item.match_score}</td>
          <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em", textAlign: "right" }}>{item.away_team}</td>
        </>
      ) : null}
      {item.winner_home_away === "A" && item.winner_id === team_b_id ? (
        <>
          <td>{item.home_team}</td>
          <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em", textAlign: "center", whiteSpace: "nowrap" }}>{item.match_score}</td>
          <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em", textAlign: "right" }}>{item.away_team}</td>
        </>
      ) : null}
      {item.winner_id === "0" ? (
        <>
          <td>{item.home_team}</td>
          <td style={{ textAlign: "center", whiteSpace: "nowrap", fontWeight: "bold" }}>{item.match_score}</td>
          <td style={{ textAlign: "right" }}>{item.away_team}</td>
        </>
      ) : null}
    </tr>
  );
};

export default PreviousResult;
