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
const calculate_cost = (selection1, selection2, selection3, selection4) => {
  return 6 * count_perms(selection1) * count_perms(selection2) * count_perms(selection3) * count_perms(selection4);
};

const S4Tips = ({ item }) => {
  return (
    <div>
      <a name={item.RowKey + item.program_code + item.league_title.replace(/ /g, "")}></a>
      <div className="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - {item.league_title}
        <span style={{ float: "right" }}>Mark Gleeson</span>
      </div>
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
          <td></td>
          <td>
            <span style={{ float: "left" }}>
              <strong>Suggested Perm:</strong> {item.selection1} x {item.selection2} x {item.selection3} x {item.selection4}{" "}
              <strong>Cost: R{calculate_cost(item.selection1, item.selection2, item.selection3, item.selection4)}.00</strong>
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

export default S4Tips;
