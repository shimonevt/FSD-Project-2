export interface sliderOptions {
    [key: string]: number | boolean | string | undefined
    rangeClass: string,
    minValue? : number,
    maxValue?: number,
    range?: boolean,
    isVertical?: boolean,
    fromVal?: number,
    toVal?: number,
    sliderStep?: number,
    units? : string,
    showValues? : boolean 
}
export const sliderOptionsDefault : sliderOptions = {
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
export class Model {
    private options: sliderOptions
    constructor(options:sliderOptions = sliderOptionsDefault) {
        this.options = options
        
    }
    setVal(range:boolean,...values:[number]):void {
        
    }
}