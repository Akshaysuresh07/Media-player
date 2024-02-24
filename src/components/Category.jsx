import React ,{useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>  <div className='d-flex'>

    <button onClick={handleShow} style={{background:'#4169e1'}} className='btn  me-2 ms-2 rounded '><i className="fa-solid fa-plus" ></i></button>
    </div>
    <Modal show={show} onHide={handleClose} backdrop="static"
    keyboard={"false"}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="category name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="category" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{background:'#4169e1'}} variant="primary" onClick={handleClose}>
            Add category
          </Button>
        </Modal.Footer>
      </Modal>
 </>

  )
}

export default Category