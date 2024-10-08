import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { Footer } from "../Index";
import { useDispatch, useSelector } from "react-redux";
import { cartProducts, decreaseItemQty, increaseItemQty, removeItem, selectTotalAmount, selectTotalQTY, setClearCartItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(cartProducts);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  const dispatch = useDispatch()
  return (
    <>
      {cartItems?.length === 0 ? <div className="emptyCart dfAc">
        <h1>Cart is empty</h1>
      </div> : <div className="cartContainer">
        <div className="total df-jsb">
          <p>Total:</p><span>{totalAmount}</span>
        </div>
        <div className="necessities">
          <div>
            <Link to={"/"}>Home</Link>
            <div className="fa fa-chevron-right"></div>
            <Link to={"/cart"}>Shopping Cart</Link>
          </div>
          <div className="cartHeader df-jsb-ac">
            <Link to={"/"} className="">
              <div className="fa fa-arrow-left"></div>
              <span style={{ paddingLeft: "1rem" }}>Continue Shopping</span>
            </Link>
            <div className="clearBtn">
              <button onClick={() => dispatch(setClearCartItems())}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="cartCont">
          <div className="cartItemContainer">
            {cartItems.map((cartItem) => {
              let newPrice = (cartItem?.price * cartItem.cartQuantity
              ).toFixed(2);


              return (

                <div className="cartItem" key={cartItem.id}>

                  <div className="image">
                    <img src={cartItem.ima} alt="" />
                  </div>
                  <div style={{ padding: "" }}>
                    <p style={{ fontSize: "2rem" }}>{cartItem.name}</p>
                  </div>
                  <div className="changes">
                    <button
                      onClick={() => {
                        dispatch(decreaseItemQty(cartItem))

                      }}
                    >
                      -
                    </button>
                    <input

                      type="text"
                      disabled
                      value={cartItem.cartQuantity}
                    />
                    <button
                      onClick={() => {
                        dispatch(increaseItemQty(cartItem))
                      }}

                    >
                      +
                    </button>
                  </div>
                  <div className="details">
                    <p>{newPrice}</p>
                    <p style={{ color: "var(--main-color)", fontWeight: "bold" }}>
                      {cartItem.price} x {cartItem.cartQuantity} items
                    </p>
                  </div>
                  <div className="remove">
                    <button
                      onClick={() => {
                        dispatch(removeItem(cartItem))
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>

              );
            })}
          </div>

          <div className="checkOut">
            <div className="orderHeader df-jsb-ac">
              <p>Order Summary </p>
              <p>{totalQTY} items</p>
            </div>
            <div className="df-jsb-ac subtotal">
              <p>Subtotal</p>
              <p>{totalAmount}</p>
            </div>
            <div className="df-jsb-ac subtotal">
              <p>Discount</p>
              <p>10%</p>
            </div>
            <div className="df-jsb-ac subtotal">
              <p>Total</p>
              <p style={{ color: " var(--primary-color)", fontWeight: "500" }}>{(totalAmount - totalAmount / 10).toFixed(2)}</p>
            </div>
            <div className="deliveryCharges">
              <p>Excluding delivery charge</p>
            </div>


            <div className="dfAc checkOutBtnContainer">
              <button className="btn">Continue to Checkout</button>
            </div>
          </div>
        </div>
      </div>}




    </>
  )
}
<Footer />



export default Cart;
