import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Header() {
  return (
  
 

   <Navbar className="bg-info">
   <Container className='bg-info'>
   <Link to={'/'} style={{textDecoration:'none'}}>
     <Navbar.Brand className='fw-bolder d-flex align-item-center bg-info p-2'   style={{color:'white'}}>
     <i className="fa-solid fa-video p-1 ps-2"></i>
       
Media Player
     </Navbar.Brand>
     </Link>
   </Container>
 </Navbar>



  )
}

export default Header