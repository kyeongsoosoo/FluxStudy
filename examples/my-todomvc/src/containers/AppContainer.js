import { Container } from "flux/utils";
import TodoStore from "../data/TodoStore";
import AppView from "../views/AppView";
import TodoActions from '../data/TodoActions'
import TodoDraftStore from "../data/TodoDraftStore";
import TodoEditStore from "../data/TodoEditStore";


function getStores() {
    return [
        TodoStore,
        TodoDraftStore,
        TodoEditStore,
    ]
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        todos: TodoStore.getState(),
        editing: TodoEditStore.getState(),

        onAdd:TodoActions.addTodo,
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onUpdateDraft: TodoActions.updateDraft,
        onClearComplete: TodoActions.clearCompleted,
        onToggleAll: TodoActions.toggleAllTodos,
        onEditStart : TodoActions.editStart,
        onEditTodo: TodoActions.editTodo,
        onEditFinish: TodoActions.editFinish,
    }
    
}

export default Container.createFunctional(AppView, getStores, getState)