import React from 'react'
import '../Header/Header.css'
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate=useNavigate();

  function getmovies(){
    navigate('/searchmovies');
  }
  return (
    <div>
      <div class="navbar">
        <div class="navbar-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" class="logo" alt="Netflix Logo" />
        </div>
        <div class="navbar-right">
            <h6 class="text-white">UNLIMITED TV SHOWS & MOVIES</h6>
            <div class="buttons">
                <button class="join-now" onClick={getmovies}>Join Now</button>
                <button class="sign-up">Sign Up</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
