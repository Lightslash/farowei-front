import React, { Component } from 'react';
import './containerGraph.css';
import { NavLink} from 'react-router-dom';

class ContainerGraph extends Component {
    render() {
        return(
            <div>
                <NavLink exact to="/"><span className='barre'> Plots </span></NavLink>
                <NavLink to="/analysismethod"><span className='barre'> Analysis Method </span></NavLink>
                <NavLink to="/correlationwbdata"><span className='barre'> Correlation WB data </span></NavLink>
                <NavLink to="/causalityanalysis"><span className='barre'> Causality Analysis </span></NavLink>
                <NavLink to="/predictionanalysis"><span className='barre'> Prediction Analysis </span></NavLink>
            </div>
        )
    }
}

export default ContainerGraph;