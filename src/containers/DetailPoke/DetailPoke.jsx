import React, {useState, useEffect, Fragment, Component} from 'react';
import { getAllPokemon, getPokemon } from '../PokemonsContainer';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import './cardstyle.css';
import { css, keyframes } from '@emotion/css';
import axios from 'axios';

const Detailsss =()=> {
  const params  = useParams();
  console.log(params);
  return params;
}
class Details extends Component {

    state = {
        detail: []
    }
    
    componentDidMount() {
      console.log(this.props);
    }
      
  
  render () {
    return (
        <Fragment>
            <h1>Detail</h1>
          <div className="Card">
          {/* {pokemonData.sprites.front_shiny}  */}
            <div className="Card__name">
                {/* {pokemonData.name}  */}
            </div>
            
            
            
        </div>
        </Fragment>
    
    )
  }
}

export default Details;
