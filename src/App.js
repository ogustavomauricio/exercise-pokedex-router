import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { Header, PokemonDetails } from './components/Index'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pokedex pokemons={pokemons} />
      <PokemonDetails />
    </BrowserRouter>
   );
}

export default App;