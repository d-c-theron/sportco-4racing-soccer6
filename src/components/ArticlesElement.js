import React, { useEffect, useState } from "react";

const ArticlesElement = () => {
  const [PoolOfTheDay, setPoolOfTheDay] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [StoryOfWeek, setStoryOfWeek] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Profile, setProfile] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Briefs, setBriefs] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Tip, setTip] = useState({ date: "", title: "", author: "", strap_line: "" });
  const [Column, setColumn] = useState({ date: "", title: "", author: "", strap_line: "" });

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

  useEffect(() => {
    (async () => {
      loadArticles();
    })();
  }, []);

  return (
    <div>
      <div className="row fifth">
        <div className="large-4 columns">
          <div className="sectionheader">SOCCER 10 OF THE DAY</div>
          <div className="newsitem">
            <h3>{PoolOfTheDay.title}</h3>
            <p className="newsdate">
              {PoolOfTheDay.date} by {PoolOfTheDay.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{PoolOfTheDay.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/PoolOfTheDay/{PoolOfTheDay.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">TOP STORY</div>
          <div className="newsitem">
            <h3>{StoryOfWeek.title}</h3>
            <p className="newsdate">
              {StoryOfWeek.date} by {StoryOfWeek.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{StoryOfWeek.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/StoryOfWeek/{StoryOfWeek.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">ACE SOCCER 6 POOL</div>
          <div className="newsitem">
            <h3>{Profile.title}</h3>
            <p className="newsdate">
              {Profile.date} by {Profile.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{Profile.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Profile/{Profile.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">YOU NEED TO KNOW</div>
          <div className="newsitem">
            <h3>{Briefs.title}</h3>
            <p className="newsdate">
              {Briefs.date} by {Briefs.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{Briefs.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Briefs/{Briefs.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">QUOTES OF WEEK</div>
          <div className="newsitem">
            <h3>{Tip.title}</h3>
            <p className="newsdate">
              {Tip.date} by {Tip.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{Tip.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Tip/{Tip.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">GENERAL</div>
          <div className="newsitem">
            <h3>{Column.title}</h3>
            <p className="newsdate">
              {Column.date} by {Column.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{Column.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Column/{Column.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesElement;
