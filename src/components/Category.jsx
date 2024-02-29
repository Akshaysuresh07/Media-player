<<<<<<< HEAD

import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { addCategoryAPI, getCategoriesAPI, getSingleVideoAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allApi';
import VideoCard from './VideoCard';
=======
import React ,{useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { addCategoryAPI } from '../services/allApi';
>>>>>>> 63e48496ab6b9274bde274a7bddf2d2d62a920d8



function Category({removeCategoryVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
<<<<<<< HEAD
  const [allCategories, setAllCategories] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setCategoryName('')
  }
  const createCategory = async () => {
    if (categoryName) {
      await addCategoryAPI({ categoryName, allvideos: [] })
      handleClose()
      getAllCategories()
=======

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    setShow(true);
  setCategoryName('')
  }
  const createCategory=async()=>{
    if(categoryName){
      const result=await addCategoryAPI({categoryName,allvideos:[]})
        handleClose()
 
    }
    else{
      alert("Please fill the category name")
    }
  
  

  }
>>>>>>> 63e48496ab6b9274bde274a7bddf2d2d62a920d8

    }
    else {
      alert("Please fill the category name")
    }

  }
  const getAllCategories = async () => {
    const res = await getCategoriesAPI()

    setAllCategories(res.data)
  }
  //  console.log(allCategories);
  useEffect(() => {
    getAllCategories()

  }, [removeCategoryVideoResponse])
  const handleRemoveCategories = async (cId) => {
    await removeCategoryAPI(cId)
    getAllCategories()
  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("Dragging over category");
  }
  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData('videoId'); 
    console.log(`video dropped in VId ${videoId} ,inside category ${categoryId}`);
    const { data } = await getSingleVideoAPI(videoId);
    console.log(data);
    //get category details
    let selectedCategory = allCategories.find(category => category.id === categoryId);
    console.log(selectedCategory);
    selectedCategory.allvideos.push(data);
    console.log(selectedCategory);
    //update category
    await updateCategoryAPI(categoryId,selectedCategory);
    getAllCategories();
  }
  const videoDragStarted=(e,videoId,categoryId)=>{
    console.log(`drag started at id ${categoryId}with vid${videoId}`);
    let datashare={videoId,categoryId}
    e.dataTransfer.setData('removeVideoDetails',JSON.stringify(datashare))
  }
  return (
    <>
    <div className='d-flex justify-content-between'>
    <div className=''>
      <h3>All categories</h3>
    </div>
    <button onClick={handleShow} style={{ background: '#4169e1', width: '250px', height: '80px' }} className='btn btn-info me-2 ms-2 rounded'><i className="fa-solid fa-plus"></i></button>
  </div>
  
  <div className="container-fluid mt-3">
    {allCategories.length>0 ? 
      allCategories.map((category, index) => (
        <div droppable="true" onDragOver={(e)=>dragOverCategory(e)}   onDrop={(e)=>videoDropped(e,category.id)}  key={index} className='border rounded p-2 mb-3'>
          <div className='d-flex justify-content-between'>
            <h5>{category.categoryName}</h5>
            <button onClick={() => handleRemoveCategories(category.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
          </div>
          <div className='row mt-2'>
            {category.allvideos?.length > 0 && category.allvideos.map((video, index) => (
              <div draggable onDragStart={e=>videoDragStarted(e,video.id,category.id)}  key={index} className='col-lg-6'>
                <VideoCard insideCategory displayData={video} />
              </div>
            ))}
          </div>
        </div> 
      ))
     : 
      <div className='text-danger fw-bolder'>
        No categories are added yet!!..
      </div>
    }
  </div>



      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={"false"}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<<<<<<< HEAD
          <FloatingLabel
            controlId="floatingInput"
            label="category name"
            className="mb-3"
          >
            <Form.Control value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" placeholder="category" />
          </FloatingLabel>
=======
        <FloatingLabel
        controlId="floatingInput"
        label="category name"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="category" />
      </FloatingLabel>
>>>>>>> 63e48496ab6b9274bde274a7bddf2d2d62a920d8
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
<<<<<<< HEAD
          <Button style={{ background: '#4169e1' }} variant="primary" onClick={createCategory}>
=======
          <Button style={{background:'#4169e1'}} variant="primary" onClick={createCategory}>
>>>>>>> 63e48496ab6b9274bde274a7bddf2d2d62a920d8
            Add category
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category