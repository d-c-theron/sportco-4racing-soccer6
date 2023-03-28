import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamLogo from "./TeamLogo";
import LatestResult from "./LatestResult";
import PreviousResult from "./PreviousResult";
import LatestResultDetail from "./LatestResultDetail";
import TableRow from "./TableRow";

const H2HPage = () => {
  const [H2H, setH2H] = useState({});
  let table_row_previous = -1;
  const { id } = useParams();

  const renderTableRowWithPrevious = (table_row) => {
    let temp = table_row_previous;
    table_row_previous = parseInt(table_row.position);
    return <TableRow item={table_row} previous={temp} team_a_id={H2H.team_a_id} team_b_id={H2H.team_b_id} />;
  };

  const resetTable = () => {
    table_row_previous = -1;
  };

  const resolve_comp = (comp_country, game_week, competition) => {
    if (comp_country !== "" && game_week !== "") {
      return `${competition} (${comp_country}) Game Week ${game_week}`;
    } else if (comp_country !== "") {
      return `${competition} (${comp_country})`;
    } else if (game_week !== "") {
      return `${competition} Game Week ${game_week}`;
    } else {
      return `${competition}`;
    }
  };

  const pretty_kickoff = (kick_off_time, program_date) => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (kick_off_time.includes(" ")) {
      let d = new Date(kick_off_time.substring(0, 10));
      return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()] + ", " + kick_off_time.substring(11);
    } else {
      let d = new Date(program_date);
      return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()] + ", " + kick_off_time;
    }
  };

  useEffect(() => {
    (async () => {
      const loadH2H = async () => {
        const temp = (await (await fetch(`/api/GetH2H/${id}`)).json()).value[0];
        setH2H(JSON.parse(temp.data));
      };
      loadH2H();
    })();
  }, [id]);

  return (
    <>
      {H2H.kick_off_time ? (
        <>
          <div className="row">
            <h3 style={{ textAlign: "center", margin: "3px" }}>
              <span style={{ color: "seagreen" }}>{H2H.team_a_name}</span> v <span style={{ color: "royalblue" }}>{H2H.team_b_name}</span>
            </h3>
            <h5 style={{ textAlign: "center", margin: "3px" }}>{resolve_comp(H2H.comp_country, H2H.game_week, H2H.competition)}</h5>
            {H2H.aggregate !== "" ? <h6 style={{ textAlign: "center", margin: "3px" }}>Aggregate: {H2H.aggregate}</h6> : null}
            {H2H.venue !== "" ? (
              <h6 style={{ textAlign: "center", margin: "3px" }}>
                {H2H.venue}, {pretty_kickoff(H2H.kick_off_time, H2H.program_date)}
              </h6>
            ) : (
              <h6 style={{ textAlign: "center", margin: "3px" }}>{pretty_kickoff(H2H.kick_off_time, H2H.program_date)}</h6>
            )}
            <div className="small-6 columns">
              <center>
                <TeamLogo id={H2H.team_a_id} name={H2H.team_a_name} small={false} />
              </center>
            </div>
            <div className="small-6 columns">
              <center>
                <TeamLogo id={H2H.team_b_id} name={H2H.team_a_name} small={false} />
              </center>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="large-12 columns">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em" }}>{H2H.table_summary_a}</td>
                    <td className="centertext">
                      <strong>Log (Pts) F-A</strong>
                    </td>
                    <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em", textAlign: "right" }}>{H2H.table_summary_b}</td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em" }}>{H2H.record_summary_a}</td>
                    <td className="centertext">
                      <strong>P-W-D-L</strong>
                    </td>
                    <td style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em", textAlign: "right" }}>{H2H.record_summary_b}</td>
                  </tr>
                  <tr>
                    <td style={{ lineHeight: "1.6em" }}>
                      {H2H.latest_results_team_a.map((result, index) => (index < 5 ? <LatestResult item={result} /> : null))}
                    </td>
                    <td className="centertext">
                      <strong>Form last 5</strong>
                    </td>
                    <td style={{ lineHeight: "1.6em" }} className="righttext">
                      {H2H.latest_results_team_b.map((result, index) => (index < 5 ? <LatestResult item={result} /> : null))}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ lineHeight: "1.6em" }}>
                      {H2H.latest_results_team_a
                        .filter((result) => result.match_home_or_away === "H")
                        .map((result, index) => (index < 5 ? <LatestResult item={result} /> : null))}
                    </td>
                    <td className="centertext">
                      <strong>
                        Last 5 (<span style={{ color: "seagreen", fontWeight: "bolder" }}>Home</span>/
                        <span style={{ color: "royalblue", fontWeight: "bolder" }}>Away</span>)
                      </strong>
                    </td>
                    <td style={{ lineHeight: "1.6em" }} className="righttext">
                      {H2H.latest_results_team_b
                        .filter((result) => result.match_home_or_away === "A")
                        .map((result, index) => (index < 5 ? <LatestResult item={result} /> : null))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>{H2H.head_2_head_results.length === 0 ? <td colSpan={5}>Previous Meetings: None</td> : <td colSpan={5}>Previous Meetings</td>}</tr>
                </thead>
                <tbody>
                  {H2H.head_2_head_results.map((result, index) =>
                    index < 5 ? <PreviousResult item={result} team_a_id={H2H.team_a_id} team_b_id={H2H.team_b_id} /> : null
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <td colSpan={5} style={{ backgroundColor: "seagreen", color: "white", fontSize: "0.875em" }}>
                      {H2H.team_a_name} Latest Results:
                    </td>
                  </tr>
                </thead>
                <tbody>{H2H.latest_results_team_a.map((result, index) => (index < 5 ? <LatestResultDetail item={result} /> : null))}</tbody>
              </table>
            </div>
            <div className="large-6 columns">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <td colSpan={5} style={{ backgroundColor: "royalblue", color: "white", fontSize: "0.875em" }}>
                      {H2H.team_b_name} Latest Results:
                    </td>
                  </tr>
                </thead>
                <tbody>{H2H.latest_results_team_b.map((result, index) => (index < 5 ? <LatestResultDetail item={result} /> : null))}</tbody>
              </table>
            </div>
          </div>
          {H2H.league_standings_a ? (
            <div className="row">
              <div className="large-12 columns">
                <table style={{ width: "100%", borderSpacing: "0px" }}>
                  <thead>
                    <tr>
                      <td colSpan={10} style={{ textAlign: "center" }}>
                        {H2H.league_standings_a.league_title} Standings
                      </td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td className="hideForSmall">&nbsp;</td>
                      <td> </td>
                      <td className="centertext">P</td>
                      <td className="centertext">W</td>
                      <td className="centertext">D</td>
                      <td className="centertext">L</td>
                      <td className="hideForSmall centertext">GF</td>
                      <td className="hideForSmall centertext">GA</td>
                      <td className="centertext">PTS</td>
                    </tr>
                  </thead>
                  <tbody>{H2H.league_standings_a.league_standings.map((table_row) => renderTableRowWithPrevious(table_row))}</tbody>
                </table>
              </div>
            </div>
          ) : null}
          {H2H.league_standings_b ? (
            <div className="row">
              {resetTable()}
              <div className="large-12 columns">
                <table style={{ width: "100%", borderSpacing: "0px" }}>
                  <thead>
                    <tr>
                      <td colSpan={10} style={{ textAlign: "center" }}>
                        {H2H.league_standings_b.league_title} Standings
                      </td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td className="hideForSmall">&nbsp;</td>
                      <td> </td>
                      <td className="centertext">P</td>
                      <td className="centertext">W</td>
                      <td className="centertext">D</td>
                      <td className="centertext">L</td>
                      <td className="hideForSmall centertext">GF</td>
                      <td className="hideForSmall centertext">GA</td>
                      <td className="centertext">PTS</td>
                    </tr>
                  </thead>
                  <tbody>{H2H.league_standings_b.league_standings.map((table_row) => renderTableRowWithPrevious(table_row))}</tbody>
                </table>
              </div>
            </div>
          ) : null}{" "}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default H2HPage;
