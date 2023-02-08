import React from "react";

class App extends React.Component {
  state = {
    PoolOfTheDay: { date: "", title: "", author: "", strap_line: "" },
    StoryOfWeek: { date: "", title: "", author: "", strap_line: "" },
    Profile: { date: "", title: "", author: "", strap_line: "" },
    Briefs: { date: "", title: "", author: "", strap_line: "" },
    Tip: { date: "", title: "", author: "", strap_line: "" },
    Column: { date: "", title: "", author: "", strap_line: "" },
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = async () => {
    const articles = (await (await fetch(`/api/GetArticles`)).json()).value;
    console.log(articles);
    for (const article of articles) {
      if (article.PartitionKey === "PoolOfTheDay") {
        this.setState({
          PoolOfTheDay: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "StoryOfWeek") {
        this.setState({
          StoryOfWeek: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Profile") {
        this.setState({
          Profile: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Briefs") {
        this.setState({
          Briefs: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Briefs") {
        this.setState({
          Briefs: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Tip") {
        this.setState({
          Tip: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      } else if (article.PartitionKey === "Column") {
        this.setState({
          Column: {
            date: article.RowKey,
            title: article.title,
            author: article.author,
            strap_line: article.strap_line,
          },
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="large-10 columns">
          <div className="row second">
            <div className="large-12 columns">
              <div id="carryover-slider">
                <ul className="bjqs">
                  <li>
                    <a href="https://www.soccer6.co.za/pools-and-matches/soccer13-advanced">
                      <img
                        src="http://www.soccer6.co.za/staticresources/ownverts/_S13_Big-Win-Banner - 2023-02-14.jpg"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.soccer6.co.za/pools-and-matches/soccer13-advanced">
                      <img src="https://www.soccer6.co.za/staticresources/ownverts/_S13_Carry_1 - 2023-02-05.jpg" style={{ height: "100%", width: "100%" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="large-8 columns pools">
            <div className="sectionheader">CURRENT POOLS</div>
            <div>todo</div>
          </div>

          <div className="row fifth">
            <div className="large-4 columns">
              <div className="sectionheader">SOCCER 10 OF THE DAY</div>
              <div className="newsitem">
                <h3>{this.state.PoolOfTheDay.title}</h3>
                <p className="newsdate">
                  {this.state.PoolOfTheDay.date} by {this.state.PoolOfTheDay.author}
                </p>
                <img className="newsimage" src="/images/goal.png" />
                <p className="newsexcerpt">{this.state.PoolOfTheDay.strap_line}</p>
                <a className="button button4R tiny readmorelink" href="/newsitem/PoolOfTheDay/{this.state.PoolOfTheDay.date}">
                  Read More
                </a>
              </div>
              <div className="divider"></div>
              <div className="sectionheader">TOP STORY</div>
              <div className="newsitem">
                <h3>{this.state.StoryOfWeek.title}</h3>
                <p className="newsdate">
                  {this.state.StoryOfWeek.date} by {this.state.StoryOfWeek.author}
                </p>
                <img className="newsimage" src="resources/images/goal.png" />
                <p className="newsexcerpt">{this.state.StoryOfWeek.strap_line}</p>
                <a className="button button4R tiny readmorelink" href="/newsitem/StoryOfWeek/{this.state.StoryOfWeek.date}">
                  Read More
                </a>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
