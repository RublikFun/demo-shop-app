import { createContext, useReducer } from 'react';
import { reducer } from './reduces';

const ShopContext = createContext();

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isBasketShow: false,
  tooltip: '',
};

const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  }

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.hideTooltip = () => {
    dispatch({ type: 'HIDE_TOOLTIP' });
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export {
  ShopContext,
  ContextProvider
}