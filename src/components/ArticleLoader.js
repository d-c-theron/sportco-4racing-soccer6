import React from "react";
import ContentLoader from "react-content-loader";

const ArticleLoader = (props) => (
  <ContentLoader speed={2} width={'100%'} height={215} viewBox="0 0 250 215" backgroundColor="#d7e5d7" foregroundColor="#ededed" {...props}>
    <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
    <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
    <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
  </ContentLoader>
);

export default ArticleLoader;
