import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './ducks/products';
import { cartReducer } from "./ducks/cart/cartSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cartReducer
    }
});