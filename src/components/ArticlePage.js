import React, { useEffect, useState } from "react";

const ArticlePage = ({ article }) => {
  const [Article, setArticle] = useState({});
  const unbundle_category = (category) => {
    switch (category) {
      case "PoolOfTheDay":
        return "SOCCER 10 POOL OF THE DAY";
      case "StoryOfWeek":
        return "TOP STORY";
      case "Profile":
        return "ACE SOCCER 6 POOL";
      case "Briefs":
        return "YOU NEED TO KNOW";
      case "Tip":
        return "QUOTES OF WEEK";
      case "Column":
        return "GENERAL";
      default:
        return null;
    }
  };

  useEffect(() => {
    (async () => {
      const loadArticle = async () => {
        const temp = (await (await fetch(`/api/GetArticle/${article}`)).json()).value[0];
        setArticle(temp);
      };
      loadArticle();
    })();
  }, [article]);

  return (
    <div className="row second">
      <div className="large-12 columns">
        <div class="panel">
          <h3>{Article.title}</h3>
          <h5>{unbundle_category(Article.PartitionKey)}</h5>
          <h5>By {Article.author}</h5>
          <p dangerouslySetInnerHTML={{ __html: Article.content }} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
