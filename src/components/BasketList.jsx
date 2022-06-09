import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <>
      <div className='app-basket-overlay'></div>
      <div className='collection app-basket'>
        <div className='app-basket-head'>
          <h4>Basket</h4>
          <span className='material-icons app-basket-close' onClick={handleBasketShow}>
            close
          </span>
        </div>
        <div className='app-basket-body'>
          {order.length ? (
            order.map((item) => (
              <BasketItem
                key={item.mainId}
                {...item}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
              />
            ))
          ) : (
            <div className='app-basket-empty'>
              <h5>
                Empty <span className='material-icons'>mood_bad</span>
              </h5>
            </div>
          )}
        </div>
        <div className='app-basket-foot'>
          <span>
            Total: <b>{totalPrice}</b> coins
          </span>

          <button className='btn btn-large app-basket-order indigo accent-2' disabled={totalPrice === 0}>
            <b>order</b>
          </button>
        </div>
      </div>
    </>
  );
}

export { BasketList };

