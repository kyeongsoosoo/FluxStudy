import TodoActionTypes from './TodoActionTypes'
import PubSubService from "../services/PubSubService";

class TodoDraftStore {
    constructor() {
        this.state = '';
    }

    getState() {
        return this.state
    }

    reduce(action){
        switch(action.type){
            case TodoActionTypes.ADD_TODO:
                this.state = ''
                PubSubService.publish();
                break;
            case TodoActionTypes.UPDATE_DRAFT:
                this.state = action.text;
                PubSubService.publish();
                break;
            default:
                this.state = this.state
                break;
            
        }
    }
}

export default new TodoDraftStore();