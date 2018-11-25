import React from 'react';
import './MovieBox.css';
import MovieRating from '../MovieRating/MovieRating'

const MovieBox=(props)=>{
  return(
    <div className='box'>
      <div className='boxHead'>
        <h2>Rating: +{props.obj.ratenb}</h2>
      </div>
      <div className='boxBody'>
        <img src={props.obj.link}/>         
      </div>
      <div className='boxFooter'>
        <h3 className='title'>{props.obj.title}</h3>
      </div>
    </div>
  )
}// img title rat
export default MovieBox;