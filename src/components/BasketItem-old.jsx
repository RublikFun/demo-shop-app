function BasketItem(props) {
  const {
    mainId,
    displayName,
    displayAssets,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <div className='collection-item avatar app-basket-item'>
      <img src={displayAssets[0].background} alt={displayName} className='circle' />
      <div className='app-basket-info'>
        <span className='title'>
          <b>{displayName}</b>
        </span>
        <span className='app-basket-qty'>
          <span className='material-icons' onClick={() => decQuantity(mainId)}>
            remove_circle_outline
          </span>
          {quantity}
          <span className='material-icons' onClick={() => incQuantity(mainId)}>
            add_circle_outline
          </span>
        </span>
        <span>{price.finalPrice} coins</span>
      </div>
      <span className='secondary-content'>
        <i className='material-icons grey-text text-darken-4' onClick={() => removeFromBasket(mainId)}>
          close
        </i>
      </span>
    </div>
  );
}

export { BasketItem };

