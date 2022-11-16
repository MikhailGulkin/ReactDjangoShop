import React from "react";
import { Plus } from "@/components/ui/svg/Plus";

import style from "./RemoveItem.module.scss";
import utilsStyle from "../utilsComponents.module.scss";

export const RemoveItem: React.FC = () => {
  return (
    <div className={`${style.buttonRemove} ${utilsStyle.buttonCircle}`}>
      <Plus />
    </div>
  );
};
