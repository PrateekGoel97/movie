import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';


// const logger = function({dispatch,getState}){   // obj here recieved will have dispatch and getstate

//     return function (next){

//         return function (action){
//                 console.log(action.type);
//                 next(action);
//         }
//     }
// }

const logger = ({dispatch,getState}) => (next) => (action) =>{

    if(typeof action !== 'function'){
        console.log('Action_type',action.type);
    }

    next(action);
}


// const thunk = ({dispatch,getState}) => (next) => (action) =>{

//     if(typeof action === 'function'){
//         console.log('action',action);
//         action(dispatch);
//         return;
//     }

//     next(action);
// }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));


// export const StoreContext = createContext();


// class Provider extends React.Component{


//     render(){

//         const {store} = this.props;

//         return <StoreContext.Provider value={store}> 
//           {this.props.children}
//         </StoreContext.Provider>
//     }
// }


// console.log(store);
// console.log(store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{movie:'superman'}]
// })

// console.log('after',store.getState());

// console.log(storeContext);

ReactDOM.render(
   
        <App store={store}/>
  
    ,
    document.getElementById('root')
);
