import React, { useEffect, useState } from "react";
import PoolItemWide from "./PoolItemWide";

const PoolPage = ({ pool_id }) => {
  const [Pools, setPools] = useState([]);
  const [PageName, setPageName] = useState("");
  const [PoolVolume, setPoolVolume] = useState(-1);
  let start_term = "";
  let end_term = "";
  let page_name = "";

  useEffect(() => {
    (async () => {
      const loadPools = async () => {
        switch (pool_id) {
          case 6:
            start_term = "S6 ";
            end_term = "S7 ";
            page_name = "Pools and Matches - Soccer 6";
            break;
          case 10:
            start_term = "S10 ";
            end_term = "S11 ";
            page_name = "Pools and Matches - Soccer 10";
            break;
          case 13:
            start_term = "S13 ";
            end_term = "S14 ";
            page_name = "Pools and Matches - Soccer 13";
            break;
          case 4:
            start_term = "S4 ";
            end_term = "S5 ";
            page_name = "Pools and Matches - Soccer 4";
            break;
          case 16:
            start_term = "S13X ";
            end_term = "S13Y ";
            page_name = "Pools and Matches - Soccer Any 13 Xtra";
            break;
          case 12:
            start_term = "Megastrike ";
            end_term = "Megastrikf ";
            page_name = "Pools and Matches - MegaStrike 10";
            break;
          default:
            start_term = "Error ";
            end_term = "Error ";
            page_name = "Error ";
        }
        const pools = (await (await fetch(`/api/GetFullPools/${start_term}/${end_term}`)).json()).value;
        const temp = [];
        for (const pool of pools) {
          temp.push(pool);
        }
        temp.sort((a, b) => (a.RowKey > b.RowKey ? 1 : -1));
        setPools(temp);
        setPageName(page_name);
        setPoolVolume(temp.length);
      };
      loadPools();
    })();
  }, [pool_id]);

  return (
    <div class="row second">
      <div class="large-12 columns">
        <h1>{PageName}</h1>
        {PoolVolume === -1 ? <div class="panel">Loading...</div> : PoolVolume === 0 ? <div className="panel">No pool currently open.</div> : ""}
        {Pools.map((item) => (
          <PoolItemWide item={item} />
        ))}
      </div>
    </div>
  );
};

export default PoolPage;
