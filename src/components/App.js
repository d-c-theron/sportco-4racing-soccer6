import React from "react";
import Banners from "./Banners";
import Route from "./Route";
import Articles from "./Articles";
import PoolsSummary from "./PoolsSummary";

class App extends React.Component {
  state = {
    PoolOfTheDay: { date: "", title: "", author: "", strap_line: "" },
    StoryOfWeek: { date: "", title: "", author: "", strap_line: "" },
    Profile: { date: "", title: "", author: "", strap_line: "" },
    Briefs: { date: "", title: "", author: "", strap_line: "" },
    Tip: { date: "", title: "", author: "", strap_line: "" },
    Column: { date: "", title: "", author: "", strap_line: "" },
    BannerArray: [],
    S6Pools: [],
    S10Pools: [],
    S13Pools: [],
    S4Pools: [],
    S13XPools: [],
    SMPools: [],
    panel_selected: 1,
  };

  componentDidMount() {
    this.loadBanners();
    this.loadArticles();
    this.loadSummaryPools();
  }

  loadArticles = async () => {
    const articles = (await (await fetch(`/api/GetArticles`)).json()).value;
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (const article of articles) {
      let d = new Date(article.RowKey);
      if (article.PartitionKey === "PoolOfTheDay") {
        this.setState({
          PoolOfTheDay: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "StoryOfWeek") {
        this.setState({
          StoryOfWeek: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Profile") {
        this.setState({
          Profile: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Briefs") {
        this.setState({
          Briefs: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Briefs") {
        this.setState({
          Briefs: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Tip") {
        this.setState({
          Tip: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Column") {
        this.setState({
          Column: {
            date: weekday[d.getDay()] + " " + d.getDate() + " " + monthName[d.getMonth()],
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      }
    }
  };

  loadBanners = async () => {
    const banners = (await (await fetch(`/api/GetBanners`)).json()).value;
    const temp = [];
    for (const banner of banners) {
      temp.push(banner);
    }
    this.setState({ BannerArray: temp });
  };

  loadSummaryPools = async () => {
    console.log("summary pools on the way!");
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
      } else if (summary_pool.PartitionKey.startsWith("Megastrike ")) {
        tempsM.push(summary_pool);
      }
    }
    this.setState({ S6Pools: temps6, S10Pools: temps10, S13Pools: temps13, S4Pools: temps4, S13XPools: temps13X, SMPools: tempsM });
  };

  render() {
    return (
      <div className="large-10 columns">
        <Route path="/">
          <Banners banner_array={this.state.BannerArray} />
          <PoolsSummary
            s6pools={this.state.S6Pools}
            s10pools={this.state.S10Pools}
            s13pools={this.state.S13Pools}
            s4pools={this.state.S4Pools}
            s13Xpools={this.state.S13XPools}
            sMpools={this.state.SMPools}
            panel_selected={this.state.panel_selected}
          />
          <Articles
            pool_of_the_day={this.state.PoolOfTheDay}
            story_of_week={this.state.StoryOfWeek}
            profile={this.state.Profile}
            briefs={this.state.Briefs}
            tip={this.state.Tip}
            column={this.state.Column}
          />
        </Route>
      </div>
    );
  }
}

export default App;
