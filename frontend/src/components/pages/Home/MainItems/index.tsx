import React from "react";

import style from './MainItems.module.scss'

export const MainItems: React.FC<{stringClass?: string}> = ({stringClass}) => {
  return (
    <div className={`w-44 h-64 ${stringClass ? stringClass : ''} ${style.root} rounded-lg overflow-hidden`}>
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/300x500"
      />
    </div>
  );
};

