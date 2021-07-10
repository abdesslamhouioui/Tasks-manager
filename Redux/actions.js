import { ADD_TASK,EDIT_TASK } from "./actiontype";

export const addtask = newtask => {
    return {
        type: ADD_TASK,
        payload: newtask
    }
}
export const edittask = task=>{
    return{
        type:EDIT_TASK,
        payload:task
    }
}