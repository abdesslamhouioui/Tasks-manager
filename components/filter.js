import React from 'react'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Filter=()=>{
        const tasks= useSelector(store=>store.tasks)
    return (
        <div>
<DropdownButton id="dropdown-basic-button" title="Filter" style={{display:'flex',marginLeft:'80%',marginTop:'2%'}}>
  <Link to={{pathname:'/Donetasks',state:{donetasks:[tasks.filter(task=>task.done==='done')]}}}><Dropdown.Item href="#/action-1">Done</Dropdown.Item></Link>
  <Link to={{pathname:'/Donetasks',state:{notdonetasks:[tasks.filter(task=>task.done==='not done')]}}}><Dropdown.Item href="#/action-2">Not Done</Dropdown.Item></Link>
</DropdownButton>
        </div>)}
export default Filter
