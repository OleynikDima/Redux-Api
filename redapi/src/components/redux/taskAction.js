// import actionTypes from './taskActionRTypes'
import {createAction} from '@reduxjs/toolkit'

  
const addItemRequest = createAction('contacts/addRequest');
const addItemSuccess = createAction('contacts/addSuccess');
const addItemError = createAction('contacts/addError');

const fetchItemRequest = createAction('contacts/fetchRequest');
const fetchItemSuccess = createAction('contacts/fetchSuccess');
const fetchItemError = createAction('contacts/fetchError');

const removeItemRequest = createAction('contacts/removeRequest');
const removeItemSuccess = createAction('contacts/removeSuccess');
const removeItemError = createAction('contacts/removeError');


// const addTask = createAction('tasks/add', text => ({
// }))


const  changeFilter = createAction('contacts/changeFilter');
const onRemoveItem = createAction('contacts/remove');



export default {
    addItemRequest,
    addItemSuccess,
    addItemError,

    fetchItemRequest,
    fetchItemSuccess,
    fetchItemError,

    removeItemRequest,
    removeItemSuccess,
    removeItemError,
    
    changeFilter,
    onRemoveItem,
}