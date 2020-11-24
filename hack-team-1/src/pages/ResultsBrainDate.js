import React from "react";
import { Link } from "react-router-dom";

const ResultsBrainDate = (props) => {
    return (
        <div className = "results_brain_background">
        {/* <div className = "left_results_container"></div>
        <div className = "right_results_container"></div> */}
        <Link className= "results_link_crossword" to="/engageretro/crossword"></Link>   
        <Link className= "brain-link-left" to="#"></Link>
        <Link className= "brain-link-right" to="#"></Link>
        <Link className= "results-go-again" to="/"></Link>
        
        </div>
        
    );
};

export default ResultsBrainDate;