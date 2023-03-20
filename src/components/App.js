import React from "react";
import Banners from "./Banners";
import ArticlesElement from "./ArticlesElement";
import PoolsWidget from "./PoolsWidget";
import PoolPage from "./PoolPage";
import ResultsPage from "./ResultsPage";
import TipsPage from "./TipsPage";
import ArticlePage from "./ArticlePage";
import FormGuidePage from "./FormGuidePage";
import HowtoPage from "./HowtoPage";
import InfoPage from "./InfoPage";
import Route from "./Route";

const App = () => {
  return (
    <div className="large-10 columns">
      <Banners />
      <Route path="/">
        <PoolsWidget />
        <ArticlesElement />
      </Route>
      <Route path="/pools-and-matches/soccer-6">
        <PoolPage pool_id={6} />
      </Route>
      <Route path="/pools-and-matches/soccer6-advanced">
        <PoolPage pool_id={6} />
      </Route>
      <Route path="/pools-and-matches/soccer-10">
        <PoolPage pool_id={10} />
      </Route>
      <Route path="/pools-and-matches/soccer10-advanced">
        <PoolPage pool_id={10} />
      </Route>
      <Route path="/pools-and-matches/soccer-13">
        <PoolPage pool_id={13} />
      </Route>
      <Route path="/pools-and-matches/soccer13-advanced">
        <PoolPage pool_id={13} />
      </Route>
      <Route path="/pools-and-matches/soccer-4">
        <PoolPage pool_id={4} />
      </Route>
      <Route path="/pools-and-matches/soccer4-advanced">
        <PoolPage pool_id={4} />
      </Route>
      <Route path="/pools-and-matches/soccer-13-extra">
        <PoolPage pool_id={16} />
      </Route>
      <Route path="/pools-and-matches/soccer16-advanced">
        <PoolPage pool_id={16} />
      </Route>
      <Route path="/pools-and-matches/megastrike">
        <PoolPage pool_id={12} />
      </Route>
      <Route path="/results-and-payouts/soccer-6">
        <ResultsPage pool_id={6} />
      </Route>
      <Route path="/results-and-payouts/soccer-10">
        <ResultsPage pool_id={10} />
      </Route>
      <Route path="/results-and-payouts/soccer-13">
        <ResultsPage pool_id={13} />
      </Route>
      <Route path="/results-and-payouts/soccer-4">
        <ResultsPage pool_id={4} />
      </Route>
      <Route path="/results-and-payouts/soccer-13-extra">
        <ResultsPage pool_id={16} />
      </Route>
      <Route path="/results-and-payouts/soccer-12">
        <ResultsPage pool_id={12} />
      </Route>
      <Route path="/top-tips/soccer-6">
        <TipsPage pool_id={6} />
      </Route>
      <Route path="/top-tips/soccer-10">
        <TipsPage pool_id={10} />
      </Route>
      <Route path="/top-tips/soccer-13">
        <TipsPage pool_id={13} />
      </Route>
      <Route path="/top-tips/soccer-4">
        <TipsPage pool_id={4} />
      </Route>
      <Route path="/top-tips/soccer-13-extra">
        <TipsPage pool_id={16} />
      </Route>
      <Route path="/newsitem/PoolOfTheDay">
        <ArticlePage article={"PoolOfTheDay"} />
      </Route>
      <Route path="/newsitem/StoryOfWeek">
        <ArticlePage article={"StoryOfWeek"} />
      </Route>
      <Route path="/newsitem/Profile">
        <ArticlePage article={"Profile"} />
      </Route>
      <Route path="/newsitem/Briefs">
        <ArticlePage article={"Briefs"} />
      </Route>
      <Route path="/newsitem/Tip">
        <ArticlePage article={"Tip"} />
      </Route>
      <Route path="/newsitem/Column">
        <ArticlePage article={"Column"} />
      </Route>
      <Route path="/form-guides/head-2-head">
        <FormGuidePage />
      </Route>
      <Route path="/how-to-play/soccer-4">
        <HowtoPage pool_id={4} />
      </Route>
      <Route path="/how-to-play/soccer-6">
        <HowtoPage pool_id={6} />
      </Route>
      <Route path="/how-to-play/soccer-10">
        <HowtoPage pool_id={10} />
      </Route>
      <Route path="/how-to-play/soccer-13">
        <HowtoPage pool_id={13} />
      </Route>
      <Route path="/how-to-play/soccer-13x">
        <HowtoPage pool_id={16} />
      </Route>
      <Route path="/how-to-play/megastrike">
        <HowtoPage pool_id={12} />
      </Route>
      <Route path="/about-us">
        <InfoPage page={"about-us"} />
      </Route>
      <Route path="/contact-us">
        <InfoPage page={"contact-us"} />
      </Route>
      <Route path="/rules">
        <InfoPage page={"rules"} />
      </Route>
    </div>
  );
};

export default App;
