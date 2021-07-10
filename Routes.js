import {Route} from 'react-router-dom'
import App from'./App'
import Task from'./components/Task'
const Routes=()=>{
    return(
    <div>
<Route path='/'component={App}/>
<Route path='/Edit_task/' component={Task}/></div>)}
export default Routes