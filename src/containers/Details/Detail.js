import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import './cardstyle.css';
import { css, keyframes } from '@emotion/css';
import Axios from 'axios';
import useLocalStorage from '../../hooks/useLocalStorage';

function Details() {
    const bounce = keyframes({
        'from, 20%, 53%, 80%, to': {
          transform: 'translate3d(0,0,0)'
        },
        '40%, 43%': {
          transform: 'translate3d(0, -20px, 0)'
        },
        '70%': {
          transform: 'translate3d(0, -15px, 0)'
        },
        '90%': {
          transform: 'translate3d(0, -4px, 0)'
        }
      })
      
    const { id } = useParams();
    var idpoke = { id };
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [pokedata, setPokeData] = useLocalStorage("catched",[]);

    const catchPoke = () => {
      var isoke = false;
      const nextId = pokedata.length > 0 ? Math.max(...pokedata.map((t) => t.id)) +1 : 0;
      const random = Math.floor(Math.random() * 2);
      console.log("nextid : " + nextId);
      console.log("random : " + random);
      if (random == 1) {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${idpoke.id}/`)
        .then((response) => {
          setPokeData([...pokedata,{
            idmypoke:nextId,
            id:response.data.id,
            name: response.data.name,
            images: response.data.sprites.front_default,
            weight: response.data.weight,
            height: response.data.height
          }])
        });
        alert('Catch Success!')
      }else{
        alert('Catch Failed')
      }
      
    }

    const findPokemon = () => {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${idpoke.id}/`)
      .then((response) => {
        setPokemon({
          name: response.data.name,
          images: response.data.sprites.front_default,
          weight: response.data.weight,
          height: response.data.height
        })
      });
      
    };
    findPokemon();
    return (
      <Fragment>
          <div className="Card">
            <div className="Card__img">
                <img src={pokemon.images} 
                    className={css({
                        width: 96,
                        height: 96,
                        borderRadius: '50%',
                        animation: `${bounce} 1s ease infinite`,
                        transformOrigin: 'center bottom'
                      })}
                  ></img>
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight : </p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height : </p>
                    <p>{pokemon.height}</p>
                </div>
            </div>
            <div className="button">
                <div className="btn" onClick={catchPoke}>Catch!</div>
            </div>
        </div>
        </Fragment>
    
  )
}

export default Details;
