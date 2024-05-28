import React, { useState } from 'react'
import '../Searchmovie/searchmovie.css'
import axios  from '../Config/axios';
import { imageUrl } from '../Config/urls';
import {useNavigate} from 'react-router-dom'

function Searchmovie() {
   const [movie,setMovie]=useState([])
   const [search,setSearch]=useState('')
   const navigate=useNavigate();
   let displaymessage ='no movie found';

    function searchmovie(){
      axios.get(`/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`).then((response)=>{
        console.log(response.data.results)
        setMovie(response.data.results)
      })
    }

    function getmovie(Id){
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
      <div className="nav">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" class="logoimg" alt="Netflix Logo" />
      </div>
      <div className="container">
      <div className="search-container mt-3 mb-3 ms-2">
      <input type="text" className="search-bar" placeholder="Search Movies..." onChange={(e)=>setSearch(e.target.value)}/>
      <button className="search-button" onClick={searchmovie}>Search</button>
      </div>
        <div className="movieposters">
            {movie ? movie.map((data)=>(
            <img className='movieimage mb-3' onClick={()=>getmovie(data.id)} src={imageUrl+data.backdrop_path} alt="" />
            )):displaymessage}
        </div>
      </div>
    </div>
  )
}


export default Searchmovie;
