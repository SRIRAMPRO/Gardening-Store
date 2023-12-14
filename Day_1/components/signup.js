import React from 'react'
import bgvideo from '../asscts/signup.mp4';
import bgimg from '../asscts/signup.jpg';
import { Link  } from 'react-router-dom';
export default function Signuppage()
{
    return(
        <section>
      <video autoPlay muted loop id="video-background">
        <source src={bgvideo} type="video/mp4" />
      </video>
            <div className="register">
                <div className="col-1">
                    <h2  > Sign Up</h2>
                    <span>Register Here</span>
                    <form id='form' className="flex flex-col">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="confirm password"/>
                    <input type="text" placeholder="Mobile number"/>
                    <button className="btn">Sign Up</button>
                    <span>
                        Already have an account? <Link to='/signin'> Login</Link>
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

