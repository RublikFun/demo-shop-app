import { useContext, useEffect } from 'react';
import { BasketList } from '../components/BasketList';
import { Cart } from '../components/Cart';
import { GoodsList } from '../components/GoodsList';
import { Preloader } from '../components/Preloader';
import { Tooltip } from '../components/Tooltip';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';

function Shop() {
  const { isLoading, order, isBasketShow, tooltip, setGoods } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setGoods(data.shop);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container app-content'>
      <Cart quantity={order.length} />
      {isLoading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {tooltip && <Tooltip />}
    </main>
  );
}

export { Shop };
