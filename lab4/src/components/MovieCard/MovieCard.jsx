import React from 'react'

const MovieCard = ({data}) => {

  if (data.Poster === "N/A") {
    data.Poster = "media/not_found.jpg"
  }

  return (
  <div className='movie_card'>
    <div class="movie_cover">
      <span class="rating">{data.imdbRating}</span>
      <img class="movie_cover" src={data.Poster} alt='poster'/>
    </div>
    <span class="description"> {data.Plot} </span>
    </div>
  )
}

export default MovieCard