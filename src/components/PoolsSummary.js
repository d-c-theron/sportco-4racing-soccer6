import React from "react";
import PoolSummary from "./PoolSummary";

const PoolsSummary = () => {
  return (
    <div className="large-8 columns pools">
      <div className="sectionheader">CURRENT POOLS</div>
      <PoolSummary/>
    </div>
  );
};

export default PoolsSummary;
