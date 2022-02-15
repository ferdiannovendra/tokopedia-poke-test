import React from "react";
import './cardstyle.css';
import { css, keyframes } from '@emotion/css'
import { Link } from 'react-router-dom';
import { printIntrospectionSchema } from "graphql";

function Card({pokemon},) {
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
            <Link to={`/pokemon/${pokemon.id}`}>
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
            </Link>
            
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
            </div>
            <div className="button">
                <div className="btnrelease">Release!</div>
            </div>
        </div>
    )
}
export default Card;
