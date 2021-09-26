import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';
import React from 'react';

import {addMovies,showFavourites} from '../actions/index';


class App extends React.Component {


  componentDidMount(){

    this.props.store.subscribe(() =>{
    
      this.forceUpdate();
    })

    this.props.store.dispatch(addMovies(data));

  }

  isFavourite  = (movie) =>{

    const {favourites} = this.props.store.getState();

      const index  = favourites.indexOf(movie);  // returns -1 id data is not found

      if(index === -1){
        return false;
      }

      return true;
  }

  onChangeTab = (val) =>{

    this.props.store.dispatch(showFavourites(val));
  }


render(){
  
      const {list,favourites,showFavourites} = this.props.store.getState();  // list:[] , favourites:[]

      const display = showFavourites ? favourites:list;

      console.log('render', this.props.store.getState());
      return (
        <div className="App">
          <Navbar />

            <div className="main">

                <div className="tabs">

                <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
                <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={() => this.onChangeTab(true)}> Favourites</div>
            </div>

            <div className="list">

              {
                display.map((movie,index) =>{
                  return < MovieCard movie={movie}
                   key={`movie-${index}`}
                   store={this.props.store}
                   isFavourite ={this.isFavourite(movie)}
                   />
                })
              }

            </div>

          </div>
        </div>
      );
}
}

export default App;
