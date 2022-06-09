import { GodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3> No goods</h3>;
  }

  return (
    <div className='app-goods'>
      {goods.map((item) => (
        <GodsItem key={item.mainId} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
  );
}

export { GoodsList };

