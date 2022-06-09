import { useEffect, useState } from 'react';
import { BasketList } from '../components/BasketList';
import { Cart } from '../components/Cart';
import { GoodsList } from '../components/GoodsList';
import { Preloader } from '../components/Preloader';
import { Tooltip } from '../components/Tooltip';
import { API_KEY, API_URL } from '../config';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [tooltip, setTooltip] = useState('');

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const hideTooltip = () => {
    setTooltip('');
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderIndex) => orderIndex.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }

    setTooltip(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 1 ? newQuantity : 1,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container app-content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLoading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {tooltip && <Tooltip name={tooltip} hideTooltip={hideTooltip} />}
    </main>
  );
}

export { Shop };

