export interface ISliderParameters {
  width: number;
  height: number;
}
export interface ISliderCoordinates {
  left: number;
  top: number;
}
export interface ISliderOptions {
  containerClass?: string;
  minValue?: number;
  maxValue?: number;
  isRange?: boolean;
  isVertical?: boolean;
  fromVal?: number;
  toVal?: number;
  sliderStep?: number;
  units?: string;
  showValues?: boolean;
  handlerWidth?: number;
  sliderParameters?: ISliderParameters;
  sliderCoordinates?: ISliderCoordinates;
}

export interface IRenderValues {
  coordinates: string[];
  barPosition: number;
  barSize: number;
  isRange: boolean;
  rangeTo: number;
  rangeFrom: number;
  showValues: boolean;
  values: string[];
  valuesPosition: number[];
  maxValue: number;
  minValue: number;
}

export const sliderOptionsDefault: ISliderOptions = {
  containerClass: '.container',
  minValue: 0,
  maxValue: 500,
  isRange: true,
  isVertical: false,
  fromVal: 50,
  toVal: 400,
  sliderStep: 1,
  units: '$',
  showValues: false,
};
