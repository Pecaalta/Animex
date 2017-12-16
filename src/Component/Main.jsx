import React, { Component } from 'react';
import Data from './Data';
import Cover from './Cover';
/**
          <Enaces/>
          <Commentary/>
 */
//--  Sector Main  -->
class Main extends Component {
	render() {
    if (this.props.data !== undefined){
      document.body.style.background = "url(" + "https://image.tmdb.org/t/p/w1920"+this.props.data.backdrop_path + ")";      
      return (
        <div className="container">
          <div className="row">
            <Data data = { this.props.data }/>
            <Cover src = { this.props.data.poster_path }/>
          </div>
        </div>
      );
    }
  }
}
export default Main;