import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData, key }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div data-testid={"resCard"} className="m-4 p-4 w-[300px] bg-[#f0f0f0] rounded-lg cursor-pointer hover:shadow-xl">
      <img
        alt="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedWrapper = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-800 text-white m-1 p-2 rounded-md">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
