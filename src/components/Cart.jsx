import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <button className='btn-floating btn-large indigo accent-2 app-cart' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_basket</i>
      {quantity ? <span className='app-cart-qty'>{quantity}</span> : null}
    </button>
  );
}

export { Cart };
