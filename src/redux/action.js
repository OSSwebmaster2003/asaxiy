export const fetchBooklist = (books) => ({
  payload: books,
  type: "BOOKLIST",
});
export const fetchProducts = (products) => ({
  payload: products,
  type: "FETCH_PRODUCTS",
});
export const addToCart = (product) => ({
  payload: product,
  type: "ADD_TO_CART",
});
export const addToFavourites = (product) => ({
  payload: product,
  type: "ADD_TO_FAVOURITES",
});
export const removeFavourites = (product) => ({
  payload: product,
  type: "REMOVE_FAVOURITES",
});
export const removeCart = (product) => ({
  payload: product,
  type: "REMOVE_FROM_CART",
});
