import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allApi';


function VideoCard({displayData,setDeleteVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
     setShow(true);
     //get video details
    const {caption,youtubeLink}=displayData
    let timeData=new Date()
    let timeStamp= new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second:'2-digit'

    }).format(timeData)
    console.log(timeData);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})
    
    
    }
    const removeVideo=async(id)=>{
     const res=await removeVideoAPI(id)
      setDeleteVideoResponse(res.data)
      setShow(false)
    }

    
  return (
    <>
    
    <Card className='shadow'>
    <Card.Img style={{cursor:'pionter',minHeight:'150px',maxHeight:'150px'}} onClick={handleShow} variant="top" src={displayData?.imageURL} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between '>
      <p className="fw-2 ">{displayData?.caption}</p>
      <button onClick={()=>removeVideo(displayData.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
      </Card.Title>
      
   
    </Card.Body>
  </Card>


  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{displayData?.caption}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <iframe width="100%" height="480" src={`${displayData?.youtubeLink}?autoplay=1`} title="caption" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  
  </Modal.Body>

</Modal>
    </>
   
  )
}

export default VideoCard