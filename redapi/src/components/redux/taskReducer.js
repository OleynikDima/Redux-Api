import {combineReducers} from 'redux';
// import actionTypes from './taskActionRTypes'
import taskAction from './taskAction';
import {createReducer} from '@reduxjs/toolkit'
import users from '../users'


const newItemObj = (state, action) => {
    return [...state, action.payload]
}
const onRemoveItem = (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
}
const changeFilter = (state,action) => {
    return action.payload;
}


const items = createReducer([],{
    [taskAction.fetchItemSuccess]:(state,action) => action.payload,
    [taskAction.addItemSuccess]: newItemObj,
    [taskAction.removeItemSuccess]: onRemoveItem,
});

const filter = createReducer('', {
    [taskAction.changeFilter]:changeFilter
});


const loading = createReducer(false ,{
    [taskAction.removeItemRequest]:()=> true,
    [taskAction.removeItemSuccess]:()=> false,
    [taskAction.removeItemError]:()=> false,

    [taskAction.fetchItemRequest]:()=> true,
    [taskAction.fetchItemSuccess]:()=> false,
    [taskAction.fetchItemError]:()=> false,

    [taskAction.addItemRequest]:()=> true,
    [taskAction.addItemSuccess]:()=> false,
    [taskAction.addItemError]:()=> false,
})


export default combineReducers({
    loading,
    items,
    filter,
})
