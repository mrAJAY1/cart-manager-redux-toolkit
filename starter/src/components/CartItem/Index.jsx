import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../../icons";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { img, title, price, amount, id } = item;
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          type='button'
          className='remove-btn'
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type='button'
          className='amount-btn'
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          type='button'
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ id }));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    amount: PropTypes.number,
  }),
};

export default CartItem;
