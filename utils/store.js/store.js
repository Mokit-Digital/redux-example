import { createStore, combineReducers } from 'redux'

import reducerCars from './cars'
import reducerLayout from './layout'

const rootReducer = combineReducers({
    cars: reducerCars,
    layout: reducerLayout
})

export default createStore(rootReducer)