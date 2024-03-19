import {combineReducers, createStore } from 'redux'
import {ordersReducer} from './ordersReducer'
import {likesReducer} from './likesReducer'

const rootReducer = combineReducers({
    orders: ordersReducer,
    likes: likesReducer,
})


export const store = createStore(rootReducer)
