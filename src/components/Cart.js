import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const appInfo = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const hanldleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-6 p-10 text-center">
      <h1 className="font-bold text-2xl">Carts</h1>
      <div className="my-2 mx-auto p-4 w-6/12">
        <ItemCategory itemList={appInfo} />
      </div>
      <button
        className="bg-red-600 text-white rounded p-2"
        onClick={hanldleClearCart}
      >
        Clear
      </button>
    </div>
  );
};

export default Cart;
