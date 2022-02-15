import React, {useState, useEffect, Fragment} from 'react';
import { getAllPokemon, getPokemon } from '../PokemonsContainer';
import CardMy from '../../components/CardMy';
import Navbar from '../../components/Navbar/Navbar';
import useLocalStorage from '../../hooks/useLocalStorage';
import './my.css';

function Mypokemon() {
  const getDataList = () => {
    let list = localStorage.getItem('catched');
    if(list) {
        return JSON.parse(list);
    }
    return [];
}

const [datamy, setData] = useState(getDataList);

  // const data = localStorage.getItem('catched');
  // const datamy = JSON.parse(data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("catched",JSON.stringify(datamy));

    async function cek() {
      if (datamy != null) {
        setLoading(false);
      }

    }
    cek();

  }, [])
  console.log(datamy);

  const releasepoke = (id) => {
    console.log(id);
    let newdata = datamy.filter((item) => item.idmypoke !== id);
    setData([...newdata]);

  }
  return (
    <Fragment>

    <div>
      <h1>My Pokemon</h1>
      <div>
        {loading ? <h1>Tidak Ada data...</h1>: (
          <div className='grid-container'>
          {datamy.map((pokemon, i) => {
            return <div className="Card" key={i}>
            <div className="Card__img">
                <img src={pokemon.images} 
                  ></img>
            </div>
            <div className="Card__name">
                {pokemon.name}
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
            </div>
            <div className="button">
                <div className="btnrelease" onClick={()=>releasepoke(pokemon.idmypoke)}>Release!</div>
            </div>
        </div>
            
          })}
        </div>
        )}
        
    </div>
    </div>
    </Fragment>
    
  )
}

export default Mypokemon;
