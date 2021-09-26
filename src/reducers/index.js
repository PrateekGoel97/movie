
import { combineReducers } from 'redux';
import {ADD_MOVIES , ADD_FAVOURITES, REMOVE_FAVOURITES, SHOW_FAVOURITES } from '../actions/index';


const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}


export function movies(state = initialMovieState , action){

    switch(action.type){

        case ADD_MOVIES: 
                    return {
                            ...state,
                            list:action.movies
                    };

        case ADD_FAVOURITES:
                    return {
                        ...state,
                        favourites: [action.movie, ...state.favourites]
                    };
        
        case REMOVE_FAVOURITES: 
                        return {
                            ...state,
                            favourites : state.favourites.filter(item => item !== action.movie)
                        };

        case SHOW_FAVOURITES:
                        return {
                            ...state,
                            showFavourites:action.val
                        }
        
        default: return state;
    }
 }
    

   const intialSearchState ={
        result:{}
    } ;

     export function search(state = intialSearchState , action){

        return state;
    }

   const intialRootState = {
        movies:initialMovieState,
        search : intialSearchState
    }


    export default combineReducers({
        movies,
        search
    })

