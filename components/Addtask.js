import { Modal,Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {addtask} from '../Redux/actions';
import {Link} from 'react-router-dom'

const AddTask=()=>{  
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newtask, setnewtask] = useState({done:'done'})
    return (
      <><br/><br/>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="primary" onClick={e=>{setnewtask({done:'done'});handleShow()}} >Add Task</Button></div>
<Modal show={show} onHide={handleClose}>
    <Modal.Header><Modal.Title>Add Task</Modal.Title></Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group>
            <Form.Control placeholder="Id" onChange={e => setnewtask({...newtask,[e.target.placeholder]:e.target.value})}/>
        </Form.Group><br/><br/>
        <Form.Group>
            <Form.Control placeholder="Description" onChange={e => setnewtask({...newtask,[e.target.placeholder]:e.target.value})}/>
        </Form.Group><br/>
        <Form.Group>
        <Form.Label>Is Done</Form.Label>
            <Form.Control as="select" id='done' onChange={e => setnewtask({...newtask,[e.target.id]:e.target.value})}>
            <option value='done'>Done</option>
            <option value='not done'>Not Done</option>            
            </Form.Control>
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Link to='/'><Button variant="secondary" onClick={handleClose}>Close</Button></Link>
        <Link to='/'><Button variant="primary" onClick={()=>{dispatch(addtask(newtask));handleClose();setnewtask('')}}>Save</Button></Link>
    </Modal.Footer>
</Modal>
      </>
    );
  }
  export default AddTask
  
  