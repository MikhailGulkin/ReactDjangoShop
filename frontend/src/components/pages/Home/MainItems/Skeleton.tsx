import React from "react";
import ContentLoader from "react-content-loader";

type SkeletonType = {
  dividerSize: number;
};
export const MyItemsSkeleton: React.FC<SkeletonType> = ({ dividerSize }) => (
  <ContentLoader
    speed={2}
    width={176}
    height={256 / dividerSize}
    viewBox={`0 0 176 ${256 / dividerSize}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="24" y="273" rx="0" ry="0" width="1" height="1" />
    <rect x="1" y="0" rx="24" ry="24" width="176" height={256 / dividerSize} />
  </ContentLoader>
);
