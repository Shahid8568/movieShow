import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Showslist = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                setShows(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);
    
    return (
        <div>
            <h1 className='text-center my-4'>Shows</h1>
                <div className="row">
    
                {shows.map(show => (
                    <div className="col-xxl-2 col-xs-4 col-md-4 col-xl-3 showBox" key={show.show.id} >
                        <div className="container">
                     <div className="card" style={{width:"18rem"}}>
                    <div className="card-body" >
                        <h5 className="card-title" >Show Name : {show.show.name}</h5>

                        <p className="card-text">{show.show.summary.slice(0,80)}...</p>

                        <Link  className="btn btn-primary" to={`shows/${show.show.id}`}>Go to Summary</Link>
                    </div>
                  </div>
                  </div>
                </div>
                ))}
        </div>
        </div>
    );};

    export default Showslist