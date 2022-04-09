import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default function Instructions () {return (
    <React.Fragment>
        <Helmet><title>Quiz Instructions</title></Helmet>
        <div id="Instructions">
            <section>
            <div className="instructions container">
            <h1>Rules</h1>
            <p>Ensure you read this guide from start to finish</p>
            <ul className='browser-default' id="main-list">
                <li>The game has a duration 15 minutes and ends as soon as your time elapases</li>
                <li>Each game consist of 15 questions</li>
                <li>Every question contains 4 options.</li>
                <li>Select the option which best answers the question by clicking (or selecting) it.</li>
            </ul>
            </div>
            <div className='buttons-container'>
            <Link to="/"className='buttons' id='back-button'>Back</Link>
                <Link to="/play" className='buttons' id='confirm-button'>Confirm</Link>
    
            </div>
            </section>
        </div>
        
    </React.Fragment>
);
};
