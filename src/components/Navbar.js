import React from 'react';
import {addMovieToList,handleMovieSearch} from '../actions/index';
// import {data} from '../data';


class Navbar extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            searchText:''
        }
    }

    handleAddtoMovies = (movie) =>{

        this.props.store.dispatch(addMovieToList(movie));

        // this.setState({
        //     showSearchResult:false
        // })
    }


    handleSearch = () =>{

        const {searchText} = this.state;

        this.props.store.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) =>{

        this.setState({
            searchText : e.target.value
        })
    }

 render(){

    

    const {result,showSearchResult} = this.props.search;

    
    return(
        <div className='nav'>
            
            <div className="search-container">
                <input onChange={this.handleChange} placeholder="Search movies"/>
                <button id="search-btn" onClick={this.handleSearch}>Search</button>
            </div>    


            {
                showSearchResult &&
                <div className="search-results">
                    <div className="search-result">
                        <img src={result.Poster} alt="search-pic" />

                        <div className="movie-info">
                            <span>{result.Title}</span>
                            <button onClick={() => this.handleAddtoMovies(result)}>
                                Add To Movies
                            </button>
                        </div>
                    </div>
                </div>

            }
            
        </div>

    );
 }

}

export default Navbar;


