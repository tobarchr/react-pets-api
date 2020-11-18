import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OnePet = props => {
    const [onePet, setOnePet] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setOnePet(res.data.pet))
    })

    const removePet = _id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <Link to="/" className="nav_bar"><h4>back to home</h4></Link>
            <button type="submit" className="btn btn-danger mb-3" onClick={() => removePet(onePet._id)}>Adopt {onePet.name}</button>
            <h3 className="sub_header">Details about: {onePet.name}</h3> 
            <div className="border border-dark ">
            <div class="row">
                <div class="col">
                    <h4>Pet Type:</h4>
                </div>
                <div class="col-5">
                    <p>{onePet.type}</p>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>Description:</h4>
                </div>
                <div class="col-5">
                    <p>{onePet.description}</p>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <h4>Skills:</h4>
                </div>
                <div class="col-5">
                    <ul class="list-group">
                        <li class="list-group-item">{onePet.skill_1}</li>
                        <li class="list-group-item">{onePet.skill_2}</li>
                        <li class="list-group-item">{onePet.skill_3}</li>
                    </ul>
                </div>
                <div class="col"></div>
            </div>
            </div>
        </div>
    )
}

export default OnePet;