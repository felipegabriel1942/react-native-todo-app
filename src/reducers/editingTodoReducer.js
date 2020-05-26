import { SET_TODO_TEXT } from '../actions';

const INITIAL_STATE = {
    id: null,
    text: '',
    done: false
}

const editingTodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
}

export default editingTodoReducer;