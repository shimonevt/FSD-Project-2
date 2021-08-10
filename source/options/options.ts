export interface ISliderParameters {
  width: number;
  height: number;
}
export interface ISliderCoordinates {
  left: number;
  top: number;
}
export interface ISliderOptions {
  containerClass: string;
  minValue: number;
  maxValue: number;
  isRange: boolean;
  isVertical: boolean;
  fromVal: number;
  toVal: number;
  sliderStep: number;
  units: string;
  showValues: boolean;
  handlerWidth: number;
  sliderParameters: {
    width: number;
    height: number;
  };
  sliderCoordinates: {
    top: number;
    left: number;
  };
}

export interface IRenderValues {
  coordinates: string[];
  barPosition: number;
  barSize: number;
  isRange: boolean;
  rangeTo: number;
  rangeFrom: number;
  showValues: boolean;
  values: { fromValNum: string; toValNum: string };
  valuesPosition: number[];
  maxValue: number;
  minValue: number;
  sliderStep: number;
}
export type ClickableData = {
  top: number;
  left: number;
  target: EventTarget;
  isBarUnit: boolean;
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
};
export const sliderOptionsDefault: ISliderOptions = {
  containerClass: '.js-container',
  minValue: 0,
  maxValue: 500,
  isRange: true,
  isVertical: false,
  fromVal: 50,
  toVal: 400,
  sliderStep: 1,
  units: '$',
  showValues: false,
  handlerWidth: 18,
  sliderParameters: { width: 0, height: 0 },
  sliderCoordinates: { top: 0, left: 0 },
};
