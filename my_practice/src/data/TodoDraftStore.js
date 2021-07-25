import { ReduceStore } from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";
import TodoActionTypes from './TodoActionTypes'

class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state,action){
        switch(action.type){
            case TodoActionTypes.ADD_TODO:
                return '';
            case TodoActionTypes.UPDATE_DRAFT:
                return action.text;

            default:
                return state;
        }
    }
}

export default new TodoDraftStore();