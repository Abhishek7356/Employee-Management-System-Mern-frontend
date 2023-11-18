import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                   <Link style={{textDecoration:'none'}} to={'/'}><MDBNavbarBrand href=''>
                        <img
                            src='https://spinalcompass.com/wp-content/uploads/2017/07/Employees_icon-01.png'
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                        Employee Management System
                    </MDBNavbarBrand></Link> 
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header