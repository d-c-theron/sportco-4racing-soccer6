import React, { useEffect, useState } from "react";
import PoolPanel from "./PoolPanel";

const PoolsWidget = () => {
  const [S6Pools, setS6Pools] = useState([]);
  const [S10Pools, setS10Pools] = useState([]);
  const [S13Pools, setS13Pools] = useState([]);
  const [S4Pools, setS4Pools] = useState([]);
  const [S13XPools, setS13XPools] = useState([]);
  const [SMPools, setSMPools] = useState([]);
  const [PanelSelected, setPanelSelected] = useState(1);
  const [PoolVolumes, setPoolVolumes] = useState([-1, -1, -1, -1, -1, -1]);

  const loadSummaryPools = async () => {
    const summary_pools = (await (await fetch(`/api/GetSummaryPools`)).json()).value;
    const temps6 = [];
    const temps10 = [];
    const temps13 = [];
    const temps4 = [];
    const temps13X = [];
    const tempsM = [];
    for (const summary_pool of summary_pools) {
      if (summary_pool.PartitionKey.startsWith("S6 ")) {
        temps6.push(summary_pool);
      } else if (summary_pool.PartitionKey.startsWith("S10 ")) {
        temps10.push(summary_pool);
      } else if (summary_pool.PartitionKey.startsWith("S13 ")) {
        temps13.push(summary_pool);
      } else if (summary_pool.PartitionKey.startsWith("S4 ")) {
        temps4.push(summary_pool);
      } else if (summary_pool.PartitionKey.startsWith("S13X ")) {
        temps13X.push(summary_pool);
      } else if (summary_pool.PartitionKey.startsWith("Megastrike")) {
        tempsM.push(summary_pool);
      }
    }
    temps6.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setS6Pools(temps6);
    temps10.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setS10Pools(temps10);
    temps13.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setS13Pools(temps13);
    temps4.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setS4Pools(temps4);
    temps13X.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setS13XPools(temps13X);
    tempsM.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
    setSMPools(tempsM);
    const temp_volumes = [temps6.length, temps10.length, temps13.length, temps4.length, temps13X.length, tempsM.length];
    setPoolVolumes(temp_volumes);
    setPanelSelected(1);
  };

  useEffect(() => {
    (async () => {
      loadSummaryPools();
    })();
  }, []);

  return (
    <div className="large-8 columns pools">
      <div class="sectionheader">CURRENT POOLS</div>
      <div id="newtabs" className="section-container auto" data-section style={{ minHeight: "58px" }}>
        <PoolPanel pools={S6Pools} panel_selected={PanelSelected} panel_number={1} volume={PoolVolumes[0]} />
        <PoolPanel pools={S10Pools} panel_selected={PanelSelected} panel_number={2} volume={PoolVolumes[1]} />
        <PoolPanel pools={S13Pools} panel_selected={PanelSelected} panel_number={3} volume={PoolVolumes[2]} />
        <PoolPanel pools={S4Pools} panel_selected={PanelSelected} panel_number={4} volume={PoolVolumes[3]} />
        <PoolPanel pools={S13XPools} panel_selected={PanelSelected} panel_number={5} volume={PoolVolumes[4]} />
        <PoolPanel pools={SMPools} panel_selected={PanelSelected} panel_number={6} volume={PoolVolumes[5]} />
      </div>
    </div>
  );
};

export default PoolsWidget;
