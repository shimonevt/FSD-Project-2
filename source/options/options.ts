import { getElement } from "../functions/functions";

export interface ISliderOptions {
    rangeClass: string,
    minValue : number,
    maxValue: number,
    range: boolean,
    isVertical: boolean,
    fromVal: number,
    toVal: number,
    sliderStep: number,
    units : string,
    showValues : boolean 
}
export interface ISliderCoordinates {
    left: number,
    bottom: number
}

export const sliderOptionsDefault : ISliderOptions = {
    rangeClass: '.container',
    minValue: 0,
    maxValue: 500,
    range : true,
    isVertical: false,
    fromVal: 50,
    toVal : 400,
    sliderStep: 1,
    units: '$',
    showValues: false
}