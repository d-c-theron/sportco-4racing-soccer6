import React, { useEffect, useState } from "react";

const PoolsFull = (id) => {
  const [pools, setPools] = useState([]);
  const [poolsLoaded, setPoolsLoaded] = useState(false);

  const fetchPools = async (props) => {
    try {
      let ie = "S0";
      if (props.id === "S6") {
        ie = "S7";
      } else if (props.id === "S10") {
        ie = "S11";
      } else if (props.id === "S13") {
        ie = "S14";
      } else if (props.id === "S4") {
        ie = "S5";
      } else if (props.id === "S13x") {
        ie = "S13y";
      } else if (props.id === "Megastrike") {
        ie = "Megastrikf";
      }
      let full_pools = (await (await fetch(`/api/GetFullPools/${props.id}/${ie}`)).json()).value;
      return { success: true, data: full_pools };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setPoolsLoaded(false);
      let res = await fetchPools(id);
      if (res.success) {
        setPools(res.data.results[0]);
        setPoolsLoaded(true);
      }
    })();
  }, []);

  return <div>{poolsLoaded ? <div>Pools Loaded</div> : <p>No pools found</p>}</div>;
};
export default PoolsFull;
