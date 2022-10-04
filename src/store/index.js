import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

const INITIAL_STATE = 
    axios.get("https://my-simple-ecommerce-api.herokuapp.com/")
        .then(response => response.data)
        .catch(error => console.log(error))


function reducer(state = INITIAL_STATE, action){
    return state
}

const store = configureStore({
    reducer: {
        reducer
    }
});

export default store;


