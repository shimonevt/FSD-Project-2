import { createElementSlider } from '../../functions/functions';
import { ISliderCoordinates, IRenderValues } from '../../options/options';
import EventEmitter, { SliderDataType } from '../../eventEmitter/eventEmitter';
import ViewBar from '../viewBar/viewBar';
import ViewHandlers from '../viewHandlers/viewHandlers';
import ViewValues from '../viewValues/viewValues';
import ViewScale from '../viewScale/viewScale';

class ViewBody extends EventEmitter {
  sliderBody: HTMLElement;

  viewBar: ViewBar;

  viewHandlers: ViewHandlers;

  handlerValues: ViewValues;

  viewScale: ViewScale;

  constructor(slider: HTMLElement) {
    super();
    this.sliderBody = createElementSlider([
      'js-range-slider__body',
      'range-slider__body',
    ]);
    slider.append(this.sliderBody);
    this.viewBar = new ViewBar(this.sliderBody);
    this.viewHandlers = new ViewHandlers(this.sliderBody);
    this.handlerValues = new ViewValues(this.sliderBody);
    this.viewScale = new ViewScale(this.sliderBody);
  }

  getParameters(): {
    sliderParameters: { width: number; height: number };
    sliderCoordinates: { top: number; left: number };
    handlerWidth: number;
    } {
    return {
      sliderParameters: this.getSliderParameters(),
      sliderCoordinates: this.getSliderCoords(),
      handlerWidth: this.viewHandlers.getHandlerWidth(),
    };
  }

  getSliderParameters(): { height: number; width: number } {
    return {
      height: parseInt(window.getComputedStyle(this.sliderBody).height, 10),
      width: parseInt(window.getComputedStyle(this.sliderBody).width, 10),
    };
  }

  getSliderCoords(): ISliderCoordinates {
    return {
      left: this.sliderBody.getBoundingClientRect().left,
      top: this.sliderBody.getBoundingClientRect().top,
    };
  }

  renderViewComponents(renderData: IRenderValues) {
    const {
      coordinates,
      barPosition,
      barSize,
      isRange,
      rangeFrom,
      rangeTo,
      maxValue,
      minValue,
      sliderStep,
    } = renderData;
    this.viewBar.update(coordinates, barPosition, barSize);
    this.viewHandlers.update(isRange, coordinates, rangeFrom, rangeTo);
    this.handlerValues.update(renderData);
    this.viewScale.update(coordinates, maxValue, minValue, sliderStep);
  }

  checkClickTarget(target: EventTarget): boolean {
    const { toVal, fromVal } = this.handlerValues;
    if (target === fromVal || target === toVal) {
      return false;
    }
    return true;
  }

  getAndSendClickPosition(ev: MouseEvent): void {
    const sliderData = this.getParameters();
    const target = ev.target as HTMLElement;
    if (this.checkClickTarget(target)) {
      this.emit('slider-clicked', {
        top: ev.clientY,
        left: ev.clientX,
        sliderData,
        target,
        isBarUnit:
          target.classList.contains('js-range-slider__bar-unit')
          || target.classList.contains('js-range-slider__unit-value'),
      });
    }
  }

  sendHandleDragData(data: { top: number; left: number; info: string }) {
    const sliderData = this.getParameters();
    this.emit('handle-dragged', { ...data, sliderData });
  }

  addEventListeners(): void {
    this.sliderBody.addEventListener('click', (ev) => {
      this.getAndSendClickPosition(ev);
    });
    this.viewHandlers.subscribe(
      'handle-dragged',
      (data: SliderDataType) => {
        this.sendHandleDragData(data as { top: number; left: number; info: string });
      },
    );
    this.viewHandlers.addDragNDrop();
  }
}
export default ViewBody;
