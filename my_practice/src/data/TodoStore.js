import Immutable from 'immutable'
import Counter  from './Counter'
import TodoActionTypes from './TodoActionTypes'
import Todo from './Todo'
import PubSubService from '../services/PubSubService';

class TodoStore {
    constructor() {
        this.state = Immutable.OrderedMap();
    }
    getState() {
        return this.state
    }
    reduce(action) {
        switch(action.type){
            case TodoActionTypes.ADD_TODO:
                if(!action.text)
                    this.state = this.state;
                const id = Counter.increment();
                this.state = this.state.set(id, new Todo({
                    id,
                    text: action.text,
                    complete: false,
                }))
                PubSubService.publish();
                break;
            case TodoActionTypes.DELETE_TODO:
                this.state = this.state.delete(action.id);
                PubSubService.publish();
                break;
            case TodoActionTypes.EDIT_TODO:
                this.state = this.state.setIn([action.id, 'text'], action.text);
                PubSubService.publish();
                break;
            case TodoActionTypes.TOGGLE_TODO:
                this.state = this.state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete)
                )
                PubSubService.publish();
                break;
            case TodoActionTypes.CLEAR_COMPLETE:
                this.state = this.state.filter( todo => !todo.complete)
                PubSubService.publish();
                break;
            case TodoActionTypes.TOGGLE_ALL:
                const isAllCompleted = this.state.every( todo => todo.complete);
                if(isAllCompleted)
                    this.state = this.state.map(todo => todo.set('complete', false));
                else
                    this.state = this.state.map(todo => todo.set('complete',true));
                PubSubService.publish();
                break;
            default:
                this.state = this.state;
                break;
            }
    }
}

export default new TodoStore();