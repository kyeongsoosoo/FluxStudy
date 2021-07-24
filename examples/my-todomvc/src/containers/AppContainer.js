import { Container } from "flux/utils";
import TodoStore from "../data/TodoStore";
import AppView from "../views/AppView";
import TodoActions from '../data/TodoActions'
import TodoDraftStore from "../data/TodoDraftStore";


function getStores() {
    return [
        TodoStore,
        TodoDraftStore,
    ]
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        todos: TodoStore.getState(),

        onAdd:TodoActions.addTodo,
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onUpdateDraft: TodoActions.updateDraft,
        onClearComplete: TodoActions.clearCompleted
    }
    
}

export default Container.createFunctional(AppView, getStores, getState)