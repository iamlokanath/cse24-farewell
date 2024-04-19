import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css';
const Home = () => {
  return (
    <>
    <div className="section">
        <div className="content">
            <div className="info">
                <p>

                   
                    Dear Seniors,
                    <br />
                    <br />
                    As the pages turn and the time comes to bid adieu, we, your juniors from the Department of Computer
                    Science and Engineering, are honored to extend this invitation to an unforgettable <span className="movie-night">farewell</span>,
                    gathering in your honor. Join us on April 21, 2024, at the Seminar Hall, as we come together to
                    celebrate the profound impact you've had on our journey.
                    <br />
                    <br />
                    Date: April 21, 2024
                    <br />
                    Venue: Seminar Hall
                    <br />
                    Time: 2:30 PM
                </p>
                <button className="btn"> <Link to = "/testimonials" className='click'>Click Here</Link></button>
            </div>
        </div>

        <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>


    </div>
    </>
  )
}

export default Home
