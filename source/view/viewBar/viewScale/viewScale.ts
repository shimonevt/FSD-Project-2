import { createElementSlider } from "../../../functions/functions"

class ViewScale {
    private scaleBar : HTMLElement
    constructor(){
        this.scaleBar = createElementSlider(['progress__scale-bar'])
    }

}
export {ViewScale}