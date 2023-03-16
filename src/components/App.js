import React from "react";
import Banners from "./Banners";
import ArticlesElement from "./ArticlesElement";
import PoolsWidget from "./PoolsWidget";
import PoolPage from "./PoolPage";
import ResultsPage from "./ResultsPage";
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
      <Route path="/results-and-payouts/soccer-6">
        <Banners />
        <ResultsPage pool_id={6} />
      </Route>
      <Route path="/results-and-payouts/soccer-10">
        <Banners />
        <ResultsPage pool_id={10} />
      </Route>
      <Route path="/results-and-payouts/soccer-13">
        <Banners />
        <ResultsPage pool_id={13} />
      </Route>
      <Route path="/results-and-payouts/soccer-4">
        <Banners />
        <ResultsPage pool_id={4} />
      </Route>
      <Route path="/results-and-payouts/soccer-13-extra">
        <Banners />
        <ResultsPage pool_id={16} />
      </Route>
      <Route path="/results-and-payouts/soccer-12">
        <Banners />
        <ResultsPage pool_id={12} />
      </Route>
      <Route path="/top-tips/soccer-6">
        <Banners />
        <TipsPage pool_id={6} />
      </Route>
      <Route path="/top-tips/soccer-10">
        <Banners />
        <TipsPage pool_id={10} />
      </Route>
      <Route path="/top-tips/soccer-13">
        <Banners />
        <TipsPage pool_id={13} />
      </Route>
      <Route path="/top-tips/soccer-4">
        <Banners />
        <TipsPage pool_id={4} />
      </Route>
      <Route path="/top-tips/soccer-13-extra">
        <Banners />
        <TipsPage pool_id={16} />
      </Route>
    </div>
  );
};

export default App;
