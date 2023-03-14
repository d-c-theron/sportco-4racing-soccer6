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

const S13XResult = ({ item }) => {
  return (
    <div>
      <div class="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - S13X {item.league_title}
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
        <tr>
          <td class="bold">M11</td>
          <td>{item.match11TeamA}</td>
          <td>{item.match11Result}</td>
          <td class="righttext">{item.match11TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M12</td>
          <td>{item.match12TeamA}</td>
          <td>{item.match12Result}</td>
          <td class="righttext">{item.match12TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M13</td>
          <td>{item.match13TeamA}</td>
          <td>{item.match13Result}</td>
          <td class="righttext">{item.match13TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M14</td>
          <td>{item.match14TeamA}</td>
          <td>{item.match14Result}</td>
          <td class="righttext">{item.match14TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M15</td>
          <td>{item.match15TeamA}</td>
          <td>{item.match15Result}</td>
          <td class="righttext">{item.match15TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M16</td>
          <td>{item.match16TeamA}</td>
          <td>{item.match16Result}</td>
          <td class="righttext">{item.match16TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M17</td>
          <td>{item.match17TeamA}</td>
          <td>{item.match17Result}</td>
          <td class="righttext">{item.match17TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M18</td>
          <td>{item.match18TeamA}</td>
          <td>{item.match18Result}</td>
          <td class="righttext">{item.match18TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M19</td>
          <td>{item.match19TeamA}</td>
          <td>{item.match19Result}</td>
          <td class="righttext">{item.match19TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M20</td>
          <td>{item.match20TeamA}</td>
          <td>{item.match20Result}</td>
          <td class="righttext">{item.match20TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M21</td>
          <td>{item.match21TeamA}</td>
          <td>{item.match21Result}</td>
          <td class="righttext">{item.match21TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M22</td>
          <td>{item.match22TeamA}</td>
          <td>{item.match22Result}</td>
          <td class="righttext">{item.match22TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M23</td>
          <td>{item.match23TeamA}</td>
          <td>{item.match23Result}</td>
          <td class="righttext">{item.match23TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M24</td>
          <td>{item.match24TeamA}</td>
          <td>{item.match24Result}</td>
          <td class="righttext">{item.match24TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M25</td>
          <td>{item.match25TeamA}</td>
          <td>{item.match25Result}</td>
          <td class="righttext">{item.match25TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M26</td>
          <td>{item.match26TeamA}</td>
          <td>{item.match26Result}</td>
          <td class="righttext">{item.match26TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M27</td>
          <td>{item.match27TeamA}</td>
          <td>{item.match27Result}</td>
          <td class="righttext">{item.match27TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M28</td>
          <td>{item.match28TeamA}</td>
          <td>{item.match28Result}</td>
          <td class="righttext">{item.match28TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M29</td>
          <td>{item.match29TeamA}</td>
          <td>{item.match29Result}</td>
          <td class="righttext">{item.match29TeamB}</td>
        </tr>
        <tr>
          <td class="bold">M30</td>
          <td>{item.match30TeamA}</td>
          <td>{item.match30Result}</td>
          <td class="righttext">{item.match30TeamB}</td>
        </tr>
      </table>
      <div class="panel poolinformation">
        Winning Combination: {item.combination}
        <br />
        Status: Official
        <br />
        <br />
        {item.tickets12_13 ? (
          <div>
            Results: (12/13)
            <br />
            Net 12/13: R{format_payout_commas(item.nett12_13)}
            <br />
            Winners: {format_decimal_integer(item.tickets12_13)}
            <br />
            Dividend: R{format_payout_commas(item.value12_13)}
            <br />
            <br />
          </div>
        ) : null}
        {item.tickets11_13 ? (
          <div>
            Results: (11/13)
            <br />
            Net 11/13: R{format_payout_commas(item.nett11_13)}
            <br />
            Winners: {format_decimal_integer(item.tickets11_13)}
            <br />
            Dividend: R{format_payout_commas(item.value11_13)}
            <br />
            <br />
          </div>
        ) : null}
        {item.tickets10_13 ? (
          <div>
            Results: (10/13)
            <br />
            Net 10/13: R{format_payout_commas(item.nett10_13)}
            <br />
            Winners: {format_decimal_integer(item.tickets10_13)}
            <br />
            Dividend: R{format_payout_commas(item.value10_13)}
            <br />
            <br />
          </div>
        ) : null}
        {item.tickets9_13 ? (
          <div>
            Results: (9/13)
            <br />
            Net 9/13: R{format_payout_commas(item.nett9_13)}
            <br />
            Winners: {format_decimal_integer(item.tickets9_13)}
            <br />
            Dividend: R{format_payout_commas(item.value9_13)}
            <br />
            <br />
          </div>
        ) : null}
        {item.tickets8_13 ? (
          <div>
            Results: (8/13)
            <br />
            Net 8/13: R{format_payout_commas(item.nett8_13)}
            <br />
            Winners: {format_decimal_integer(item.tickets8_13)}
            <br />
            Dividend: R{format_payout_commas(item.value8_13)}
            <br />
            <br />
          </div>
        ) : null}
        Results: (13/13)
        <br />
        Net 13/13: R{format_payout_commas(item.nett13_13)}
        <br />
        Winners: {format_decimal_integer(item.tickets13_13)}
        <br />
        Dividend: R{format_payout_commas(item.value13_13)}
        <br />
        <br />
      </div>
    </div>
  );
};

export default S13XResult;
