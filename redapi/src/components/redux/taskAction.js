// import actionTypes from './taskActionRTypes'
import {createAction} from '@reduxjs/toolkit'
const shortid = require('shortid');


const  changeFilter = createAction('contacts/changeFilter');
const onRemoveItem = createAction('contacts/remove');
const newObj = createAction('contacts/addContact', ({text,number}) => ({
    payload:{
        contacts:{
            id:shortid(),
            text,
            number,
        }
    }
}));


export default {
    changeFilter,
    newObj,
    onRemoveItem,
}