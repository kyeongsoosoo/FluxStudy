import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import Counter  from './Counter'
import TodoActionTypes from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'
import Todo from './Todo'

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch(action.type){
            case TodoActionTypes.ADD_TODO:
                if(!action.text)
                    return state;
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id,
                    text: action.text,
                    complete: false,
                }))
            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);
            
            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete)
                )
            case TodoActionTypes.CLEAR_COMPLETE:
                return state.filter( todo => !todo.complete)

            case TodoActionTypes.TOGGLE_ALL:
                const isAllCompleted = state.every( todo => todo.complete);
                if(isAllCompleted)
                    return state.map(todo => todo.set('complete', false));
                else
                    return state.map(todo => todo.set('complete',true));
            default:
                return state;
        }
    }
}

export default new TodoStore();