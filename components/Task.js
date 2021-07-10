import { Modal,Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {edittask} from '../Redux/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
const Task = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [editask, setedittask] = useState({id:props.location.task.id,description:props.location.task.description,done:props.location.task.done})
    return (
      <>
<Modal show={show} onHide={handleClose}>
    <Modal.Header><Modal.Title>Edit Task {props.location.task.id}</Modal.Title></Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group>
            <Form.Control placeholder="description" defaultValue={props.location.task.description} onChange={e => setedittask({...editask,[e.target.placeholder]:e.target.value})}/>
        </Form.Group><br/>
        <Form.Group>
        <Form.Label>Is Done</Form.Label>
            <Form.Control as="select" id='done' defaultValue={props.location.task.done} onChange={e => setedittask({...editask,[e.target.id]:e.target.value})}>
            <option value='done'>Done</option>
            <option value='not done'>Not Done</option>            
            </Form.Control>
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Link to='/'><Button variant="secondary" onClick={handleClose}>Close</Button></Link>
        <Link to='/'><Button variant="primary" onClick={()=>{dispatch(edittask(editask));handleClose()}}>Save</Button></Link>
    </Modal.Footer>
</Modal>
      </>
    );
  }

export default Task
