import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResIfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log("json.data", json.data);
      setResIfo(json.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
