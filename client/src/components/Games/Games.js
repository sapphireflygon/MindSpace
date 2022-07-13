import {Link} from "react-router-dom"
import React from "react"
import Jigsaw from './jigsaw.jpg'
import B4 from './b4.jpg'
import './gameHome.css'
import {Helmet} from 'react-helmet';

function Games() {

    return(

        <div className="play-home">
        
            <Helmet>
                <title>
                    Wellbeing - Play
                </title>
            </Helmet>

        <div id="play-title">
        <h1> Choose your game </h1>
        </div>
            
            <div className="jigsaw-container">
                <img className="jigsaw-image" src={Jigsaw} height="600px" width="600px"/>
                <div className="jigsaw-middle">
                    <Link to="/jigsaw" className="jigsaw_text"> JIGSAW </Link>
                </div>  
            </div>

            
            <div className="bubble-container">
                <img className="bubble-imgage" src={B4} height="600px" width="600px"/>
                <Link to="/bubbles"> </Link>
            </div>
        </div>
    )
}
export default Games;