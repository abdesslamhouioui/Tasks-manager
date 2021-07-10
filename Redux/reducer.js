import { ADD_TASK,EDIT_TASK } from './actiontype';

const initialState = {
    tasks: [
        {
            id:'1',
            description:'description',
            done:'done'
        }
    ]
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TASK:
            return {tasks:[...state.tasks,action.payload]}
        case EDIT_TASK:
 const index = state.tasks.findIndex(todo => todo.id ===action.payload.id);
 const newArray = [...state.tasks];
 newArray[index].description = action.payload.description;
 newArray[index].done = action.payload.done;
 return {...state.tasks,tasks:newArray}
 default:
            return state
    }
}
export default reducer