import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResIfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(id);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log("json.data", json.data);
    setResIfo(json.data);
  };

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
              {resItem?.card?.info?.price ||
                resItem?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
