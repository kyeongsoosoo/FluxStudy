import { ReduceStore } from "flux/utils";
import TodoDispatcher from "./TodoDispatcher";
import TodoActionTypes from './TodoActionTypes'

class TodoEditStore {
    constructor() {
        this.state = '';
    }

    getState() {
        return this.state
    }

    getInitialState() {
        return '';
    }

    reduce(action){
        switch(action.type){
            case TodoActionTypes.EDIT_START:
                this.state = action.id;
                PubSubService.publish();
                break;

            case TodoActionTypes.EDIT_FINISH:
                this.state = '';
                PubSubService.publish();
                break;
            default:
                this.state = this.state;
                break;
        }
    }
}

export default new TodoEditStore();