import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Main = props => {
    const [pets, allPets] = useState();
    const[update,setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => allPets(res.data.pets))
    },[update])

    const removePet = _id =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res=> setUpdate(!update))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
            <Link to ="/pets/new" className="nav_bar"><h4>Add New</h4></Link>
            </div>
            <h3 className="">These pets are looking for a good home</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets ?
                        pets.map((pet,i) =>{
                            return <tr key={i}>
                                    <th scope="row">{pet.name}</th>
                                    <th scope="row">{pet.type}</th>
                                    <td><a href ={`/pets/${pet._id}`}>Details</a> &nbsp;&nbsp;
                                    <a href={`/pets/${pet._id}/edit`}>Edit</a>
                                    </td>   
                            </tr>
                        }) : ""
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;


{/* <button className="btn btn-danger" onClick={()=> removePet(pet._id)}></button> */}
// onClick={()=> removePet(pet._id)}