class EventEmitter {
    events : Event[]

    constructor() {
      this.events = {};
    }

    subscribe(eventName:string, func:Function) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(func);
    }

    emit(eventName:string, data:Record<number, unknown>) {
      const event = this.events[eventName];
      if (event) {
        event.forEach((func) => {
          func.call(null, data);
        });
      }
    }
}
export default EventEmitter;
