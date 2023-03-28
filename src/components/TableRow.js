import React from "react";
import TeamLogo from "./TeamLogo";

const TableRow = ({ item, previous, team_a_id, team_b_id }) => {
  return (
    <>
      {parseInt(item.position) > previous ? null : (
        <tr>
          <td>&nbsp;</td>
          <td class="hideForSmall">&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td class="hideForSmall">&nbsp;</td>
          <td class="hideForSmall">&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      )}
      {item.team_id !== team_a_id && item.team_id !== team_b_id ? (
        <tr>
          <td style={{ width: "1%", textAlign: "center" }}>{item.position}.</td>
          <td className="hideForSmall" style={{ padding: "1px", width: "34px" }}>
            <TeamLogo id={item.team_id} name={item.team_name} small={true} />
          </td>
          <td>{item.team_name}</td>
          <td className="centertext">{item.played}</td>
          <td className="centertext">{item.won}</td>
          <td className="centertext">{item.drawn}</td>
          <td className="centertext">{item.lost}</td>
          <td className="hideForSmall centertext">{item.goals_for}</td>
          <td className="hideForSmall centertext">{item.goals_against}</td>
          <td className="centertext">{item.points}</td>
        </tr>
      ) : null}
      {item.team_id === team_a_id ? (
        <tr style={{ backgroundColor: "seagreen" }}>
          <td style={{ width: "1%", textAlign: "center", color: "white" }}>{item.position}.</td>
          <td className="hideForSmall" style={{ padding: "1px", width: "34px" }}>
            <TeamLogo id={item.team_id} name={item.team_name} small={true} />
          </td>
          <td style={{ color: "white" }}>{item.team_name}</td>
          <td className="centertext" style={{ color: "white" }}>{item.played}</td>
          <td className="centertext" style={{ color: "white" }}>{item.won}</td>
          <td className="centertext" style={{ color: "white" }}>{item.drawn}</td>
          <td className="centertext" style={{ color: "white" }}>{item.lost}</td>
          <td className="hideForSmall centertext" style={{ color: "white" }}>{item.goals_for}</td>
          <td className="hideForSmall centertext" style={{ color: "white" }}>{item.goals_against}</td>
          <td className="centertext" style={{ color: "white" }}>{item.points}</td>
        </tr>
      ) : null}
      {item.team_id === team_b_id ? (
        <tr style={{ backgroundColor: "royalblue" }}>
          <td style={{ width: "1%", textAlign: "center" }}>{item.position}.</td>
          <td className="hideForSmall" style={{ padding: "1px", width: "34px" }}>
            <TeamLogo id={item.team_id} name={item.team_name} small={true} />
          </td>
          <td style={{ color: "white" }}>{item.team_name}</td>
          <td className="centertext" style={{ color: "white" }}>{item.played}</td>
          <td className="centertext" style={{ color: "white" }}>{item.won}</td>
          <td className="centertext" style={{ color: "white" }}>{item.drawn}</td>
          <td className="centertext" style={{ color: "white" }}>{item.lost}</td>
          <td className="hideForSmall centertext" style={{ color: "white" }}>{item.goals_for}</td>
          <td className="hideForSmall centertext" style={{ color: "white" }}>{item.goals_against}</td>
          <td className="centertext" style={{ color: "white" }}>{item.points}</td>
        </tr>
      ) : null}
    </>
  );
};

export default TableRow;
