import taskReducer from './taskReducer'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import logger from 'redux-loger;'



// const defaultMiddleware = getDefaultMiddleware();

// const loggerMiddleware = store => next => action => {
//         console.group(action.type);
//         console.info('dispatch' , action);
//         console.groupEnd(action.type);

//         next(action)
// };



const store = configureStore({
        reducer:{     
           contacts:taskReducer,
        },
        // middleware:[ ...defaultMiddleware,loggerMiddleware],
});

export default store;