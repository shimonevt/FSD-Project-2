import { sliderOptions, sliderOptionsDefault } from "../options/options"

export class Model {
    private options: sliderOptions
    constructor(options:sliderOptions = sliderOptionsDefault) {
        this.options = options
        
    }
}