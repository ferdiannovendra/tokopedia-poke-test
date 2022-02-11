import React from "react";
import './cardstyle.css';
import { css, keyframes } from '@emotion/css'

function Card({pokemon}) {
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
      
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} 
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
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type">
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
            {/* <div className="button">
                <div className="btn">Catch!</div>
            </div> */}
        </div>
    )
}
export default Card;
