import { createSlice } from "@reduxjs/toolkit";


//* Iisialisation of the first state
const initialState = {
    products: [],
  };
  

  //* adding the state
  const createpurchases = createSlice({
    name: "purchases",
    initialState,
    reducers: {
      purchasesadd(state, action) {
        const existingProduct = state.products.find(
          (product) => product.id === action.payload.id,
          (product) => product.total +=1
        );
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.products.push({ ...action.payload, quantity: 1 });
        }
      },
      purchasesreduce(state, action) {
        const productIndex = state.products.findIndex(
          (p) => p.id === action.payload
        );
  
        if (productIndex !== -1) {
          const product = state.products[productIndex];
  
          if (product.quantity > 1) {
            product.quantity -= 1;
          } else {
            state.products.splice(productIndex, 1);
          }
        }
      },
     
    },
  });
  //TODO adding and exporting your action 
  
  export const { purchasesadd, purchasesreduce,purchasestotal } = createpurchases.actions;
  export default createpurchases.reducer;
  