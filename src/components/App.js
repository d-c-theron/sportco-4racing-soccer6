import React from "react";
import Banners from "./Banners";
import Route from "./Route";
import Articles from "./Articles";
import PoolsSummary from "./PoolsSummary"

class App extends React.Component {
  state = {
    PoolOfTheDay: { date: "", title: "", author: "", strap_line: "" },
    StoryOfWeek: { date: "", title: "", author: "", strap_line: "" },
    Profile: { date: "", title: "", author: "", strap_line: "" },
    Briefs: { date: "", title: "", author: "", strap_line: "" },
    Tip: { date: "", title: "", author: "", strap_line: "" },
    Column: { date: "", title: "", author: "", strap_line: "" },
    BannerArray: [],
  };

  componentDidMount() {
    this.loadBanners();
    this.loadArticles();
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

  render() {
    return (
      <div className="large-10 columns">
        <Route path="/">
          <Banners banner_array={this.state.BannerArray} />
          <PoolsSummary/>
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
