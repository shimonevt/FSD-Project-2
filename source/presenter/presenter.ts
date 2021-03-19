import { sliderOptions } from "../model/model"

export function  sliderInit(slider: Element,options:sliderOptions | any) {
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    rangeTo.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
    if (options.range == true) {
        var rangeFrom = sliderBody.children[4]
        rangeFrom.setAttribute('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
        sliderBar.setAttribute('style',`width: ${((options.toVal/options.maxValue)-(options.fromVal/options.maxValue))*100}%;left: ${(options.fromVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[5]
            rangeMaxValue.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.textContent = `${options.toVal} ${options.units}`
            let rangeMinValue = sliderBody.children[6]
            rangeMinValue.setAttribute('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
            rangeMinValue.textContent =`${options.fromVal} ${options.units}`
            
        }
    } else {
        sliderBar.setAttribute('style',`width: ${(options.toVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[4]
            rangeMaxValue.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.textContent =`${options.toVal} ${options.units}`
        }
    }
    addEventListeners(slider,options)
}
export function addEventListeners(slider:Element,options:sliderOptions) {
    //1 случай - если слайдер вертикальный/горизонтальный
    //2 случай - range = true/false
    let sliderBody = slider.children[0]
    let sliderWidth = getComputedStyle(slider)
    // нижепредставленный код нужно оформить в функцию для вызова при изменениях и инициализации
    sliderBody.setAttribute('style',`width: ${sliderWidth.width}`)
    sliderClick(slider,options)
    addDrapNDrop(slider,options) // стоит унифицировать для всех ползунков
}
export function addDrapNDrop(slider:Element,options:sliderOptions) {
    let sliderBody = slider.children[0]
    var sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]    
     rangeTo.addEventListener('mousedown' , (event) => {
             let sliderWidth = getComputedStyle(slider)
             let handler = getComputedStyle(rangeTo)
             event.preventDefault()
             if (options.range) {
                let rangeFrom = sliderBody.children[4]
                var rangeFromPosition = parseInt(rangeFrom.style.left)
                 if (options.showValues) {
                    var rangeMaxValue = sliderBody.children[5]
                }
             }
             let shiftX = parseInt(handler.width)
             // shiftY  нужен(сделать по аналогии)
             document.addEventListener('mousemove', onMouseMove)
             document.addEventListener('mouseup', onMouseUp)
             function onMouseMove(event:MouseEvent) {
                 let newLeft = Math.ceil(100*(event.clientX - shiftX - slider.getBoundingClientRect().left) / parseInt(sliderWidth.width))

                 // курсор вышел из слайдера => оставить бегунок в его границах.
                 if (newLeft < 0) {
                     newLeft = 0
                 }
                 let rightEdge = 98
                 if (newLeft > rightEdge) {
                     newLeft = rightEdge
                 }

                 
                 if (options.range) {
                     rangeTo.setAttribute('style', `left: ${newLeft}%`)
                    rangeMaxValue.setAttribute('style',`left: ${newLeft}%`)
                    calcValue(rangeMaxValue,newLeft,sliderWidth.width,options.units);
                    
                     sliderBar.setAttribute('style', `width: ${newLeft - rangeFromPosition}%;left: ${rangeFromPosition}%`)
                 } else {
                     rangeTo.setAttribute('style', `left: ${newLeft}%`)
                     sliderBar.setAttribute('style', `width: ${newLeft}%`)
                 }
             }

             function onMouseUp() {
                 document.removeEventListener('mouseup', onMouseUp)
                 document.removeEventListener('mousemove', onMouseMove)
             }

         });
        rangeTo.addEventListener('dragstart', function() {
          return false;
        });
}
export function calcValue(elem:Element,coord: number,width:string,units:string) {
        elem.textContent =`${Math.ceil(coord*0.01*parseInt(width))} ${units}`
}
export function sliderClick(slider: Element,options: sliderOptions| any) {
    let sliderWidth = getComputedStyle(slider)
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    sliderBody.addEventListener('click',function(event) {
        let handler = getComputedStyle(rangeTo)
        let clickPosition = event.clientX - slider.getBoundingClientRect().x - parseInt(handler.width) // number
        let newPosition = Math.ceil(100 * clickPosition/parseInt(sliderWidth.width))//percent
        let rangeToPosition = parseInt(rangeTo.style.left)
        
        if (options.range) {
            var rangeFrom = sliderBody.children[4]
            var rangeFromPosition = parseInt(rangeFrom.style.left)
            if ( Math.abs(newPosition - rangeToPosition) >= Math.abs(newPosition - rangeFromPosition)) {
                if( rangeToPosition >=97){
                    rangeToPosition = 97
                }       
                rangeFrom.setAttribute('style',`left: ${newPosition}%`)
                sliderBar.setAttribute('style',`width: ${rangeToPosition - newPosition}%;left: ${newPosition}%`)
                if (options.showValues){
                    let rangeMinValue = sliderBody.children[6]
                    rangeMinValue.setAttribute('style',`left: ${newPosition}%`)
                    calcValue(rangeMinValue,newPosition,sliderWidth.width,options.units);
                    }   
            } else {  
                if(newPosition >=97){ // правильно посчитать
                        newPosition= 97
                    } 
                rangeTo.setAttribute('style',`left: ${newPosition}%`)
                sliderBar.setAttribute('style',`width: ${newPosition- rangeFromPosition}%;left: ${rangeFromPosition}%`)
                if (options.showValues){
                    let rangeMaxValue = sliderBody.children[5]
                    rangeMaxValue.setAttribute('style',`left: ${newPosition}%`)
                    calcValue(rangeMaxValue,newPosition,sliderWidth.width,options.units);
                }
            }
        }else {
            let rangeFromVal = Math.ceil(100 * (clickPosition) / parseInt(sliderWidth.width))
            if (rangeFromVal >= 97) {
                rangeFromVal = 97;
            }
            rangeTo.setAttribute('style', `left:  ${rangeFromVal}%`);
            sliderBar.setAttribute('style',`width: ${rangeFromVal+1}%`)
            }
    })
}