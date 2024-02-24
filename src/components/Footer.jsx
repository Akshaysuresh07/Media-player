import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mt-5 w-100 ' style={{height:'300px'}}>
        <div className='footer-content d-flex justify-content-between'>
         <div style={{width:'400px'}} className='media' >
         <h5 className='d-flex'>Media Player</h5>
            <p style={{textAlign:'justify'}}>Media Player is a video streaming platform that allows you to watch videos, movies, and TV shows online for free.
             It is a great alternative to paid streaming services.</p>
         </div>
         <div className='links d-flex flex-column' >
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History </Link>
         </div>
         <div className='guides d-flex flex-column' >
         <h5>Guides</h5>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React js</a>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React Routing </a>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>

         </div>
         <div className='contact' >
         <h5>Contact</h5>
         <div className='d-flex'>
         <input type='text' className='form-control me-1' placeholder='email'/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
         </div>
         
         </div>
        
        </div>
        <p className='text-center'> copyright &copy;2024 media Player.Build with React</p>
    </div>
  )
}

export default Footer