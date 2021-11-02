import React from 'react';
import {addFavourites,removeFavourites,removeFromList} from '../actions/index';


class MovieCard extends React.Component{


    handleFavourite = () =>{

        const {movie } = this.props;

        this.props.store.dispatch(addFavourites(movie));
    }

    handleUnfavourite = () =>{

        const {movie} = this.props;

        this.props.store.dispatch(removeFavourites(movie));
    }

    handleDelete = () =>{

        const{movie} = this.props;

        this.props.store.dispatch(removeFromList(movie));
    }

 render(){

    const {movie, isFavourite} = this.props;

    return(
        <div className='movie-card'>
            
            <div className='left' >
                <img alt='movie-poster' src={movie.Poster} />
            </div>
            <div className='right'>
                <div className='title'>
                    {movie.Title}
                    <div onClick={this.handleDelete}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png" alt="delete-btn"></img>
                    </div>
                </div>
                <div className='plot'>{movie.Plot}</div>

                <div className='footer'>
                    <div className='rating'>{movie.imdbRating}</div>

                    {
                        isFavourite
                        ? <button className="unfavourite-btn" onClick={this.handleUnfavourite}>Unfavourite</button>
                        :  <button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>
                    }
                    
                </div>
            </div>
        </div>

    );
 }

}

export default MovieCard;

