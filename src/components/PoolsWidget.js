import React from "react";
import PoolPanel from "./PoolPanel";

const PoolsWidget = ({ s6_pools, s10_pools, s13_pools, s4_pools, s13X_pools, sM_pools, panel_selected, pool_volumes }) => {
  return (
    <div className="large-8 columns pools">
      <div class="sectionheader">CURRENT POOLS</div>
      <div id="newtabs" className="section-container auto" data-section style={{ minHeight: "58px" }}>
        <PoolPanel pools={s6_pools} panel_selected={panel_selected} panel_number={1} volume={pool_volumes[0]} />
        <PoolPanel pools={s10_pools} panel_selected={panel_selected} panel_number={2} volume={pool_volumes[1]} />
        <PoolPanel pools={s13_pools} panel_selected={panel_selected} panel_number={3} volume={pool_volumes[2]} />
        <PoolPanel pools={s4_pools} panel_selected={panel_selected} panel_number={4} volume={pool_volumes[3]} />
        <PoolPanel pools={s13X_pools} panel_selected={panel_selected} panel_number={5} volume={pool_volumes[4]} />
        <PoolPanel pools={sM_pools} panel_selected={panel_selected} panel_number={6} volume={pool_volumes[5]} />
      </div>
    </div>
  );
};

export default PoolsWidget;
