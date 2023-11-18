import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Add() {
    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState(null)
    const navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();
        // console.log(id, name, age, designation, salary);
        const body = {
            id, name, age, designation, salary
        }

        //api call to add emplyoyee details
        if (id && name && age && designation && salary) {
            await axios.post('http://localhost:8000/add-employee', body).then((res) => {
                alert(res.data.message)
                navigate('/')
            }).catch(err => {
                console.log(err);
            })
        } else {
            alert('Enter details correctly')
        }
    }

    return (
        <div style={{ minHeight: '93vh', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='text-center m-3'>Add Employee Details</h3>
            <div style={{ height: '100%', width: '400px' }} className='d-flex justify-content-center align-items-center flex-column gap-3'>
                <MDBInput onChange={(e) => setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
                <MDBInput onChange={(e) => setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
                <MDBInput onChange={(e) => setAge(e.target.value)} label='Age' id='formControlLg' type='text' size='lg' />
                <MDBInput onChange={(e) => setDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
                <MDBInput onChange={(e) => setSalary(e.target.value)} label='Salary' id='formControlLg' type='text' size='lg' />
            </div>
            <button onClick={(e) => handleAdd(e)} className='btn btn-primary'>Add</button>
        </div>
    )
}

export default Add