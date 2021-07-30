class PubSub{
    constructor() {
        this._queue=[];

    }

    subscribe(render){
        this._queue.push(render);
    }

    publish(){
        this._queue.forEach(fn => fn());
    }
}

export default new PubSub()