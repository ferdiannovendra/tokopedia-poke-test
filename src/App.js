import React, {useState, useEffect, Fragment} from 'react';
import { getAllPokemon, getPokemon } from './containers/PokemonsContainer';
import Home from './containers/Home/Home';
import Mypokemon from './containers/Mypokemon/Mypokemon';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './containers/Details/Detail';
import DetailPoke from './containers/DetailPoke/DetailPoke';

function App() {
  // const [pokemonData, setPokemonData] = useState([]);
  // const [nextUrl, setNextUrl] = useState('');
  // const [prevUrl, setPrevUrl] = useState('');
  // const [loading, setLoading] = useState(true);
  // const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await getAllPokemon(initialUrl);
  //     setNextUrl(response.next);
  //     setPrevUrl(response.previous);
  //     await loadingPokemon(response.results);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [])

  // const loadingPokemon = async (data) => {
  //   let _pokemonData = await Promise.all(data.map(async pokemon => {
  //     let pokemonRecord = await getPokemon(pokemon.url);
  //     return pokemonRecord; 
  //   }))
    
  //   setPokemonData(_pokemonData);
  // }

  // console.log(pokemonData);

  return (
    <Router>

    <Fragment>
    <Navbar />
    
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/my'>
        <Mypokemon />
      </Route>
      <Route path='/pokemon/:id'>
        <Details />
      </Route>
    </Switch>
    

    </Fragment>
    </Router>
    
  )
}

export default App;
