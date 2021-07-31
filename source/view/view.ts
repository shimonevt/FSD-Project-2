import { ISliderCoordinates, ISliderParameters, IRenderValues } from '../options/options.ts';
import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { createElementSlider, getContainer } from '../functions/functions.ts';
import ViewBody from './viewBody/viewBody.ts';

class View extends EventEmitter {
  container : Element;

  slider : HTMLElement;

  viewBody : ViewBody;

  constructor(containerClass:string) {
    super();
    this.container = getContainer(containerClass);
    this.slider = createElementSlider(['range-slider']);
    this.container.append(this.slider);
    this.viewBody = new ViewBody(this.slider);
    this.init();
  }

  init():void {
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('resize', () => { this.emit('window-resize', this.updateParameters()); });
    window.addEventListener('scroll', () => { this.emit('scroll', this.updateParameters()); });
    this.viewBody.subscribe('slider-clicked', (data:{ top: number, left: number, sliderParameters: {sliderParams :ISliderParameters
      sliderCoordinates: ISliderCoordinates, handlerWidth: number }}) => { this.emit('slider-clicked', data); });
    this.viewBody.subscribe('handle-dragged', (data:{top: number, left: number, info: string, sliderParams: {sliderParameters: ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}}) => { this.emit('handle-dragged', data); });
    this.viewBody.addEventListeners();
  }

  updateParameters(): {sliderParameters: ISliderParameters; sliderCoordinates: ISliderCoordinates;
                        handlerWidth: number;} {
    return this.viewBody.getParameters();
  }

  getChanges(val: IRenderValues):void {
    this.renderView(val);
  }

  renderView(renderData: IRenderValues):void {
    const { coordinates } = renderData;
    if (coordinates[0] === 'vertical') {
      this.slider.classList.add('vertical');
    } else {
      this.slider.classList.remove('vertical');
    }
    this.viewBody.renderViewComponents(renderData);
  }
}

export default View;
