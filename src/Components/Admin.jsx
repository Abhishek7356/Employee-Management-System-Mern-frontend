import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom'


function Admin() {

    const [employees, setEmployees] = useState([])

    const fetchEmployees = async () => {
        const res = await axios.get('http://localhost:8000/get-employee');
        setEmployees(res.data.employees)
    }
    console.log(employees);

    useEffect(() => {
        fetchEmployees()
    }, [])

    const handleDeleteEmp = (id) => {
        axios.delete(`http://localhost:8000/delete-employee/${id}`).then((res) => {
            alert(res.data.message)
            fetchEmployees()
        }).catch(err => console.log(err))
    }

    let allEmployees = employees.map((employee, key) => {
        return (
            <tr>
                <th scope='row'>{key + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td className='d-flex gap-3'>
                    <Link to={'/edit/'+employee.id} ><MDBBtn><i className='fa-solid fa-pen'></i></MDBBtn></Link>
                    <Link to={`/view/${employee.id}`}><MDBBtn><i className='fa-solid fa-user'></i></MDBBtn></Link>
                    <MDBBtn onClick={() => handleDeleteEmp(employee.id)}><i className='fa-solid fa-trash'></i></MDBBtn>
                </td>
            </tr>
        )
    })

    return (
        <div style={{ minHeight: '95vh' }}>
            <div className="container">
                <h3 className='text-center m-4'>Employee Management System</h3>
                <p style={{ textAlign: 'justify' }}>Employee management is a practice that helps a manager improve employee productivity and
                    satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits
                    and types and list some examples of employee management software tools.</p>
                <div className='text-end my-4'>
                    <Link to={'/add'}><MDBBtn><i className='fa-solid fa-user-plus me-2'></i>Add</MDBBtn></Link>
                </div>
                <div className="table">
                    <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Id</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Age</th>
                                <th scope='col'>Designation</th>
                                <th scope='col'>Salary</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {allEmployees}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>
    )
}

export default Admin