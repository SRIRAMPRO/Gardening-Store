import React from 'react'
import bgimg from '../asscts/signin.jpg';
import bgvideo from '../asscts/signin.mp4';
import { Link } from 'react-router-dom';

export default function Signinpage()
{
    return(
        <section>
            <video autoPlay muted loop id="video-background">
        <source src={bgvideo} type="video/mp4" />
      </video>
            <div className="register">
                <div className="col-1">
                    <h2> Sign In</h2>
                    <span>Login Here</span>
                    <form id='form' className="flex flex-col">
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <button className="btn">Login</button>
                    <span>
                        Don't have an account? <Link to="/signup">Create Account</Link>
                    </span>
                    </form>
                </div>
               
    

                <div className="col-2">
                    <img src={bgimg} alt="" />
                    </div>


                </div>
            </section>



    )
}
