class EventEmitter {
    events : any

    constructor() {
      this.events = {};
    }

    subscribe(eventName:any, func:any) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(func);
    }

    emit(eventName:string, data:Object) {
      const event = this.events[eventName];
      if (event) {
        event.forEach((func) => {
          func.call(null, data);
        });
      }
    }
}
export { EventEmitter };
