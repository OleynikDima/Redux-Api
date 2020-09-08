import axios from 'axios';
import tasksAction from './taskAction';

const addTask = ({text,number}) => dispatch => {
    dispatch(tasksAction.addItemRequest());

    axios.post('http://localhost:3001/contacts', {text,number})
    .then(res => {
        console.log(res.data)
        dispatch(tasksAction.addItemSuccess(res.data));
    })
    .catch(error => dispatch(tasksAction.addItemError(error)));
}




const fetchItems = () => dispatch => {
    dispatch(tasksAction.fetchItemRequest());
    axios
      .get('http://localhost:3001/contacts')
      .then(({data})=> dispatch(tasksAction.fetchItemSuccess(data)))
      .catch(error => dispatch(tasksAction.fetchItemError(error)))
}

const removeItem = id => dispatch => {
    dispatch(tasksAction.removeItemRequest());

    axios
      .delete(`http://localhost:3001/contacts/${id}`)
      .then(()=> dispatch(tasksAction.removeItemSuccess(id)))
      .catch(error => dispatch(tasksAction.removeItemError(error)))
}



export default {
    addTask,
    fetchItems,
    removeItem,
}