import TodoDispatcher from "./TodoDispatcher"
import TodoActionTypes from './TodoActionTypes'
import PubSubService from "../services/PubSubService"



const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        })
        PubSubService.publish();
    },
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        })
        PubSubService.publish();
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        })
        PubSubService.publish();
    },
    updateDraft(text){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.UPDATE_DRAFT,
            text,
        })
        PubSubService.publish();
    },

    clearCompleted() {
        TodoDispatcher.dispatch({
            type:TodoActionTypes.CLEAR_COMPLETE,
        })
    },

    toggleAllTodos() {
        TodoDispatcher.dispatch({
            type:TodoActionTypes.TOGGLE_ALL,
        })
        PubSubService.publish();
    },

    editStart(id){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.EDIT_START,
            id
        })
        PubSubService.publish();
    },

    editFinish(){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.EDIT_FINISH
        })
        PubSubService.publish();
    },

    editTodo(id,text) {
        TodoDispatcher.dispatch({
            type:TodoActionTypes.EDIT_TODO,
            id,
            text
        })
        PubSubService.publish();
    }
}

export default Actions