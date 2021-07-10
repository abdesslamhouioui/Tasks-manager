import React from 'react'
import { Card,Button,DropdownButton,Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {useState} from 'react'

const ListTask = () => {
    const tasks= useSelector(store=>store.tasks)
    const [filter,setfilter]= useState('')
    return (
      <div>
  <DropdownButton id="dropdown-basic-button" title="Filter" style={{marginLeft:'80%'}} onSelect={e=>setfilter(e)}>
  <Dropdown.Item eventKey='done'>Done</Dropdown.Item>
  <Dropdown.Item eventKey='not done'>Not Done</Dropdown.Item>
  </DropdownButton><br/><br/>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            {filter!==''? tasks.filter(task=>task.done===filter).map((task) =>
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>{task.id}</Card.Title><br/>
    <Card.Text>{task.description}</Card.Text><br/>
    {task.done==='done' ?<Button variant="green" style={{backgroundColor:'green'}}>{task.done}</Button>:
        <Button variant="green" style={{backgroundColor:'red'}}>{task.done}</Button>}<br/><br/>
    <Link to ={{pathname:`/Edit_task/${task.id}`,task:{id:task.id,description:task.description,done:task.done}}} style={{textDecoration:'none'}} ><Card.Text>Edit Task</Card.Text></Link>
  </Card.Body>
</Card>
        </div> 
    ):tasks.map((task) =>
    <div>
<Card style={{ width: '18rem' }}>
<Card.Body style={{textAlign:'center'}}>
<Card.Title>{task.id}</Card.Title><br/>
<Card.Text>{task.description}</Card.Text><br/>
{task.done==='done' ?<Button variant="green" style={{backgroundColor:'green'}}>{task.done}</Button>:
    <Button variant="green" style={{backgroundColor:'red'}}>{task.done}</Button>}<br/><br/>
<Link to ={{pathname:`/Edit_task/${task.id}`,task:{id:task.id,description:task.description,done:task.done}}} style={{textDecoration:'none'}} ><Card.Text>Edit Task</Card.Text></Link>
</Card.Body>
</Card>
    </div> )
    }
    </div>
    </div>)
}
export default ListTask