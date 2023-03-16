import React from "react";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};
const format_payout_commas = (input) => {
  return input.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
const format_decimal_integer = (input) => {
  return input.replace(/(\d+).\d{2}/g, "$1");
};

const S6Result = ({ item }) => {
  return (
    <div>
      <div className="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - S6 {item.league_title}
      </div>
      <table className="pooltable">
        <tr>
          <th>Match</th>
          <th>Team A</th>
          <th>Score</th>
          <th>Team B</th>
        </tr>
        <tr>
          <td className="bold">M1</td>
          <td>{item.match1TeamA}</td>
          <td>{item.match1Result}</td>
          <td className="righttext">{item.match1TeamB}</td>
        </tr>
        <tr>
          <td className="bold">M2</td>
          <td>{item.match2TeamA}</td>
          <td>{item.match2Result}</td>
          <td className="righttext">{item.match2TeamB}</td>
        </tr>
        <tr>
          <td className="bold">M3</td>
          <td>{item.match3TeamA}</td>
          <td>{item.match3Result}</td>
          <td className="righttext">{item.match3TeamB}</td>
        </tr>
        <tr>
          <td className="bold">M4</td>
          <td>{item.match4TeamA}</td>
          <td>{item.match4Result}</td>
          <td className="righttext">{item.match4TeamB}</td>
        </tr>
        <tr>
          <td className="bold">M5</td>
          <td>{item.match5TeamA}</td>
          <td>{item.match5Result}</td>
          <td className="righttext">{item.match5TeamB}</td>
        </tr>
        <tr>
          <td className="bold">M6</td>
          <td>{item.match6TeamA}</td>
          <td>{item.match6Result}</td>
          <td className="righttext">{item.match6TeamB}</td>
        </tr>
      </table>
      <div className="panel poolinformation">
        Net Pool: R{format_payout_commas(item.nett)}
        <br />
        Winning Combination: {item.combination}
        <br />
        Status: Official
        <br />
        Winners: {format_decimal_integer(item.tickets)}
        <br />
        Dividend: R{format_payout_commas(item.dividend)}
      </div>
    </div>
  );
};

export default S6Result;
