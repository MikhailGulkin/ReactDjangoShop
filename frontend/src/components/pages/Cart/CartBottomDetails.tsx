import React from "react";

export const CartBottomDetails: React.FC = () => {
  return (
    <div className="flex justify-between mt-12 mb-5">
      <span>
        Всего пицц: <b>1 шт.</b>
      </span>
      <span>
        Сумма заказа: <b>395 ₽</b>
      </span>
    </div>
  );
};
