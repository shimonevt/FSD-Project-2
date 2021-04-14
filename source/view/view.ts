import { ISliderCoordinates, ISliderParameters } from '../options/options.ts';
import { IRenderValues } from '../model/model.ts';
import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { ViewScale } from './viewBar/viewScale/viewScale.ts';
import { createElementSlider, getContainer } from '../functions/functions.ts';

export const handler = {
  rangeTo: 'range-to',
  rangeFrom: 'range-from',
};
class View extends EventEmitter {
  private container : Element;

  private slider : HTMLElement;

  private sliderBody : HTMLElement

  private progressBar : HTMLElement

  private scaleBar : HTMLElement

  private maxVal: HTMLElement

  private minVal: HTMLElement

  private rangeTo : HTMLElement

  private rangeFrom : HTMLElement

  private viewScale : HTMLElement

  constructor(containerClass:string) {
    super();
    this.container = getContainer(containerClass)!;
    this.slider = createElementSlider(['range-slider']);
    this.container.prepend(this.slider);
    this.init();
  }

  init():void {
    this.createSlider();
    this.getSliderCoords();
    this.addEventListeners();
  }

  createSlider():void {
    this.sliderBody = createElementSlider(['slider__body']);
    this.progressBar = createElementSlider(['progress__bar']);
    this.viewScale = createElementSlider(['progress__scale-bar']);
    this.initViewScale();
    this.maxVal = createElementSlider(['bar__max-value']);
    this.minVal = createElementSlider(['bar__min-value']);
    this.rangeTo = createElementSlider(['bar__range', 'to']);
    this.sliderBody.append(this.maxVal);
    this.sliderBody.append(this.minVal);
    this.sliderBody.append(this.progressBar);
    this.sliderBody.append(this.rangeTo);
    this.rangeFrom = createElementSlider(['bar__range', 'from']);
    this.sliderBody.append(this.rangeFrom);
    this.maxVal = createElementSlider(['range__values', 'max-value']);
    this.sliderBody.append(this.maxVal);
    this.minVal = createElementSlider(['range__values', 'min-value']);
    this.sliderBody.append(this.minVal);
    this.sliderBody.append(this.viewScale);
    this.slider.append(this.sliderBody);
  }

  getHandlerWidth():number {
    return this.rangeTo.offsetWidth;
  }

  getSliderParams():ISliderParameters {
    return {
      height: parseInt(getComputedStyle(this.slider).height, 10),
      width: parseInt(getComputedStyle(this.slider).width, 10),
    };
  }

  updateParameters(): {sliderParameters: ISliderParameters; sliderCoordinates: ISliderCoordinates;
                        handlerWidth: number;} {
    return {
      sliderParameters: this.getSliderParams(),
      sliderCoordinates: this.getSliderCoords(),
      handlerWidth: this.getHandlerWidth(),
    };
  }

  getAndSendClickPosition(ev: MouseEvent):void {
    this.updateParameters();
    if (this.checkClickTarget(ev.target!)) {
      this.emit('slider-clicked', { top: ev.clientY, left: ev.clientX });
    }
  }

  checkClickTarget(target:EventTarget):boolean {
    return target !== this.minVal && target !== this.maxVal;
  }

  onMouseDown(ev:MouseEvent, thisView:this, whichHandle:string):void {
    this.updateParameters();
    function onMouseMove(event:MouseEvent) {
      thisView.emit('handle-dragged', { top: event.clientY, left: event.clientX, info: whichHandle });
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

  addEventListeners():void {
    this.sliderBody.addEventListener('click', (ev) => { this.getAndSendClickPosition(ev); });
    this.rangeTo.addEventListener('mousedown', (ev) => { this.onMouseDown(ev, this, handler.rangeTo); });
    this.rangeFrom.addEventListener('mousedown', (ev) => { this.onMouseDown(ev, this, handler.rangeFrom); });
    window.addEventListener('resize', () => { this.emit('window-resize', this.updateParameters()); });
    window.addEventListener('scroll', () => { this.emit('scroll', this.updateParameters()); });
  }

  getChanges(val: IRenderValues):void {
    this.renderView(val);
  }

  renderView({
    coordinates, barPosition, barSize, isRange, rangeTo, rangeFrom,
    showValues, values, valuesPosition,
  }:IRenderValues):void {
    const { minVal, maxVal } = this;
    if (coordinates[0] === 'vertical') {
      this.slider.classList.add('vertical');
    } else {
      this.slider.classList.remove('vertical');
    }
    this.progressBar.setAttribute('style', `${coordinates[1]}${barPosition}%;${coordinates[2]}${barSize}%`);
    isRange ? (this.rangeFrom.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`), this.rangeFrom.classList.remove('hidden'))
      : (this.rangeFrom.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`), this.rangeFrom.classList.add('hidden'));
    this.rangeTo.setAttribute('style', `${coordinates[1]} ${rangeTo}%`);
    showValues ? this.showValues(true, isRange) : this.showValues(false, isRange);
    minVal.innerHTML = values[0], maxVal.innerHTML = values[1];
    minVal.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`),
    maxVal.setAttribute('style', `${coordinates[1]} ${rangeTo}%`);
  }

  showValues(show: boolean, showBoth: boolean):void {
    if (show === true && showBoth === true) {
      this.maxVal.classList.remove('hidden');
      this.minVal.classList.remove('hidden');
    } else if (show === true && showBoth === false) {
      this.maxVal.classList.remove('hidden'); this.minVal.classList.add('hidden');
    } else if (show === false) { this.maxVal.classList.add('hidden'); this.minVal.classList.add('hidden'); }
  }

  getSliderCoords():ISliderCoordinates {
    return {
      left: this.slider.getBoundingClientRect().left,
      top: this.slider.getBoundingClientRect().top,
    };
  }

  updateScale() {
    this.updateParameters();
  }

  initViewScale() { // get styles from RenderView
    const barUnitMin = createElementSlider(['scale-bar__unit', 'min-value']);
    const barUnitMax = createElementSlider(['scale-bar__unit', 'max-value']);
    this.viewScale.append(barUnitMin);
    this.viewScale.append(barUnitMax);
    barUnitMax.setAttribute('style', 'left: 100%');
    barUnitMin.setAttribute('style', 'left: 0%');
    const coords = this.getSliderParams();
    // another units will be generated by methods
  }
  // updateViewScale(){const coords = this.getSliderParams();}
}

export { View };
