import React from "react";

const pick_result_colour = (result) => {
  if (result === "W") {
    return { color: "#5da423", letterSpacing: "0.25em" };
  } else if (result === "D") {
    return { color: "#2ba6cb", letterSpacing: "0.25em" };
  } else {
    return { color: "#c60f13", letterSpacing: "0.25em" };
  }
};

const manage_date_format = (kickoff_string) => {
  if (kickoff_string.includes(" ")) {
    const regexDate = /\d{4}-0?(\d{1,2})-0?(\d{1,2}) (\d{2}:\d{2})/;
    const match = kickoff_string.match(regexDate);
    return `${match[2]}/${match[1]} ${match[3]} `;
  } else {
    return `${kickoff_string} `;
  }
};

const MatchSummary = ({ item, pool_title }) => {
  return (
    <tr>
      <td className="bold">{"M" + item.mnum}</td>
      <td>{item.teamA}</td>
      <td style={{ textAlign: "center", whiteSpace: "nowrap" }}>
        <a style={{ color: "#001489" }} href={"/h2h/" + item.id}>
          {pool_title.startsWith("Megastrike")
            ? null
            : [
                <span className="hide-for-small" style={pick_result_colour(item.a1)}>
                  ⬤
                </span>,
                <span className="hide-for-small" style={pick_result_colour(item.a2)}>
                  ⬤
                </span>,
                <span className="hide-for-small" style={pick_result_colour(item.a3)}>
                  ⬤
                </span>,
              ]}
          {manage_date_format(item.ko)}
          {pool_title.startsWith("Megastrike")
            ? null
            : [
                <span className="hide-for-small" style={pick_result_colour(item.b1)}>
                  ⬤
                </span>,
                <span className="hide-for-small" style={pick_result_colour(item.b2)}>
                  ⬤
                </span>,
                <span className="hide-for-small" style={pick_result_colour(item.b3)}>
                  ⬤
                </span>,
              ]}
        </a>
      </td>
      <td className="righttext">{item.teamB}</td>
    </tr>
  );
};

export default MatchSummary;
