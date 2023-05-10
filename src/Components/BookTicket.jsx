import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';

const BookTicket = () => {

    const { id } = useParams();
    const navigate = useNavigate(); 
    const [show, setShow] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number:'',
      showName: '',
    });
  
    useEffect(() => {
      axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
          setShow(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [id]);
  
    const change = ((e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    })


    const submit =((e)=>{
        e.preventDefault();
        if(!formData.name && !formData.email && !formData.number){
            alert("Please fill the Form to proceed!")
        }
        else if(!formData.name){
            alert("Name can't be Empty!")
        }
        else if(!formData.email){
            alert("Email can't be Empty!")
        }
        else if(!formData.number){
            alert("Number can't be Empty!")
        }
        else{
            navigate('/')
            alert('Ticket booked successfully!');
        }
    })
  
    if (!show) {
      return <div className='container text-center my-5'>Loading...</div>;
    }
  return (
    <div>
      <h1 className='text-center my-4'>Book Ticket</h1>
      <div className="card container my-5">
        <div className="card-body">
          <h5 className="card-title">Book a Ticket for : {show.name}</h5>
          <p><strong>Language :</strong> {show.language}</p>
          <p><strong>Genres :</strong> {show.genres}</p>
          
      </div>

        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Name :-</label>
                <input type="text" name="name" value={formData.name} onChange={change} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputNumber1" className="form-label">Number :-</label>
                <input type="text" name="number" value={formData.number} onChange={change} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address :-</label>
                <input type="email" name="email" value={formData.email} onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
    
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>
        </div>
        </div>
  )
}

export default BookTicket

