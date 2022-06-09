function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS': {
      return {
        ...state,
        goods: payload || [],
        isLoading: false,
      };
    }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((orderIndex) => orderIndex.mainId === payload.mainId);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        tooltip: payload.displayName
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        }),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 1 ? newQuantity : 1,
            };
          } else {
            return el;
          }
        }),
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }
    case 'HIDE_TOOLTIP':
      return {
        ...state,
        tooltip: '',
      };
    default:
      return state;
  }
};

export { reducer };