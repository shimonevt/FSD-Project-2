export interface ISliderOptions {
    containerClass: string,
    minValue : number,
    maxValue: number,
    range: boolean,
    isVertical: boolean,
    fromVal: number,
    toVal: number,
    sliderStep: number,
    units : string,
    showValues : boolean,
    handlerWidth?: number,
    sliderParams?: CSSStyleDeclaration,
    sliderCoordinates?: ISliderCoordinates
}
export interface ISliderCoordinates {
    left: number,
    bottom: number
}

export const sliderOptionsDefault : ISliderOptions = {
    containerClass: '.container',
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