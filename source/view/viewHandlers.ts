import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { createElementSlider } from '../functions/functions.ts';

export const handler = {
  rangeTo: 'range-to',
  rangeFrom: 'range-from',
};
class ViewHandlers extends EventEmitter {
  rangeTo: HTMLElement;

  rangeFrom: HTMLElement;

  constructor(sliderBody:HTMLElement) {
    super();
    this.rangeTo = createElementSlider(['bar__range', 'to']);
    this.rangeFrom = createElementSlider(['bar__range', 'from']);
    sliderBody.appendChild(this.rangeTo);
    sliderBody.appendChild(this.rangeFrom);
  }

  getHandlerWidth():number {
    return this.rangeTo.offsetWidth;
  }

  update(isRange:boolean, coordinates:string[], rangeFrom:number, rangeTo:number) {
    isRange ? (this.rangeFrom.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`), this.rangeFrom.classList.remove('hidden'))
      : (this.rangeFrom.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`), this.rangeFrom.classList.add('hidden'));
    this.rangeTo.setAttribute('style', `${coordinates[1]} ${rangeTo}%`);
  }

  static onMouseDown(ev:MouseEvent, viewHandlers: any, whichHandle:string):void {
    function onMouseMove(event:MouseEvent) {
      viewHandlers.emit('handle-dragged', { top: event.clientY, left: event.clientX, info: whichHandle });
    }
    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    function onDragStart() {
      return false;
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    ev.target?.addEventListener('dragstart', onDragStart);
  }

  addDragNDrop() {
    this.rangeTo.addEventListener('mousedown', (ev) => { ViewHandlers.onMouseDown(ev, this, handler.rangeTo); });
    this.rangeFrom.addEventListener('mousedown', (ev) => { ViewHandlers.onMouseDown(ev, this, handler.rangeFrom); });
  }
}
export { ViewHandlers };
