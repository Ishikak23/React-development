import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestrauntList] = useState([]);
  const [filteredRestaurantList, setFilteredRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const jsonRes = await resData.json();
    const resListData =
      jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestrauntList(resListData);
    setFilteredRestrauntList(resListData);
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline, Please check your internet connection.
      </h1>
    );
  }
  return (
    <div className="body-container">
      {/* <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestrauntList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div> */}
      <div className="m-4 p-4">
        <input
          className="border border-solid border-black"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const searchList =
              searchText != ""
                ? restaurantList.filter((res) =>
                    res?.info?.name
                      ?.toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                : restaurantList;
            setFilteredRestrauntList(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurantData) => {
          return (
            <Link
              to={`/restaurant/${restaurantData.info.id}`}
              style={{ textDecoration: "none", color: "black" }}
              key={restaurantData.info.id}
            >
              <RestaurantCard resData={restaurantData.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
