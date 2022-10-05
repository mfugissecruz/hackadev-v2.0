import axios from "axios";

export default axios.create({
    baseURL: 'https://my-simple-ecommerce-api.herokuapp.com/',
})