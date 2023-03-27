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

const LatestResult = ({ item }) => {
  return (
    <span
      className={"round radius label " + get_result_style(item.result)}
      dataTooltip
      title={item.opponent + " " + item.match_home_or_away + " " + item.match_score}
      style={{ fontWeight: "700", marginLeft: ".15rem", marginRight: ".15rem", width: "2.2em", textAlign: "center"}}
    >
      {item.result}
    </span>
  );
};

export default LatestResult;
