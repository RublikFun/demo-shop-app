function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <button className='btn-floating btn-large indigo accent-2 app-cart' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_basket</i>
      {quantity ? <span className='app-cart-qty'>{quantity}</span> : null}
    </button>
  );
}

export { Cart };

