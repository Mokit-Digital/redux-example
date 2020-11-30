import { configureStore } from '@reduxjs/toolkit'

import reducerCars from './cars'
import reducerLayout from './layout'
import cartReducer from './cart'
import authReducer from './auth'

export default configureStore({
    reducer: {
        cars: reducerCars,
        layout: reducerLayout,
        cart: cartReducer,
        auth: authReducer
    }
})