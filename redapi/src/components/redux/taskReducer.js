import {combineReducers} from 'redux';
// import actionTypes from './taskActionRTypes'
import taskAction from './taskAction';
import {createReducer} from '@reduxjs/toolkit'
import users from '../users'


const newObj = (state, action) => {
    return [...state, action.payload.contacts]
}
const onRemoveItem = (state, action) => {
    return state.filter(contact => contact.id !== action.payload)
}
const changeFilter = (state,action) => {
    return action.payload;
}


const items = createReducer(users,{
    [taskAction.newObj]: newObj,
    [taskAction.onRemoveItem]: onRemoveItem,
});

const filter = createReducer('', {
    [taskAction.changeFilter]:changeFilter
});



export default combineReducers({
    items,
    filter,
})
