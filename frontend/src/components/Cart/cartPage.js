import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import "./cartPage.css"
import products from "../../productData.js"

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import Button from "../Button/Button";

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
        <h1>Кошик</h1>
        {cart?.map((data) => (
          <div className="cartItem">
            <img className="cart-img" src={data.img}></img>

            <div className="cartItemInfo">
              <p>{data.name}</p>
              <p>{data.price} грн </p>
              <p>{data.weight}</p>
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
              {data.price * data.quantity} грн
            </div>

          </div>
        ))

        }
      </div>

      <div className="cartSummary">
        <h1>Замовлення</h1>
        <div className="total">До сплати: {totalPrice} грн</div>
        <button className="btn btnOrder">Оформити</button>
      </div>

    </div>
  );
};

export default CartPage;
