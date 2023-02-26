import React from "react";

const Article = ({ pool_of_the_day, story_of_week, profile, briefs, tip, column }) => {
  return (
    <div>
      <div className="row fifth">
        <div className="large-4 columns">
          <div className="sectionheader">SOCCER 10 OF THE DAY</div>
          <div className="newsitem">
            <h3>{pool_of_the_day.title}</h3>
            <p className="newsdate">
              {pool_of_the_day.date} by {pool_of_the_day.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{pool_of_the_day.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/PoolOfTheDay/{pool_of_the_day.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">TOP STORY</div>
          <div className="newsitem">
            <h3>{story_of_week.title}</h3>
            <p className="newsdate">
              {story_of_week.date} by {story_of_week.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{story_of_week.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/StoryOfWeek/{story_of_week.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">ACE SOCCER 6 POOL</div>
          <div className="newsitem">
            <h3>{profile.title}</h3>
            <p className="newsdate">
              {profile.date} by {profile.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{profile.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Profile/{profile.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">YOU NEED TO KNOW</div>
          <div className="newsitem">
            <h3>{briefs.title}</h3>
            <p className="newsdate">
              {briefs.date} by {briefs.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{briefs.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Briefs/{briefs.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">QUOTES OF WEEK</div>
          <div className="newsitem">
            <h3>{tip.title}</h3>
            <p className="newsdate">
              {tip.date} by {tip.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{tip.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Tip/{tip.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
          <div className="sectionheader">GENERAL</div>
          <div className="newsitem">
            <h3>{column.title}</h3>
            <p className="newsdate">
              {column.date} by {column.author}
            </p>
            <img className="newsimage" src="/images/goal.png" alt="News" />
            <p className="newsexcerpt">{column.strap_line}</p>
            <a className="button button4R tiny readmorelink" href="/newsitem/Column/{column.date}">
              Read More
            </a>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Article;
