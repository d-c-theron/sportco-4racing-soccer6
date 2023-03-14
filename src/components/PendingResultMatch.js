import React from "react";

const PendingResultMatch = ({ item }) => {
  return (
    <tr>
      <td class="bold">{"M" + item.mnum}</td>
      <td>{item.teamA}</td>
      <td>&nbsp;</td>
      <td class="righttext">{item.teamB}</td>
    </tr>
  );
};

export default PendingResultMatch;
