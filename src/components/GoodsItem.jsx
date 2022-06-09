function GodsItem(props) {
  const { mainId, displayName, displayDescription, displayAssets, price, addToBasket = Function.prototype } = props;

  return (
    <div className='card' id={mainId}>
      <div className='card-image'>
        <img src={displayAssets[0].background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <span className='price'>
          <span>{price.finalPrice}</span>
          coins
        </span>
        <button
          className='right btn btn-small indigo accent-2'
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              displayAssets,
              price,
            })
          }>
          Buy
          <i className='material-icons right'>shopping_cart</i>
        </button>
      </div>
    </div>
  );
}

export { GodsItem };

