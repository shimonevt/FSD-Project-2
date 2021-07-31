import { createElementSlider } from '../../functions/functions.ts';
import { ISliderCoordinates, ISliderParameters, IRenderValues } from '../../options/options.ts';
import EventEmitter from '../../eventEmitter/eventEmitter.ts';
import ViewBar from '../viewBar/viewBar.ts';
import ViewHandlers from '../viewHandlers/viewHandlers.ts';
import ViewValues from '../viewValues/viewValues.ts';
import ViewScale from '../viewScale/viewScale.ts';

class ViewBody extends EventEmitter {
  sliderBody: HTMLElement;

  viewBar : ViewBar;

  viewHandlers: ViewHandlers;

  handlerValues: ViewValues;

  viewScale: ViewScale;

  constructor(slider:HTMLElement) {
    super();
    this.sliderBody = createElementSlider(['js-range-slider__body', 'range-slider__body']);
    slider.append(this.sliderBody);
    this.viewBar = new ViewBar(this.sliderBody);
    this.viewHandlers = new ViewHandlers(this.sliderBody);
    this.handlerValues = new ViewValues(this.sliderBody);
    this.viewScale = new ViewScale(this.sliderBody);
  }

  getParameters() {
    return {
      sliderParameters: this.getSliderParameters(),
      sliderCoordinates: this.getSliderCoords(),
      handlerWidth: this.viewHandlers.getHandlerWidth(),
    };
  }

  getSliderParameters():ISliderParameters {
    return {
      height: parseInt(window.getComputedStyle(this.sliderBody).height, 10),
      width: parseInt(window.getComputedStyle(this.sliderBody).width, 10),
    };
  }

  getSliderCoords():ISliderCoordinates {
    return {
      left: this.sliderBody.getBoundingClientRect().left,
      top: this.sliderBody.getBoundingClientRect().top,
    };
  }

  renderViewComponents(renderData: IRenderValues) {
    const {
      coordinates, barPosition, barSize, isRange, rangeFrom, rangeTo, maxValue, minValue,
    } = renderData;
    this.viewBar.update(coordinates, barPosition, barSize);
    this.viewHandlers.update(isRange, coordinates, rangeFrom, rangeTo);
    this.handlerValues.update(renderData);
    this.viewScale.update(coordinates, maxValue, minValue);
  }

  checkClickTarget(target:EventTarget):boolean {
    return target !== this.handlerValues;
  }

  getAndSendClickPosition(ev: MouseEvent):void {
    const sliderData = this.getParameters();
    if (this.checkClickTarget(ev.target)) {
      this.emit('slider-clicked', { top: ev.clientY, left: ev.clientX, sliderData });
    }
  }

  sendHandleDragData(data:{ top:number, left:number, info:string }) {
    const sliderData = this.getParameters();
    this.emit('handle-dragged', { ...data, sliderData });
  }

  addEventListeners():void {
    this.sliderBody.addEventListener('click', (ev) => { this.getAndSendClickPosition(ev); });
    this.viewHandlers.subscribe('handle-dragged', (data:{ top:number, left:number, info:string }) => { this.sendHandleDragData(data); });
    this.viewHandlers.addDragNDrop();
  }
}
export default ViewBody;
