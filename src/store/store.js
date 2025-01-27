import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'
import formReducer from './form/formSlice.js'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        productr: productReducer,
        formRed: formReducer,
    },
})

export default store;