import React, { useEffect, useState } from 'react'
import '../Banner/Banner.css'
import axios from '../Config/axios'
import { imageUrl } from '../Config/urls'
function Banner({url}) {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(url).then((response)=>{
      let randnum = Math.floor(Math.random() * 20);
      setMovie(response.data.results[randnum])
    })
  },[url])
  return (
    <div>
        <div className='row'>
      <div className="banner mt-2" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :null})`}}>
      </div>
      </div>
    </div>

  )
}

export default Banner
