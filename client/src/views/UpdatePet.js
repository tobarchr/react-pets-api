import { Link, navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const UpdatePet = props =>{
    const[error,setError] = useState({});
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pet))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`,form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else{
                    navigate("/")
                }
            })
    }
    return(
        <div>
            <Link to ="/" className="nav_bar"><h4>Back to home</h4></Link>
            <h3>Edit: {form.name}</h3>
            <div className="border border-dark"></div>
            <Form form={form} onChangeHandler={onChangeHandler} error={error}/>
            <button type="submit" className="btn btn-info mb-3" onClick={onSubmitHandler}>Edit Pet</button>
        </div>
    )
}

export default UpdatePet;