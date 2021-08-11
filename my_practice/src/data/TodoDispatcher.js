import TodoDraftStore from './TodoDraftStore';
import TodoEditStore from './TodoEditStore';
import TodoStore from './TodoStore';

class TodoDispatcher{
    constructor(){
        this.stores = [
            TodoStore,
            TodoEditStore,
            TodoDraftStore
        ]
    }

    dispatch(action) {
        this.stores.forEach( store => {
            store.reduce(action);
        } )
    }
}

export default new TodoDispatcher();

