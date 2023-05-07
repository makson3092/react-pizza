import React from "react";
import ContentLoader from "react-content-loader";

const Load = () => (
  <ContentLoader
    viewBox="0 0 300 160"
    height={160}
    width={200}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="56" r="8" />
    <circle cx="194" cy="56" r="8" />
    <circle cx="238" cy="56" r="8" />
  </ContentLoader>
);

export default Load;
