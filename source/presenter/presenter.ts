import { sliderOptions } from "../model/model"

export function addEventListeners(slider:Element,options:sliderOptions) {
    //1 случай - если слайдер вертикальный/горизонтальный
    //2 случай - range = true/false
    let sliderBar = $(slider).find('.progress__bar')
    let sliderBody = $(slider).children('.slider__body')
    let rangeFrom = $(slider).find('.bar__range.from');
    let rangeTo = $(slider).find('.bar__range.to');
    let sliderWidth =  getComputedStyle(slider)
    // нижепредставленный код нужно оформить в функцию для вызова при изменениях и инициализации
    $(sliderBody).attr('style',`width: ${sliderWidth.width}`)
    sliderBody.on('click',(event)=>{
        var rangeFromLeft = Math.ceil(100 * (event.clientX - slider.getBoundingClientRect().x) / parseInt(sliderWidth.width))
        if (rangeFromLeft >= 97) {
            rangeFromLeft = 96.5;
        }
        console.log(rangeFromLeft);
        $(rangeTo).attr('style', `left:  ${rangeFromLeft}%`);
        $(sliderBar).attr('style',`width: ${rangeFromLeft+1}%`)
    })
}