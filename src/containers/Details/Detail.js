import React, {useState, useEffect, Fragment} from 'react';
import { getAllPokemon, getPokemon } from '../PokemonsContainer';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import './cardstyle.css';
import { css, keyframes } from '@emotion/css'

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
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'+ idpoke.id +'/';
  
    useEffect(() => {
        async function fetchData() {
          let response = await getAllPokemon(initialUrl);
          console.log(response);
          setPokemonData(response);    
        }
        fetchData();
      }, [])
    
      
    console.log(pokemonData);
    
  return (
      <Fragment>
    <div className="Card">
            <div className="Card__img">
                <img src={pokemonData.sprites.front_default} 
                    className={css({
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        animation: `${bounce} 1s ease infinite`,
                        transformOrigin: 'center bottom'
                      })}
                  ></img>
            </div>
            <div className="Card__name">
                {pokemonData.name}
            </div>
            
            <div className="Card__types">
                {
                    pokemonData.types.map(type => {
                        return (
                            <div className="Card__type">
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="button">
                <div className="btn">Catch!</div>
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemonData.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemonData.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                        {
                            pokemonData.abilities.map(ab => {
                                return (
                                    <div>
                                        <ul>
                                            <li className="li">{ab.ability.name}</li>
                                        </ul>
                                        
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            
        </div>
        </Fragment>
    
  )
}

export default Details;
