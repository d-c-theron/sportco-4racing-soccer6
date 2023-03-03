import React from "react";
import PoolItem from "./PoolItem";

const get_pool_icon = (panel_number) => {
  if (panel_number === 1) {
    return "soccer-6-icon-4R.png";
  } else if (panel_number === 2) {
    return "soccer-10-icon-4R.png";
  } else if (panel_number === 3) {
    return "soccer-13-icon-4R.png";
  } else if (panel_number === 4) {
    return "soccer-4-icon-4R.png";
  } else if (panel_number === 5) {
    return "soccer-13ax-icon-4R.png";
  } else if (panel_number === 6) {
    return "soccer-Megastrike-icon-4R.png";
  }
};

const get_tab_status = (panel_number, panel_selected) => {
  if (panel_number === panel_selected) {
    return "active";
  } else {
    return "";
  }
};

const get_tab_style = (panel_number) => {
  if (panel_number === 1) {
    return { left: "0px", height: "58px" };
  } else if (panel_number === 2) {
    return { left: "57px", height: "58px" };
  } else if (panel_number === 3) {
    return { left: "114px", height: "58px" };
  } else if (panel_number === 4) {
    return { left: "171px", height: "58px" };
  } else if (panel_number === 5) {
    return { left: "228px", height: "58px" };
  } else if (panel_number === 6) {
    return { left: "285px", height: "58px" };
  }
};

const PoolSummary = ({ pools, panel_selected, panel_number }) => {
  return (
    <section className={get_tab_status(panel_number, panel_selected)} style={{paddingTop: '57px'}}>
      <p className="title" data-section-title style={get_tab_style(panel_number)}>
        <a href={"#panel" + panel_number}>
          <img src={"images/" + get_pool_icon(panel_number)} />
        </a>
      </p>
      <div className="content" data-section-content>
        {pools.map((item) => (
          <PoolItem item={item} />
        ))}
      </div>
    </section>
  );
};

export default PoolSummary;
