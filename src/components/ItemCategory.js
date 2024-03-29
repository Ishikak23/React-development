import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const ItemCategory = ({ itemList }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {itemList?.map((item) => {
        const { name, description, imageId, price, defaultPrice } =
          item?.card?.info;
        return (
          <div
            className="flex flex-row justify-between m-2 p-2 order-gray-200 border-b-2 text-left"
            data-testid="resList"
          >
            <div className="flex p-2">
              <label>{name}</label>
              <p> - {price / 100 || defaultPrice / 100}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute right-87">
                <button
                  className="p-2 mx-16 rounded-lg bg-white text-green-600 shadow-lg border border-green-600"
                  onClick={() => handleAddClick(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + imageId} className="w-full h-24 rounded-lg" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCategory;
