import React from "react";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getPrettyDate = (d) => {
  return weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()];
};

const PoolItem = ({ item }) => {
  return (
    <div class="pooldateindicator4R">
      {getPrettyDate(new Date(item.programDate))} - {item.PartitionKey}
    </div>
  );
};

export default PoolItem;
