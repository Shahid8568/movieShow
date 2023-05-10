import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const Summary = () => {

  const { id } = useParams();
  const [showData, setShowData] = useState('');

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShowData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='container'>
      <h1 className='text-center my-5'>Show Summary</h1>
      <div className="card container my-5">
        <div className="card-body">
          <h5 className="card-title">Show Name : {showData.name}</h5>

          {/* API Was not able to get image for all shows so skips adding images */}

          {/* <img  src={showData.image?.medium} className="card-img-top mb-3 showImg" alt={showData.name} /> */}

          <p><strong>Summary : </strong> {showData.summary}</p>
          <div className="d-flex mt-5 justify-content-between">
          <Link  className="btn btn-primary" to="/">Back to Shows</Link>
          <Link  className="btn btn-primary " to={`/${id}`} >Book Ticket</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary

