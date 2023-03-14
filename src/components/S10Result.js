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

const S10Result = ({ item }) => {
  return (
    <div>
      <div class="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - S10 {item.league_title}
      </div>
      <table class="pooltable">
        <tr>
          <th>Match</th>
          <th>Team A</th>
          <th>Score</th>
          <th>Team B</th>
        </tr>
        <tr>
          <td class="bold">M1</td>
          <td>{item.match1TeamA}</td>
          <td>{item.match1Result}</td>
          <td class="righttext">{item.match1TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M2</td>
          <td>{item.match2TeamA}</td>
          <td>{item.match2Result}</td>
          <td class="righttext">{item.match2TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M3</td>
          <td>{item.match3TeamA}</td>
          <td>{item.match3Result}</td>
          <td class="righttext">{item.match3TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M4</td>
          <td>{item.match4TeamA}</td>
          <td>{item.match4Result}</td>
          <td class="righttext">{item.match4TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M5</td>
          <td>{item.match5TeamA}</td>
          <td>{item.match5Result}</td>
          <td class="righttext">{item.match5TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M6</td>
          <td>{item.match6TeamA}</td>
          <td>{item.match6Result}</td>
          <td class="righttext">{item.match6TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M7</td>
          <td>{item.match7TeamA}</td>
          <td>{item.match7Result}</td>
          <td class="righttext">{item.match7TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M8</td>
          <td>{item.match8TeamA}</td>
          <td>{item.match8Result}</td>
          <td class="righttext">{item.match8TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M9</td>
          <td>{item.match9TeamA}</td>
          <td>{item.match9Result}</td>
          <td class="righttext">{item.match9TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M10</td>
          <td>{item.match10TeamA}</td>
          <td>{item.match10Result}</td>
          <td class="righttext">{item.match10TeamB}</td>
        </tr>
      </table>
      <div class="panel poolinformation">
        Winning Combination: {item.combination}
        <br />
        Status: Official
        <br />
        <br />
        {item.tickets9_10 ? (
          <div>
            Results: (9/10)
            <br />
            Net 9/10: R{format_payout_commas(item.nett9_10)}
            <br />
            Winners: {format_decimal_integer(item.tickets9_10)}
            <br />
            Dividend: R{format_payout_commas(item.value9_10)}
            <br />
            <br />
          </div>
        ) : null}
        Results: (10/10)
        <br />
        Net 10/10: R{format_payout_commas(item.nett10_10)}
        <br />
        Winners: {format_decimal_integer(item.tickets10_10)}
        <br />
        Dividend: R{format_payout_commas(item.value10_10)}
        <br />
        <br />
      </div>
    </div>
  );
};

export default S10Result;
