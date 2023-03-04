import React from "react";

const pick_result_colour = (result) => {
  if (result === "W") {
    return { color: "#5da423" };
  } else if (result === "D") {
    return { color: "#2ba6cb" };
  } else {
    return { color: "#c60f13" };
  }
};

const MatchSummary = ({ item }) => {
  return (
    <tr>
      <td className="bold">M1</td>
      <td>{item.teamA}</td>
      <td style={{ textAlign: "center", whiteSpace: "nowrap" }}>
        <a style={{ color: "#001489" }} href={"/h2h/" + item.id}>
          <span className="hide-for-small" style={pick_result_colour(item.a1)}>
            ⬤
          </span>
          <span className="hide-for-small" style={pick_result_colour(item.a2)}>
            ⬤
          </span>
          <span className="hide-for-small" style={pick_result_colour(item.a3)}>
            ⬤
          </span>
          {item.ko}
          <span className="hide-for-small" style={pick_result_colour(item.b1)}>
            ⬤
          </span>
          <span className="hide-for-small" style={pick_result_colour(item.b2)}>
            ⬤
          </span>
          <span className="hide-for-small" style={pick_result_colour(item.b3)}>
            ⬤
          </span>
        </a>
      </td>
      <td className="righttext">{item.teamB}</td>
    </tr>
  );
};

export default MatchSummary;
