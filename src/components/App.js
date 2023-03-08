import React from "react";
import Banners from "./Banners";
import ArticlesElement from "./ArticlesElement";
import PoolsWidget from "./PoolsWidget";
import PoolPage from "./PoolPage";
import Route from "./Route";

const App = () => {
  return (
    <div className="large-10 columns">
      <Route path="/">
        <Banners />
        <PoolsWidget />
        <ArticlesElement />
      </Route>
      <Route path="/pools-and-matches/soccer-6">
        <Banners />
        <PoolPage pool_id={6} />
      </Route>
      <Route path="/pools-and-matches/soccer6-advanced">
        <Banners />
        <PoolPage pool_id={6} />
      </Route>
      <Route path="/pools-and-matches/soccer-10">
        <Banners />
        <PoolPage pool_id={10} />
      </Route>
      <Route path="/pools-and-matches/soccer10-advanced">
        <Banners />
        <PoolPage pool_id={10} />
      </Route>
      <Route path="/pools-and-matches/soccer-13">
        <Banners />
        <PoolPage pool_id={13} />
      </Route>
      <Route path="/pools-and-matches/soccer13-advanced">
        <Banners />
        <PoolPage pool_id={13} />
      </Route>
      <Route path="/pools-and-matches/soccer-4">
        <Banners />
        <PoolPage pool_id={4} />
      </Route>
      <Route path="/pools-and-matches/soccer4-advanced">
        <Banners />
        <PoolPage pool_id={4} />
      </Route>
      <Route path="/pools-and-matches/soccer-13-extra">
        <Banners />
        <PoolPage pool_id={16} />
      </Route>
      <Route path="/pools-and-matches/soccer16-advanced">
        <Banners />
        <PoolPage pool_id={16} />
      </Route>
      <Route path="/pools-and-matches/megastrike">
        <Banners />
        <PoolPage pool_id={12} />
      </Route>
    </div>
  );
};

export default App;
