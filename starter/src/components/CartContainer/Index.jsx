import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../features/cart/cartSlice";
import { openModal } from "../../features/modal/modalSlice";
import CartItem from "../CartItem/Index";

function CartContainer() {
  const { cartItems, total, amount, isLoading } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is Currently empty</h4>
        </header>
      </section>
    );
  }
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type='button'
          className='btn clear-btn'
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
