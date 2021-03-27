import { ISliderOptions } from "../options/options";

interface IPanel {
    options : ISliderOptions
    getData(options:ISliderOptions):void
    //checkChanges(listener)
    //sendChanges(options:ISliderOptions)

}