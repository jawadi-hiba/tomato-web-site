import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./cart.css";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (item && item._id && cartItems[item._id] > 0) {
            return (
              <div key={index} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <button onClick={() => handleRemoveFromCart(item._id)}>
                  Remove
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
