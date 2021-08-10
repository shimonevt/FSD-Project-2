import { IRenderValues, ISliderOptions } from '../options/options';

/* eslint-disable no-unused-vars */
export type SliderDataType = { width: number; height: number }
  | { top: number; left: number }
  | { top: number; left: number; target: HTMLElement; isBarUnit: boolean }
  | { top: number; left: number; info: string }
  | {
      sliderParameters: {
        width: number;
        height: number;
      };
      sliderCoordinates: {
        top: number;
        left: number;
      };
      handlerWidth: number;
    }
  | {
      top: number;
      left: number;
      sliderData: {
        sliderParameters: {
          width: number;
          height: number;
        };
        sliderCoordinates: {
          top: number;
          left: number;
        };
        target: HTMLElement;
        isBarUnit: boolean;
        handlerWidth: number;
      };
    }
  | {
    top: number;
    left: number;
    info: string;
    sliderData: {
      sliderParameters: {
        width: number;
        height: number;
      };
      sliderCoordinates: {
        top: number;
        left: number;
      };
      handlerWidth: number;
    };
  }
  | ISliderOptions
  | IRenderValues;
class EventEmitter {
  events: { [key: string]: (data: SliderDataType) => void };

  constructor() {
    this.events = {};
  }

  subscribe(
    eventName: string,
    func: (data: SliderDataType) => void,
  ) {
    if (!this.events[eventName]) {
      this.events[eventName] = () => {};
    }
    this.events[eventName] = func;
  }

  emit(eventName: string, data: SliderDataType) {
    if (this.events[eventName]) {
      this.events[eventName].call(null, data);
    }
  }
}
export default EventEmitter;
