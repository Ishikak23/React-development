import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData, key }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card">
      <img
        alt="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        className="res-card-img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
