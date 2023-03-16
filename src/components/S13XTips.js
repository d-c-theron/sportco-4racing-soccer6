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
  selection13,
  selection14,
  selection15,
  selection16,
  selection17,
  selection18,
  selection19,
  selection20,
  selection21,
  selection22,
  selection23,
  selection24,
  selection25,
  selection26,
  selection27,
  selection28,
  selection29,
  selection30
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
    count_perms(selection13) *
    count_perms(selection14) *
    count_perms(selection15) *
    count_perms(selection16) *
    count_perms(selection17) *
    count_perms(selection18) *
    count_perms(selection19) *
    count_perms(selection20) *
    count_perms(selection21) *
    count_perms(selection22) *
    count_perms(selection23) *
    count_perms(selection24) *
    count_perms(selection25) *
    count_perms(selection26) *
    count_perms(selection27) *
    count_perms(selection28) *
    count_perms(selection29) *
    count_perms(selection30)
  );
};

const add_selection = (selection) => {
  if (selection.length == 0) return "_";
  else return selection;
};

const show_perm = (
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
  selection13,
  selection14,
  selection15,
  selection16,
  selection17,
  selection18,
  selection19,
  selection20,
  selection21,
  selection22,
  selection23,
  selection24,
  selection25,
  selection26,
  selection27,
  selection28,
  selection29,
  selection30
) => {
  return (
    add_selection(selection1) +
    " x " +
    add_selection(selection2) +
    " x " +
    add_selection(selection3) +
    " x " +
    add_selection(selection4) +
    " x " +
    add_selection(selection5) +
    " x " +
    add_selection(selection6) +
    " x " +
    add_selection(selection7) +
    " x " +
    add_selection(selection8) +
    " x " +
    add_selection(selection9) +
    " x " +
    add_selection(selection10) +
    " x " +
    add_selection(selection11) +
    " x " +
    add_selection(selection12) +
    " x " +
    add_selection(selection13) +
    " x " +
    add_selection(selection14) +
    " x " +
    add_selection(selection15) +
    " x " +
    add_selection(selection16) +
    " x " +
    add_selection(selection17) +
    " x " +
    add_selection(selection18) +
    " x " +
    add_selection(selection19) +
    " x " +
    add_selection(selection20) +
    " x " +
    add_selection(selection21) +
    " x " +
    add_selection(selection22) +
    " x " +
    add_selection(selection23) +
    " x " +
    add_selection(selection24) +
    " x " +
    add_selection(selection25) +
    " x " +
    add_selection(selection26) +
    " x " +
    add_selection(selection27) +
    " x " +
    add_selection(selection28) +
    " x " +
    add_selection(selection29) +
    " x " +
    add_selection(selection30)
  );
};

const S13XTips = ({ item }) => {
  return (
    <div>
      <div className="pooldateindicator4R">
        {getPrettyDate(item.RowKey)} - {item.league_title}
      </div>
      <table className="toptipstable">
        <tr>
          <td className="bold">M1</td>
          <td className="bold">{item.match1}</td>
          <td>{item.selection1}</td>
        </tr>
        <tr>
          <td className="bold">M2</td>
          <td className="bold">{item.match2}</td>
          <td>{item.selection2}</td>
        </tr>
        <tr>
          <td className="bold">M3</td>
          <td className="bold">{item.match3}</td>
          <td>{item.selection3}</td>
        </tr>
        <tr>
          <td className="bold">M4</td>
          <td className="bold">{item.match4}</td>
          <td>{item.selection4}</td>
        </tr>
        <tr>
          <td className="bold">M5</td>
          <td className="bold">{item.match5}</td>
          <td>{item.selection5}</td>
        </tr>
        <tr>
          <td className="bold">M6</td>
          <td className="bold">{item.match6}</td>
          <td>{item.selection6}</td>
        </tr>
        <tr>
          <td className="bold">M7</td>
          <td className="bold">{item.match7}</td>
          <td>{item.selection7}</td>
        </tr>
        <tr>
          <td className="bold">M8</td>
          <td className="bold">{item.match8}</td>
          <td>{item.selection8}</td>
        </tr>
        <tr>
          <td className="bold">M9</td>
          <td className="bold">{item.match9}</td>
          <td>{item.selection9}</td>
        </tr>
        <tr>
          <td className="bold">M10</td>
          <td className="bold">{item.match10}</td>
          <td>{item.selection10}</td>
        </tr>
        <tr>
          <td className="bold">M11</td>
          <td className="bold">{item.match11}</td>
          <td>{item.selection11}</td>
        </tr>
        <tr>
          <td className="bold">M12</td>
          <td className="bold">{item.match12}</td>
          <td>{item.selection12}</td>
        </tr>
        <tr>
          <td className="bold">M13</td>
          <td className="bold">{item.match13}</td>
          <td>{item.selection13}</td>
        </tr>
        <tr>
          <td className="bold">M14</td>
          <td className="bold">{item.match14}</td>
          <td>{item.selection14}</td>
        </tr>
        <tr>
          <td className="bold">M15</td>
          <td className="bold">{item.match15}</td>
          <td>{item.selection15}</td>
        </tr>
        <tr>
          <td className="bold">M16</td>
          <td className="bold">{item.match16}</td>
          <td>{item.selection16}</td>
        </tr>
        <tr>
          <td className="bold">M17</td>
          <td className="bold">{item.match17}</td>
          <td>{item.selection17}</td>
        </tr>
        <tr>
          <td className="bold">M18</td>
          <td className="bold">{item.match18}</td>
          <td>{item.selection18}</td>
        </tr>
        <tr>
          <td className="bold">M19</td>
          <td className="bold">{item.match19}</td>
          <td>{item.selection19}</td>
        </tr>
        <tr>
          <td className="bold">M20</td>
          <td className="bold">{item.match20}</td>
          <td>{item.selection20}</td>
        </tr>
        <tr>
          <td className="bold">M21</td>
          <td className="bold">{item.match21}</td>
          <td>{item.selection21}</td>
        </tr>
        <tr>
          <td className="bold">M22</td>
          <td className="bold">{item.match22}</td>
          <td>{item.selection22}</td>
        </tr>
        <tr>
          <td className="bold">M23</td>
          <td className="bold">{item.match23}</td>
          <td>{item.selection23}</td>
        </tr>
        <tr>
          <td className="bold">M24</td>
          <td className="bold">{item.match24}</td>
          <td>{item.selection24}</td>
        </tr>
        <tr>
          <td className="bold">M25</td>
          <td className="bold">{item.match25}</td>
          <td>{item.selection25}</td>
        </tr>
        <tr>
          <td className="bold">M26</td>
          <td className="bold">{item.match26}</td>
          <td>{item.selection26}</td>
        </tr>
        <tr>
          <td className="bold">M27</td>
          <td className="bold">{item.match27}</td>
          <td>{item.selection27}</td>
        </tr>
        <tr>
          <td className="bold">M28</td>
          <td className="bold">{item.match28}</td>
          <td>{item.selection28}</td>
        </tr>
        <tr>
          <td className="bold">M29</td>
          <td className="bold">{item.match29}</td>
          <td>{item.selection29}</td>
        </tr>
        <tr>
          <td className="bold">M30</td>
          <td className="bold">{item.match30}</td>
          <td>{item.selection30}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <strong>Perm.</strong>
            <br />
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
              item.selection13,
              item.selection14,
              item.selection15,
              item.selection16,
              item.selection17,
              item.selection18,
              item.selection19,
              item.selection20,
              item.selection21,
              item.selection22,
              item.selection23,
              item.selection24,
              item.selection25,
              item.selection26,
              item.selection27,
              item.selection28,
              item.selection29,
              item.selection30
            )}
            .00
            <br />
            {show_perm(
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
              item.selection13,
              item.selection14,
              item.selection15,
              item.selection16,
              item.selection17,
              item.selection18,
              item.selection19,
              item.selection20,
              item.selection21,
              item.selection22,
              item.selection23,
              item.selection24,
              item.selection25,
              item.selection26,
              item.selection27,
              item.selection28,
              item.selection29,
              item.selection30
            )}
            <br />
            <a target="_blank" className="button button4R tiny betnowbutton" href={item.link}>
              BET NOW
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default S13XTips;
