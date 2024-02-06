import { useState } from "react";
import ItemCategory from "./ItemCategory";

const RestaurantCategory = ({
  index,
  resCategoryData,
  showItem,
  setShowIndex,
}) => {
  const itemCards = resCategoryData?.card?.card?.itemCards;

  const handleClick = () => {
    setShowIndex(index);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-5 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>{resCategoryData?.card?.card?.title}</span>
          <span>{!showItem ? "⬇️" : "⬆️"}</span>
        </div>
        {showItem && <ItemCategory itemList={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
