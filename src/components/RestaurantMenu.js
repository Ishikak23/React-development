import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const resMenuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;
  console.log("res menu item", resMenuItems);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>

      <ul>
        {resMenuItems?.map((resItem) => {
          return (
            <li>
              {resItem?.card?.info?.name} :{" "}
              {resItem?.card?.info?.price / 100 ||
                resItem?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
