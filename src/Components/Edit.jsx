import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

  const [userId, setUserId] = useState(null)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(null)

  const navigate = useNavigate();

  const { id } = useParams();
  const fetchUser = async () => {
    let response = await axios.get(`http://localhost:8000/view-employee/${id}`);
    setUserId(response.data.employee.id)
    setName(response.data.employee.name)
    setAge(response.data.employee.age)
    setDesignation(response.data.employee.designation)
    setSalary(response.data.employee.salary)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleUpdate = async () => {

    let body = {
      id: userId,
      name,
      age,
      designation,
      salary
    }

    let res = await axios.put(`http://localhost:8000/update-employee/${id}`, body);
    alert(res.data.message);
    navigate('/')
  }

  return (
    <div>
      <div style={{ minHeight: '93vh', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='text-center m-3'>Edit Employee Details</h3>
        <div style={{ height: '100%', width: '400px' }} className='d-flex justify-content-center align-items-center flex-column gap-3'>
          <MDBInput onChange={(e) => setUserId(e.target.value)} value={userId} label='Id' id='formControlLg' type='text' size='lg' />
          <MDBInput onChange={(e) => setName(e.target.value)} value={name} label='Name' id='formControlLg' type='text' size='lg' />
          <MDBInput onChange={(e) => setAge(e.target.value)} value={age} label='Age' id='formControlLg' type='text' size='lg' />
          <MDBInput onChange={(e) => setDesignation(e.target.value)} value={designation} label='Designation' id='formControlLg' type='text' size='lg' />
          <MDBInput onChange={(e) => setSalary(e.target.value)} value={salary} label='Salary' id='formControlLg' type='text' size='lg' />
        </div>
        <button onClick={handleUpdate} className='btn btn-primary'>Update</button>
      </div>
    </div>
  )
}

export default Edit