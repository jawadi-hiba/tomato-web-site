import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return <div className="Cart"></div>;
};

export default Cart;
