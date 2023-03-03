import React from "react";
import PoolSummary from "./PoolSummary";

const PoolsSummary = ({ s6pools, s10pools, s13pools, s4pools, s13Xpools, sMpools, panel_selected }) => {
  return (
    <div className="large-8 columns pools">
      <div class="sectionheader">CURRENT POOLS</div>
      <div id="newtabs" className="section-container auto" data-section style={{minHeight: '58px'}}>
        <PoolSummary pools={s6pools} panel_selected={panel_selected} panel_number={1} />
        <PoolSummary pools={s10pools} panel_selected={panel_selected} panel_number={2}/>
        <PoolSummary pools={s13pools} panel_selected={panel_selected} panel_number={3}/>
        <PoolSummary pools={s4pools} panel_selected={panel_selected} panel_number={4}/>
        <PoolSummary pools={s13Xpools} panel_selected={panel_selected} panel_number={5}/>
        <PoolSummary pools={sMpools} panel_selected={panel_selected} panel_number={6}/>
      </div>
    </div>
  );
};

export default PoolsSummary;
