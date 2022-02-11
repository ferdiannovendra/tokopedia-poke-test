import React, {useState, useEffect, Fragment} from 'react';
import { getAllPokemon, getPokemon } from '../PokemonsContainer';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar/Navbar';
// import './App.css';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);

    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord; 
    }))
    
    setPokemonData(_pokemonData);
  }

//   console.log(pokemonData);

  return (
    <Fragment>

    <div>
      { loading ? <h1>Loading...</h1> : (
        <div className='grid-container'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={pokemon.id} pokemon={pokemon} />
          })}
        </div>
      )}
    </div>
    </Fragment>
    
  )
}

export default Home;
