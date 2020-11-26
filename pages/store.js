import { createStore, combineReducers } from 'redux'

import reducerCars from './cars'

const rootReducer = combineReducers({
    cars: reducerCars
})

export default createStore(rootReducer)