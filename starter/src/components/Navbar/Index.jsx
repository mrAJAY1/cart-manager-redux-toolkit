import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "../../features/cart/cartSlice";
import { CartIcon } from "../../icons";

function Navbar() {
  const { amount, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <nav>
      <div className='nav-center'>
        <h3>Cart with Toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
