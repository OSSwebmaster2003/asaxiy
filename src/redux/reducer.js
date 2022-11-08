const initialState = {
  booklist: [],
  products: [],
  cart: [],
  favourites: [],
  liked: false,
};

export const reducer = (state = initialState, action) => {
  let doesItemExist;
  switch (action.type) {
    case "BOOKLIST":
      return {
        ...state,
        booklist: [...action.payload],
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      const beforeItem = state.cart.slice(0, indexItem);
      const afterItem = state.favourites.slice(indexItem + 1);
      return {
        ...state,
        favourites: [...beforeItem, ...afterItem],
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITES":
      const index = state.favourites.findIndex(
        (item) => item.id === action.payload
      );
      const before = state.favourites.slice(0, index);
      const after = state.favourites.slice(index + 1);
      return {
        ...state,
        favourites: [...before, ...after],
      };
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        number: state.cart[action.payload].number++,
      };
    case "DECREMENT_AMOUNT":
      return {
        ...state,
        number: state.cart[action.payload].number--,
      };
    default:
      return state;
  }
};
