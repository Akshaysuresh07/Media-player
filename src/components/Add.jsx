import { useState } from "react"
import { Button,Modal,Form,FloatingLabel } from "react-bootstrap"
import { uploadVideoAPI } from "../services/allApi";


useState

function Add({setUploadvideoResponse}) {

  const [uploadvideo,setUploadvideo]=useState({caption:"",imageURL:"",youtubeLink:""})
  console.log(uploadvideo);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false),
    setUploadvideo({...uploadvideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);
  const getYoutubeEmbedLink=(link)=>{
    if(link.includes("v="))
      {
        const videoId=link.split("v=")[1].slice(0,11)
        setUploadvideo({...uploadvideo,youtubeLink: `https://www.youtube.com/embed/${videoId}`})
      }
      else
      {
        alert("Please enter a valid youtube link")
      } 

  }
  //store the video details in the video
  const handleUpload=async()=>{
    const {caption,imageURL,youtubeLink}=uploadvideo
    if (caption && imageURL && youtubeLink) {
      const result = await uploadVideoAPI(uploadvideo);
      console.log(result);
      if (result.status === 201){
        alert("Video uploaded successfully");
        setUploadvideoResponse(result.data);
        handleClose();
      } else {
        alert("Failed to upload video");
      }
    } else {
      alert("Please fill all the details");
    }

  }
  return (
   <>
   <div className='d-flex'>
   <h5 className="mt-2 text-warning">Upload Video</h5>
   <button onClick={handleShow} className='btn bg-secondary me-2 ms-2 '><i className="fa-solid fa-plus" ></i></button>
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the folowing </p>

        <FloatingLabel
        controlId="floatingInput"
        label="video Caption"
        className="mb-3"
      >
        <Form.Control value={uploadvideo.caption} onChange={e=>setUploadvideo({...uploadvideo,caption: e.target.value})} type="text" placeholder="caption" />
      </FloatingLabel>
      
      <FloatingLabel
      controlId="floatingInput"
      label="image url"
      className="mb-3"
    >
      <Form.Control value={uploadvideo.imageURL}  onChange={e=>setUploadvideo({...uploadvideo,imageURL: e.target.value})} type="text" placeholder="image url" />
    </FloatingLabel>
    
    <FloatingLabel
    controlId="floatingInput"
    label="video Link"
    className="mb-3"
  >
    <Form.Control value={uploadvideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)}  type="text" placeholder="video link..." />
  </FloatingLabel>
    
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
   
   
   </>
  )
}

export default Add