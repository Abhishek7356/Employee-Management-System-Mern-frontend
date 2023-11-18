import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {

  const { id } = useParams()
  const [user, setUser] = useState({})

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:8000/view-employee/${id}`);
    setUser(response.data.employee)
  }
  console.log(user);

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#e3f3f3' }} className='d-flex gap-5 justify-content-center align-items-center'>
      <div className='d-flex bg-light gap-5 border rounded border-2 p-5 shadow ' style={{flexWrap:'wrap'}}>
        <img src="https://cdn3.iconfinder.com/data/icons/banking-and-finance-4-4/48/158-1024.png" style={{ width: '250px', height: '300px', objectFit: 'cover',display:'block',margin:'auto' }} alt="" />
        <div className='border shadow rounded border-2 p-5 d-flex flex-column gap-2 justify-content-center align-itens-center border-primary'>
          <h2 className='text-center fw-bold'>{user.name}</h2>
          <h4>Age : {user.age}</h4>
          <h4>Designation : {user.designation}</h4>
          <h4>Salary : {user.salary}</h4>
        </div>
      </div>
    </div>
  )
}

export default View