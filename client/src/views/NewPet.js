import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const NewPet = props => {
    const[error,setError] = useState({});
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    })

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new",form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else{ console.log("It was submitted");
                navigate("/");}
            })
            .catch( err => console.log("Something went wrong"));
    }
    return(
        <div>
            <Link to ="/" className="nav_bar"><h4>Back to Home</h4></Link>
            <h3>Know a pet needing a home?</h3>
            <div className="border border-dark ">
                <Form form={form} onChangeHandler={onChangeHandler} error={error}/>
                <button type="submit" className="btn btn-info mb-3" onClick={onSubmitHandler}>Add Pet</button>
            </div>
        </div>
    )
}

export default NewPet;