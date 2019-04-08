import React from 'react';
import './index.css';

function Jumbotron() {
    return (
        <div className="container mt-4">
            <div className="jumbotron text-center bg-dark text-white">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and Save Books of Interest</p>
            </div>
        </div>
    );
}

export default Jumbotron;