import React from 'react';
import {Helmet} from 'react-helmet'
import DramaMasksIcon from 'mdi-react/DramaMasksIcon';
import { Link } from 'react-router-dom';

export default function Home () {
  return (
    <React.Fragment>
      <Helmet><title>Quiz app</title></Helmet>
      <div id="home">
        <section>
            <div>
                <DramaMasksIcon className="mask-icon" size={100}  spin={true}/>
            </div>
            <h1>Quiz App</h1>
            <div className="play-button-container">
                <ul>
                    <li><Link to="/play/instructions">Play</Link></li>
                </ul>
            </div>    
            <div className='auth-container'>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </section>
      </div>

    </React.Fragment>
    
  );
};
