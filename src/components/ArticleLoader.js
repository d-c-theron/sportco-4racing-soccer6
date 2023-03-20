import React from "react";
import ContentLoader from "react-content-loader";

const ArticleLoader = (props) => (
  <ContentLoader speed={2} width={"100%"} height={213} viewBox="0 0 240 213" backgroundColor="#d7e5d7" foregroundColor="#ecebeb" {...props}>
    <rect x="3" y="60" rx="3" ry="3" width="410" height="6" />
    <rect x="305" y="91" rx="3" ry="3" width="380" height="6" />
    <rect x="64" y="76" rx="3" ry="3" width="178" height="6" />
    <rect x="3" y="3" rx="0" ry="0" width="317" height="48" />
    <rect x="229" y="29" rx="0" ry="0" width="18" height="0" />
    <rect x="5" y="74" rx="0" ry="0" width="53" height="59" />
    <rect x="66" y="93" rx="3" ry="3" width="178" height="5" />
    <rect x="63" y="111" rx="3" ry="3" width="178" height="5" />
    <rect x="68" y="128" rx="3" ry="3" width="178" height="5" />
    <rect x="5" y="146" rx="3" ry="3" width="410" height="6" />
    <rect x="9" y="163" rx="3" ry="3" width="410" height="6" />
    <rect x="141" y="185" rx="0" ry="0" width="94" height="28" />
  </ContentLoader>
);

export default ArticleLoader;
