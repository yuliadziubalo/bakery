import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import "./cartPage.css"

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="container cart">
      <div className="cartItems">
        {cart?.map((data) => (
          <div className="cartItem">
            <img className="cart-img" src={data.img}></img>

            <div className="cartItemInfo">
              <p>{data.title}</p>
              <p>{data.title}</p>
            </div>

            <div className="cartButtons">
              <button className="btn btnCart" onClick={() =>
                dispatch(decreaseItemQuantity(data.id))}>
                <FaMinus size={12}/>
              </button>
              <div className="cartItemQuantity">
                {data.quantity}
              </div>

              <button className="btn btnCart" onClick={() =>
                dispatch(increaseItemQuantity(data.id))}>
                <FaPlus size={12}/>
              </button>

              <button className="btn btnCart" onClick={() =>
                dispatch(removeItem(data.id))}>
                <FaTrash size={15}/>
              </button>
            </div>

            <div className="carItemtPrice">
              {data.price * data.quantity}
            </div>

          </div>
        ))

        }
      </div>

      <div className="cartSummary">
        <span>
          <strong>{totalPrice}</strong>
        </span>
      </div>

    </div>
  );
};

export default CartPage;
