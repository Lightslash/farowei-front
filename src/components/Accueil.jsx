import React, { Component } from 'react';
import './accueil.css';

class Accueil extends Component {
    render() {
        return(
            <header className='headerAccueil'>
                <div className='h-100 w-100 position-relative d-flex flex-column align-items-center justify-content-center divHeaderAccueil'>
                    <h1 className='display-4 text-white titleAccueil'>Predictiviz</h1>
                    <span className='position-absolute text-white arrowScrollDown'><i className="fas fa-chevron-circle-down"></i></span>
                </div>
            </header>
        )
    }
}

export default Accueil;