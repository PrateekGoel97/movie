import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

// console.log(store);
// console.log(store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{movie:'superman'}]
// })

// console.log('after',store.getState());

ReactDOM.render(<App store={store}/>,document.getElementById('root'));
