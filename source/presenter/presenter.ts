import { sliderOptions } from "../model/model"

export function addEventListeners(slider:Element,options:sliderOptions) {
    //1 случай - если слайдер вертикальный/горизонтальный
    //2 случай - range = true/false
    let sliderBar = $(slider).find('.progress__bar')
    let sliderBody = $(slider).children('.slider__body')
    let rangeTo = $(slider).find('.bar__range.to')
    let sliderWidth =  getComputedStyle(slider)
    rangeTo.attr('style',`left: ${(options.toVal/options.maxValue)*100}%`)
    if (options.range == true) {
        var rangeFrom = $(slider).find('.bar__range.from')
        rangeFrom.attr('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
        sliderBar.attr('style',`width: ${((options.toVal/options.maxValue)-(options.fromVal/options.maxValue))*100}%;left: ${(options.fromVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            var rangeMinValue = $(sliderBody).find('.range__values.min-value')
            rangeMinValue.attr('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
            rangeMinValue.text(`${options.fromVal} ${options.units}`)
            var rangeMaxValue = $(sliderBody).find('.range__values.max-value')
            rangeMaxValue.attr('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.text(`${options.toVal} ${options.units}`)
        }
    } else {
        sliderBar.attr('style',`width: ${(options.toVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            var rangeMaxValue = $(sliderBody).find('.range__values.max-value')
            rangeMaxValue.attr('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.text(`${options.toVal} ${options.units}`)
        }
    }
    // нижепредставленный код нужно оформить в функцию для вызова при изменениях и инициализации
    $(sliderBody).attr('style',`width: ${sliderWidth.width}`)
    sliderBody.on('click',(event)=>{
        let clickPosition = event.clientX - slider.getBoundingClientRect().x // number
        let newPosition = Math.ceil(100 * clickPosition/parseInt(sliderWidth.width))//percent
        if (options.range == true) {
            let rangeFromPosition = Math.ceil(100*parseInt(rangeFrom.css('left'))/parseInt(sliderWidth.width))//percent
            let rangeToPosition = Math.ceil(100*parseInt(rangeTo.css('left'))/parseInt(sliderWidth.width))//percent
            if ( Math.abs(newPosition - rangeToPosition) >= Math.abs(newPosition - rangeFromPosition)) {
                if( rangeToPosition >=97){
                        rangeToPosition = 97
                }       
                rangeFrom.attr('style',`left: ${newPosition}%`)
                sliderBar.attr('style',`width: ${rangeToPosition - newPosition}%;left: ${newPosition}%`)
                if (options.showValues){
                    rangeMinValue.attr('style',`left: ${newPosition}%`)
                    calcValue(rangeMinValue,newPosition,sliderWidth.width,options.units);
                }
                
            } else {  
                if( newPosition >=97){
                        newPosition= 97
                } 
                rangeTo.attr('style',`left: ${newPosition}%`)
                sliderBar.attr('style',`width: ${newPosition- rangeFromPosition}%;left: ${rangeFromPosition}%`)
                if (options.showValues){
                    rangeMaxValue.attr('style',`left: ${newPosition}%`)
                    calcValue(rangeMaxValue,newPosition,sliderWidth.width,options.units);
                }
            }
            
        } else {
           let rangeFromVal = Math.ceil(100 * (clickPosition) / parseInt(sliderWidth.width))
           if (rangeFromVal >= 97) {
            rangeFromVal = 97;
            }
            rangeTo.attr('style', `left:  ${rangeFromVal}%`);
            sliderBar.attr('style',`width: ${rangeFromVal+1}%`)
        }
    })
}
function calcValue(elem:JQuery<HTMLElement>,coord: number,width:string,units:string) {
        elem.text(`${Math.ceil(coord*0.01*parseInt(width))} ${units}`)
}