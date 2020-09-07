import {configureStore} from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from "redux";
import taskReducer from './taskReducer'

const store = createStore({
    reducer:{
      contacts:taskReducer
    }, applyMiddleware(th)
})


export default store;