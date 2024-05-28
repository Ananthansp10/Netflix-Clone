import React from 'react'
import '../MoviesRows/Movierow.css'
import { useEffect,useState } from 'react'
import axios from '../Config/axios'
import {imageUrl} from '../Config/urls'
import { useNavigate } from 'react-router-dom'
function Movierow(props) {
  const[movie,setMovie]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results)
    })
  },[props.url])

  function handlemovie(Id){
    axios.get(`/movie/${Id}/videos?api_key=${process.env.REACT_APP_API_KEY}`).then((response=>{
      console.log(response.data.results)
      if(response.data.results.length!==0){
        const videolist=response.data.results
        navigate('/movie',{state: {urlId:videolist}});
      }
      else{
        let message="Not Found"
        navigate('/movie',{state: {message:message}});
      }
    })).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <div className="rowpost">
        <h2 className='posttitle'>{props.title}</h2>
        <div className='posters'>
          {movie ? movie.map((movie)=>(
           <img src={imageUrl+movie.backdrop_path} onClick={()=>handlemovie(movie.id)} className={props.issmall ? 'smallimage' : 'image'} alt="" />
          )):null}
        </div>
      </div>
    </div>
        )
      }

export default Movierow
