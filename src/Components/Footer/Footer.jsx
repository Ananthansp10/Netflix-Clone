import React from 'react'
import '../Footer/footer.css'
import {useNavigate} from 'react-router-dom'

function Footer() {

    const navigate=useNavigate();

    function gotonextpage(){
        navigate('/searchmovies')
    }
  return (
    <div>
      <div className="footcontainer">
        <div className="">
            <h2 className=''>There’s even more to watch.</h2>
            <h3>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</h3>
            <div className="joinbutton">
                <button onClick={gotonextpage}>Join Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
