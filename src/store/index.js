import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './ducks/products';
// import cartReducer from '../ducks/cart;

export default configureStore({
    reducer: {
        products: productsReducer,
        // cart: cartReducer
    }
});