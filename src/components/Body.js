import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestrauntList] = useState([]);
  const [filteredRestaurantList, setFilteredRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const jsonRes = await resData.json();
    console.log(jsonRes);
    const resListData =
      jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("res >>", resListData);
    setRestrauntList(resListData);
    setFilteredRestrauntList(resListData);
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
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
      <div className="search-bar-container">
        <input
          className="search-container"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button
          className="search-btn"
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
      <div className="res-card-container">
        {filteredRestaurantList.map((restaurantData) => {
          return (
            <RestaurantCard
              resData={restaurantData.info}
              key={restaurantData.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
