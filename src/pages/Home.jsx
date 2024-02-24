import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadvideoResponse, setUploadvideoResponse] = useState("")
  return (
    <>

      <div className='container mt-5 d-flex justify-content-between'>
        <Add setUploadvideoResponse={setUploadvideoResponse} />
        <Link to={"/watch"}>View History</Link>


      </div>
      <div className='container-fluid mt-5 mb-5 row '>
        <div className='col-lg-6'>

          <h3>All videos</h3>
          <View uploadvideoResponse={uploadvideoResponse} />

        </div>
        <div className='col-lg-6'>
          <div className='d-flex justify-content-around'>

            <h3>All Categories</h3>
            <Category />
          </div>
        </div>
      </div>

    </>


  )
}

export default Home