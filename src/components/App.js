import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banners from "./Banners";
import HomePage from "./HomePage";
import PoolPage from "./PoolPage";
import ResultsPage from "./ResultsPage";
import TipsPage from "./TipsPage";
import ArticlePage from "./ArticlePage";
import FormGuidePage from "./FormGuidePage";
import HowtoPage from "./HowtoPage";
import InfoPage from "./InfoPage";

const App = () => {
  return (
    <div className="large-10 columns">
      <BrowserRouter>
        <Banners />
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="pools-and-matches">
            <Route path="soccer-6" element={<PoolPage pool_id={6} />}></Route>
            <Route path="soccer6-advanced" element={<PoolPage pool_id={6} />}></Route>
            <Route path="soccer-10" element={<PoolPage pool_id={10} />}></Route>
            <Route path="soccer10-advanced" element={<PoolPage pool_id={10} />}></Route>
            <Route path="soccer-13" element={<PoolPage pool_id={13} />}></Route>
            <Route path="soccer13-advanced" element={<PoolPage pool_id={13} />}></Route>
            <Route path="soccer-4" element={<PoolPage pool_id={4} />}></Route>
            <Route path="soccer4-advanced" element={<PoolPage pool_id={4} />}></Route>
            <Route path="soccer-13-extra" element={<PoolPage pool_id={16} />}></Route>
            <Route path="soccer16-advanced" element={<PoolPage pool_id={16} />}></Route>
            <Route path="megastrike" element={<PoolPage pool_id={12} />}></Route>
          </Route>
          <Route path="results-and-payouts">
            <Route path="soccer-6" element={<ResultsPage pool_id={6} />}></Route>
            <Route path="soccer-10" element={<ResultsPage pool_id={10} />}></Route>
            <Route path="soccer-13" element={<ResultsPage pool_id={13} />}></Route>
            <Route path="soccer-4" element={<ResultsPage pool_id={4} />}></Route>
            <Route path="soccer-13-extra" element={<ResultsPage pool_id={16} />}></Route>
            <Route path="megastrike" element={<ResultsPage pool_id={12} />}></Route>
          </Route>
          <Route path="top-tips">
            <Route path="soccer-6" element={<TipsPage pool_id={6} />}></Route>
            <Route path="soccer-10" element={<TipsPage pool_id={10} />}></Route>
            <Route path="soccer-13" element={<TipsPage pool_id={13} />}></Route>
            <Route path="soccer-4" element={<TipsPage pool_id={4} />}></Route>
            <Route path="soccer-13-extra" element={<TipsPage pool_id={16} />}></Route>
          </Route>
          <Route path="how-to-play">
            <Route path="soccer-6" element={<HowtoPage pool_id={6} />}></Route>
            <Route path="soccer-10" element={<HowtoPage pool_id={10} />}></Route>
            <Route path="soccer-13" element={<HowtoPage pool_id={13} />}></Route>
            <Route path="soccer-4" element={<HowtoPage pool_id={4} />}></Route>
            <Route path="soccer-13x" element={<HowtoPage pool_id={16} />}></Route>
            <Route path="megastrike" element={<HowtoPage pool_id={12} />}></Route>
          </Route>
          <Route path="newsitem">
            <Route path="PoolOfTheDay" element={<ArticlePage article={"PoolOfTheDay"} />}></Route>
            <Route path="StoryOfWeek" element={<ArticlePage article={"StoryOfWeek"} />}></Route>
            <Route path="Profile" element={<ArticlePage article={"Profile"} />}></Route>
            <Route path="Briefs" element={<ArticlePage article={"Briefs"} />}></Route>
            <Route path="Tip" element={<ArticlePage article={"Tip"} />}></Route>
            <Route path="Column" element={<ArticlePage article={"Column"} />}></Route>
          </Route>
          <Route path="form-guides">
            <Route path="head-2-head" element={<FormGuidePage />}></Route>
          </Route>
          <Route path="about-us" element={<InfoPage page={"about-us"} />}></Route>
          <Route path="contact-us" element={<InfoPage page={"contact-us"} />}></Route>
          <Route path="rules" element={<InfoPage page={"rules"} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
