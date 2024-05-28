import React from 'react'
import YouTube from 'react-youtube'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import  '../Movievideo/movieshow.css'
function Movieshow() {
  const location=useLocation();
  const navigate=useNavigate();
  const {urlId} =location.state || {};
  const {message}=location.state;
  console.log(urlId)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      function gobacktohome(){
        navigate('/')
      }

  return (
    <div>
    <div className="navbar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" class="logo" alt="Netflix Logo" />
    </div>
    <div className="container">
    <div>
      {urlId ? urlId.map((data,index)=>(
        index <10 ? (
         <div>
         <h3 className='ms-2 mt-3'><span>{index+1+"."}</span>{data.name}</h3>
         <YouTube videoId={data.key} opts={opts} className='mt-3' />
        </div>
        ):null
      )):<h2 className='mt-5 text-center mb-5'>{message}</h2>}
    </div>
     <button className='mt-3 mb-4 backbutton' onClick={gobacktohome}>Back to home</button>
    </div>
    </div>
  )
}

export default Movieshow
