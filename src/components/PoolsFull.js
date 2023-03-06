import { useEffect, useState } from "react";

const PoolsFull = (id) => {
  const [pools, setPools] = useState([]);
  const [poolsLoaded, setPoolsLoaded] = useState(false);

  const fetchPools = async (id) => {
    try {
      let response = await fetch('https://randomuser.me/api' + id);
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }


};
export default PoolsFull;
