import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }

  return (
    <>
      <div className='container'>
        <div className='header row align-items-center m-5'>
          <div className='col-lg-5'>
            <h3>Welcometo <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player App .will allow you to add and remove their uploaded videos, also helps to arrange them in different categories bt providing drag and drop</p>
          <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <img src='https://i.gifer.com/Clo7.gif' alt='media player' style={{ width: '100%',backfaceVisibility:'hidden' }} />

          </div>
        </div>
        <div className='features'>
        <h3 className='text-center'>Features</h3>
       <div className='row mt-5'>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.gifer.com/embedded/download/KOc7.gif" />
          <Card.Body>
            <Card.Title>Managing videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cas content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className='col-lg-4'>
          
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.icegif.com/wp-content/uploads/2024/01/icegif-109.gif" />
          <Card.Body>
            <Card.Title>Categorize music</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdnl.iconscout.com/lottie/premium/thumb/music-tone-4788006-3988335.gif" />
          <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
       </div>
  
        </div>
        <div className='video mt-5  p-5 rounded row'>
        <div className='col-lg-6'>
        <h3 className='text-warning'>Simple Fast and Powerfull</h3>
        <p style={{textAlign:'justify'}}><span>Play EvertThing:</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
        <p style={{textAlign:'justify'}}><span>Play EvertThing:</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                <p style={{textAlign:'justify'}}><span>Play EvertThing:</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>

        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NKX7RGZXBWc?si=qljSQvrNyhRMMIfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        </div>

      </div>
      <hr />
    </>
  )
}

export default LandingPage