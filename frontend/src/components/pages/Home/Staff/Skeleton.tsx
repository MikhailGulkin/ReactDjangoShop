import React from "react";
import ContentLoader from "react-content-loader";

export const StaffSkeleton: React.FC = () => (
  <div className="p-4 lg:w-1/2">
    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <ContentLoader
        speed={2}
        width={730}
        height={192}
        viewBox="0 0 730 192"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="24" y="273" rx="0" ry="0" width="1" height="1" />
        <rect x="2" y="-3" rx="24" ry="24" width="192" height="192" />
        <rect x="215" y="24" rx="6" ry="6" width="116" height="27" />
        <rect x="258" y="108" rx="0" ry="0" width="0" height="1" />
        <rect x="215" y="56" rx="3" ry="3" width="116" height="11" />
        <rect x="215" y="91" rx="6" ry="6" width="201" height="37" />
        <circle cx="229" cy="164" r="14" />
        <circle cx="271" cy="164" r="14" />
        <circle cx="317" cy="165" r="15" />
      </ContentLoader>
    </div>
  </div>
);
