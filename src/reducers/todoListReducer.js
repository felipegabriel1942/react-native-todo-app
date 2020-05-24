import { ADD_TODO } from '../actions'; 

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text
            }

            return [...state, newTodo];
        default:
            return state;

    }
}


export default todoListReducer;