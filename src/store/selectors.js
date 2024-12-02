import { createSelector } from "reselect";

export const selectPurchases = (state) => state.purchases.products;


//*mamorizing the product

export const memoizedPurchases = createSelector(
  [selectPurchases],
  (products) => products
);
