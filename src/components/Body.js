import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestrauntList] = useState(resList);
  const [searchText, setSearchText] = useState("");
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
            const searchList = resList.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestrauntList(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-card-container">
        {restaurantList.map((restaurantData) => {
          return (
            <RestaurantCard
              resData={restaurantData.data}
              key={restaurantData.data.uuid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
