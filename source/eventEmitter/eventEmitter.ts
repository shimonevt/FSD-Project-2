export class EventEmitter {
    events : any
    constructor() {
      this.events = {};
    }
   //Этот метод (subscribe) принимает в качестве аргументов название события (например, event:name-changed, как в нашем примере) 
   //и функцию, которая будет вызываться, когда будет инициироваться транслируемое событие.
    subscribe( eventName:any, func:any ) {
      if( !this.events[eventName] ) {
         this.events[eventName] = [];
      }
        
      this.events[eventName].push(func);
    }
    //Этот метод принимает имя события(eventName), которое мы хотим всем транслировать, 
    //и данные(data), которые будут отправляться в момент этого события. 
    //Если в экземпляре класса сохранены какие-то подписанные на него события, 
    //мы проходимся по каждому из них и вызываем каждое, передавая ему данные, которые хотим транслировать.
    emit(eventName:string, data:Object) {
      const event = this.events[eventName];
      if( event ) {
        event.forEach(func => {
           func.call(null, data);
         });
       }
    }
  }