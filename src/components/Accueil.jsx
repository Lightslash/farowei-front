import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './accueil.css';

class Accueil extends Component {
    render() {
        return(
            <header className='headerAccueil'>
                <div className='h-100 w-100 position-relative d-flex flex-column align-items-center justify-content-center divHeaderAccueil'>
                    <Fade bottom>
                        <h1 className='display-4 text-white titleAccueil'>Predictiviz</h1>
                    </Fade>
                    <a href='#containerLink'><span className='position-absolute text-white arrowScrollDown'><i className="fas fa-chevron-circle-down"></i></span></a>
                </div>
            </header>
        )
    }
}

export default Accueil;