import React from 'react'
import bgimg from '../asscts/img3.jpg';
import bgvideo from '../asscts/v3.mp4';

export default function Form()
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
                    </form>
                </div>
               
    

                <div className="col-2">
                    <img src={bgimg} alt="" />
                    </div>


                </div>
            </section>



    )
}
