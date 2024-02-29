/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allApi'


function View({ uploadvideoResponse,setRemoveCategoryVideoResponse }) {
  const [allvideos, setAllVideos] = useState([])
  //state lifting from video card
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")

  const getAllVideos = async () => {
    const result = await getAllVideosAPI()
    // console.log(result);
    if (result?.status === 200) {
      setAllVideos(result.data);
    }
  }
  useEffect(() => {
    getAllVideos()

  }, [uploadvideoResponse, deleteVideoResponse])
  // console.log(allvideos);
  const dragOverView = (e) => {
    e.preventDefault()
  }
  const handleCategoryVideo =async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData('removeVideoDetails'))
    console.log(`remove video id :${videoId}from category Id:${categoryId}`);
    //get category details
    const {data}=await getSingleCategoryAPI(categoryId)
    console.log(data);
    const updateVideoList=data.allvideos.filter(video=>video.id!==videoId)
    console.log(updateVideoList);
    const {id,categoryName}=data
    const result=await updateCategoryAPI(categoryId,{id,categoryName,allvideos:updateVideoList})
   setRemoveCategoryVideoResponse(result.data)
  }
  return (
    <>

      <Row droppable="true" onDragOver={e => dragOverView(e)} onDrop={e => handleCategoryVideo(e)} className=' rounded m-2'>
        {allvideos?.length > 0 ? allvideos.map((video, index) => (


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