import { combineReducers } from 'redux';
import {ADD_MOVIES , ADD_FAVOURITES, REMOVE_FAVOURITES, SHOW_FAVOURITES , ADD_MOVIE_TO_LIST ,ADD_SEARCH_RESULT, DELETE_FROM_LIST} from '../actions/index';


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
        
        case ADD_MOVIE_TO_LIST :
                        return {
                            ...state,
                            list: [ action.movie , ...state.list]
                        }

        case DELETE_FROM_LIST :
                            return{
                                ...state,
                                favourites : state.favourites.filter(item => item !== action.movie),
                                list : state.list.filter(item => item !== action.movie)
                            }
        
        default: return state;
    }
 }
    

   const intialSearchState ={
        result:{},
        showSearchResult:false
    } ;
 
     export function search(state = intialSearchState , action){
         

        switch(action.type){

            case ADD_SEARCH_RESULT:
                       {


                //  console.log('inside reducer',action.movie);
                    return {
                        ...state,
                        result:action.movie,
                        showSearchResult:true
                    }
                }


                case ADD_MOVIE_TO_LIST :
                        return {
                            ...state,
                           showSearchResult:false
                        }
                
            default: return state;
        }


     }

//    const intialRootState = {
//         movies:initialMovieState,
//         search : intialSearchState
//     }


    export default combineReducers({
        movies,
        search
    })