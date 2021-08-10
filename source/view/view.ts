import {
  IRenderValues,
} from '../options/options';
import EventEmitter from '../eventEmitter/eventEmitter';
import { createElementSlider, getContainer } from '../functions/functions';
import ViewBody from './viewBody/viewBody';

class View extends EventEmitter {
  container: Element;

  slider: HTMLElement;

  viewBody: ViewBody;

  constructor(containerClass: string) {
    super();
    this.container = getContainer(containerClass);
    this.slider = createElementSlider(['js-range-slider', 'range-slider']);
    this.container.append(this.slider);
    this.viewBody = new ViewBody(this.slider);
    this.init();
  }

  init(): void {
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('resize', () => {
      this.emit('window-resize', this.updateParameters());
    });
    window.addEventListener('scroll', () => {
      this.emit('scroll', this.updateParameters());
    });
    this.viewBody.subscribe(
      'slider-clicked',
      (data) => {
        this.emit('slider-clicked', data);
      },
    );
    this.viewBody.subscribe(
      'handle-dragged',
      (data) => {
        this.emit('handle-dragged', data);
      },
    );
    this.viewBody.addEventListeners();
  }

  updateParameters(): {
    sliderParameters: {
        width: number;
        height: number;
    };
    sliderCoordinates: {
        top: number;
        left: number;
    };
    handlerWidth: number;
    } {
    return this.viewBody.getParameters();
  }

  getChanges(val: IRenderValues): void {
    this.renderView(val);
  }

  renderView(renderData: IRenderValues): void {
    const { coordinates } = renderData;
    if (coordinates[0] === 'vertical') {
      this.slider.classList.add('range-slider_vertical');
    } else {
      this.slider.classList.remove('range-slider_vertical');
    }
    this.viewBody.renderViewComponents(renderData);
  }
}

export default View;
