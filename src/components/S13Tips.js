import React from "react";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (programDate) => {
  let d = new Date(programDate);
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};
const count_perms = (selection) => {
  let perm_count = (selection.match(/,/g) || []).length + 1;
  return perm_count;
};
const calculate_cost = (
  selection1,
  selection2,
  selection3,
  selection4,
  selection5,
  selection6,
  selection7,
  selection8,
  selection9,
  selection10,
  selection11,
  selection12,
  selection13
) => {
  return (
    2 *
    count_perms(selection1) *
    count_perms(selection2) *
    count_perms(selection3) *
    count_perms(selection4) *
    count_perms(selection5) *
    count_perms(selection6) *
    count_perms(selection7) *
    count_perms(selection8) *
    count_perms(selection9) *
    count_perms(selection10) *
    count_perms(selection11) *
    count_perms(selection12) *
    count_perms(selection13)
  );
};

const S13Tips = ({ item }) => {
  return (
    <div>
      <a href="/#" name={item.RowKey + item.program_code + item.league_title.replace(/ /g, "")}>
        <div className="pooldateindicator4R">
          {getPrettyDate(item.RowKey)} - {item.league_title}
          <span style={{ float: "right" }}>Mark Gleeson</span>
        </div>
      </a>
      <table className="toptipstable">
        <tr>
          <td className="bold">M1</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match1}
          </td>
          <td>{item.selection1}</td>
        </tr>
        <tr>
          <td className="bold">M2</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match2}
          </td>
          <td>{item.selection2}</td>
        </tr>
        <tr>
          <td className="bold">M3</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match3}
          </td>
          <td>{item.selection3}</td>
        </tr>
        <tr>
          <td className="bold">M4</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match4}
          </td>
          <td>{item.selection4}</td>
        </tr>
        <tr>
          <td className="bold">M5</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match5}
          </td>
          <td>{item.selection5}</td>
        </tr>
        <tr>
          <td className="bold">M6</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match6}
          </td>
          <td>{item.selection6}</td>
        </tr>
        <tr>
          <td className="bold">M7</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match7}
          </td>
          <td>{item.selection7}</td>
        </tr>
        <tr>
          <td className="bold">M8</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match8}
          </td>
          <td>{item.selection8}</td>
        </tr>
        <tr>
          <td className="bold">M9</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match9}
          </td>
          <td>{item.selection9}</td>
        </tr>
        <tr>
          <td className="bold">M10</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match10}
          </td>
          <td>{item.selection10}</td>
        </tr>
        <tr>
          <td className="bold">M11</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match11}
          </td>
          <td>{item.selection11}</td>
        </tr>
        <tr>
          <td className="bold">M12</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match12}
          </td>
          <td>{item.selection12}</td>
        </tr>
        <tr>
          <td className="bold">M13</td>
          <td className="bold" style={{ textAlign: "left" }}>
            {item.match13}
          </td>
          <td>{item.selection13}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ float: "left" }}>
              <strong>Suggested Perm:</strong> {item.selection1} x {item.selection2} x {item.selection3} x {item.selection4} x {item.selection5} x{" "}
              {item.selection6} x {item.selection7} x {item.selection8} x {item.selection9} x {item.selection10} x {item.selection11} x {item.selection11} x{" "}
              {item.selection13}{" "}
              <strong>
                Cost: R
                {calculate_cost(
                  item.selection1,
                  item.selection2,
                  item.selection3,
                  item.selection4,
                  item.selection5,
                  item.selection6,
                  item.selection7,
                  item.selection8,
                  item.selection9,
                  item.selection10,
                  item.selection11,
                  item.selection12,
                  item.selection13
                )}
                .00
              </strong>
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "right", margin: 0 }}
              className="button button4R tiny betnowbutton"
              href={`https://tab4racing.com/?tip=${item.link}&channel=9`}
            >
              BET NOW
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default S13Tips;
