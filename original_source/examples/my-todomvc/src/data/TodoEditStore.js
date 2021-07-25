import { ReduceStore } from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";
import TodoActionTypes from './TodoActionTypes'

class TodoEditStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state,action){
        switch(action.type){
            case TodoActionTypes.EDIT_START:
                return action.id;

            case TodoActionTypes.EDIT_FINISH:
                return '';
            default:
                return state;
        }
    }
}

export default new TodoEditStore();