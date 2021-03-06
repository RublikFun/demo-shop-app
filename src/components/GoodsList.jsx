import { useContext } from 'react';
import { ShopContext } from '../context';
import { GodsItem } from './GoodsItem';

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3> No goods</h3>;
  }

  return (
    <div className='app-goods'>
      {goods.map((item) => (
        <GodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
