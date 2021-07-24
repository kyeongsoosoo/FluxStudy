import TodoDispatcher from "./TodoDispatcher"
import TodoActionTypes from './TodoActionTypes'



const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        })
    },
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        })
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        })
    },
    updateDraft(text){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.UPDATE_DRAFT,
            text,
        })
    },

    clearCompleted() {
        TodoDispatcher.dispatch({
            type:TodoActionTypes.CLEAR_COMPLETE,
        })
    }
}

export default Actions