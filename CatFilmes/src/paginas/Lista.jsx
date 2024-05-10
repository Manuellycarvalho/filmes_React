import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Componentes/Card';
import estilos from './Lista.module.css'

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios
      .get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => {
        console.log('Atributos possíveis do filme:', Object.keys(response.data.results[0]));
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (   
      <figure>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}           
          />
        ))}
      </figure>
    
   
  );
}
