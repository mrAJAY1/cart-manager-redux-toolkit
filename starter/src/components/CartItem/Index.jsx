import PropTypes from "prop-types";
import { ChevronDown, ChevronUp } from "../../icons";

function CartItem({ item }) {
  const { img, title, price, amount } = item;
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button type='button' className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button type='button' className='amount-btn'>
          <ChevronUp />
        </button>
        <p className='amount'>${amount}</p>
        <button type='button' className='amount-btn'>
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
