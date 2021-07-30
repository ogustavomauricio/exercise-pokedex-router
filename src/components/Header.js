import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
          <header>
            <nav className='App'>
              <h4> Pokedex </h4>              
                <Link className="nav" to="/">Home</Link>
                <Link className="nav" to="/About">About</Link>         
                <Link className="nav" to="/Favorite">Favoritos</Link>         
            </nav>
          </header>
        )
    }
}