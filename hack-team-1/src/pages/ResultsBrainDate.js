import React from 'react';
import { Link } from 'react-router-dom';

const ResultsBrainDate = (props) => {
    return (
        <body>
        <div className = "results_brain_background">
        <div className = "left_results_container"></div>
        <div className = "right_results_container"></div>
            <button className ="btn results_container">
                <Link to="/engageretro/crossword"></Link>
            </button>
        </div>
        </body>
    );
};

export default ResultsBrainDate;