

class EventEmitter {
    constructor(){
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        const eventListner = { callback };
        this.events[eventName].push(eventListner);
        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(eventListner);
                if(index > -1){
                    this.events[eventName].splice(index,1);
                    return undefined;
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const eventListners = this.events[eventName];
        if(!eventListners){
            return [];
        }

        return eventListners.map((eventListner)=>{
            return eventListner.callback(...args)
        })
    }
}

const emitter = new EventEmitter();
const subscription1 = emitter.subscribe('event1', (arg1, arg2) => {
  console.log(`Event listener 1 called with arguments: ${arg1}, ${arg2}`);
});

const subscription2 = emitter.subscribe('event2', (arg) => {
  console.log(`Event listener 2 called with argument: ${arg}`);
});

emitter.emit('event1', ['Hello', 'World']);
emitter.emit('event2', ['Goodbye']);

subscription1.unsubscribe();

emitter.emit('event1', ['Hola', 'Mundo']);