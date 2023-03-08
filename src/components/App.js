import React, { useEffect, useState } from "react";
import Banners from "./Banners";
import ArticlesElement from "./ArticlesElement";
import PoolsWidget from "./PoolsWidget";

const App = () => {
  const [PoolOfTheDay, setPoolOfTheDay] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [StoryOfWeek, setStoryOfWeek] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Profile, setProfile] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Briefs, setBriefs] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Tip, setTip] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Column, setColumn] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [BannerArray, setBannerArray] = useState([]);
  const [BannerVolume, setBannerVolume] = useState(-1);
  const [S6Pools, setS6Pools] = useState([]);
  const [S10Pools, setS10Pools] = useState([]);
  const [S13Pools, setS13Pools] = useState([]);
  const [S4Pools, setS4Pools] = useState([]);
  const [S13XPools, setS13XPools] = useState([]);
  const [SMPools, setSMPools] = useState([]);
  const [PanelSelected, setPanelSelected] = useState(1);
  const [PoolVolumes, setPoolVolumes] = useState([-1, -1, -1, -1, -1, -1]);

  const loadBanners = async () => {
    const banners = (await (await fetch(`/api/GetBanners`)).json()).value;
    let temp = [];
    let count = 0;
    for (const banner of banners) {
      count++;
      temp.push(banner);
    }
    setBannerVolume(count);
    setBannerArray(temp);
  };

  const loadArticles = async () => {
    const json_articles = (await (await fetch(`/api/GetArticles`)).json()).value;
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (const article of json_articles) {
      let d = new Date(article.RowKey);
      let updated_article = {
        date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
        title: article.title,
        author: article.author,
        strap_line: article.strap_line,
      };
      if (article.PartitionKey === "PoolOfTheDay") {
        setPoolOfTheDay(updated_article);
      } else if (article.PartitionKey === "StoryOfWeek") {
        setStoryOfWeek(updated_article);
      } else if (article.PartitionKey === "Profile") {
        setProfile(updated_article);
      } else if (article.PartitionKey === "Briefs") {
        setBriefs(updated_article);
      } else if (article.PartitionKey === "Tip") {
        setTip(updated_article);
      } else if (article.PartitionKey === "Column") {
        setColumn(updated_article);
      }
    }
  };

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
      loadBanners();
      loadArticles();
      loadSummaryPools();
    })();
  }, []);

  return (
    <div className="large-10 columns">
      <Banners banner_array={BannerArray} banner_volume={BannerVolume} />
      <PoolsWidget
        s6_pools={S6Pools}
        s10_pools={S10Pools}
        s13_pools={S13Pools}
        s4_pools={S4Pools}
        s13X_pools={S13XPools}
        sM_pools={SMPools}
        panel_selected={PanelSelected}
        pool_volumes={PoolVolumes}
      />
      <ArticlesElement pool_of_the_day={PoolOfTheDay} story_of_week={StoryOfWeek} profile={Profile} briefs={Briefs} tip={Tip} column={Column} />
    </div>
  );
};

export default App;
