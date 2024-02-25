import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allApi'


function View({uploadvideoResponse}) {
  const [allvideos,setAllVideos]=useState([])
  //state lifting from video card
  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")

  const getAllVideos =async()=>{
    const result=await getAllVideosAPI()
    // console.log(result);
    if(result?.status===200){
      setAllVideos(result.data);
    }
  }
  useEffect(()=>{
    getAllVideos()

  },[uploadvideoResponse,deleteVideoResponse])
  // console.log(allvideos);

  return (
    <>
    
    <Row className=' rounded m-2'>
    {allvideos?.length>0?allvideos.map((video,index)=>(
    
    
      <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
      <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
    
    
      </Col>
    ))
    :
    <div className='text-danger fw-bolder'> no videos are uploaded yet!!..</div>
    }
    </Row>
    
    </>
  )
}

export default View