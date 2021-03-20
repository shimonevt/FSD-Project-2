import { sliderOptions, sliderOptionsDefault } from "../options/options"

export function  sliderInit(slider: Element,options:sliderOptions) {
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    let direction,width
    options.isVertical == true ? (direction ='bottom:',width=`height:`) : (direction = 'left: ',width = 'width: ')
    rangeTo.setAttribute('style',`${direction}`+calcInitPosition(options.toVal,options.maxValue))
    if (options.range == true) {
        var rangeFrom = sliderBody.children[4]
        rangeFrom.setAttribute('style',`${direction}` + calcInitPosition(options.fromVal,options.maxValue))
        sliderBar.setAttribute('style',`${width}`+calcInitPosition(options.toVal-options.fromVal,options.maxValue)+`;${direction}`+calcInitPosition(options.fromVal,options.maxValue))
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[5]
            rangeMaxValue.setAttribute('style',`${direction}`+ calcInitPosition(options.toVal,options.maxValue))
            rangeMaxValue.textContent = `${options.toVal} ${options.units}`
            let rangeMinValue = sliderBody.children[6]
            rangeMinValue.setAttribute('style',`${direction}` + calcInitPosition(options.fromVal,options.maxValue))
            rangeMinValue.textContent =`${options.fromVal} ${options.units}`  
        }
    } else {
        sliderBar.setAttribute('style',`${width}`+ calcInitPosition(options.toVal,options.maxValue))
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[4]
            rangeMaxValue.setAttribute('style',`${direction}`+calcInitPosition(options.toVal,options.maxValue))
            rangeMaxValue.textContent =`${options.toVal} ${options.units}`
        }
    }
}
export function addEventListeners(slider:Element,options:sliderOptions) {
    //1 случай - если слайдер вертикальный/горизонтальный
    //2 случай - range = true/false
    // нижепредставленный код нужно оформить в функцию для вызова при изменениях и инициализации
    sliderClick(slider,options)
    addDragNDrop(slider,options) // стоит унифицировать для всех ползунков
}
export function addDragNDrop(slider:Element,options:sliderOptions) {
    let sliderBody = slider.children[0]
    var sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]    
     rangeTo.addEventListener('mousedown' , (event) => {
             let sliderWidth = getComputedStyle(slider)
             let handler = getComputedStyle(rangeTo)
             let direction:string,width:string
             options.isVertical == true ? (direction ='bottom: ',width='height:') : (direction = 'left: ',width = 'width: ')
             event.preventDefault()
             if (options.range) {
                let rangeFrom = sliderBody.children[4]
                var rangeFromPosition = parseInt(rangeFrom.style.left)
                 if (options.showValues) {
                    var rangeMaxValue = sliderBody.children[5]
                }
             }
             let shiftX = parseInt(handler.width)/2
             let shiftY = parseInt(handler.height)/2
             // shiftY  нужен(сделать по аналогии)
             document.addEventListener('mousemove', onMouseMove)
             document.addEventListener('mouseup', onMouseUp)
             function onMouseMove(event:MouseEvent) {
                 if(options.isVertical) {
                    var newPosition = Math.abs(100*(event.clientY + shiftY - slider.getBoundingClientRect().bottom) / parseInt(sliderWidth.height))
                    console.log(slider.getBoundingClientRect().bottom)
                 } else {
                    var newPosition = 100*(event.clientX - shiftX - slider.getBoundingClientRect().left) / parseInt(sliderWidth.width)
                 }
                 
                 // курсор вышел из слайдера => оставить бегунок в его границах.
                 if (newPosition < 0) {
                    newPosition = 0
                 }
                 let rightEdge = 98
                 if (newPosition > rightEdge) {
                    newPosition = rightEdge
                 }
                 if (options.range) {
                    rangeTo.setAttribute('style', `${direction} ${newPosition}%`)
                    rangeMaxValue.setAttribute('style',`${direction} ${newPosition}%`)
                    calcValue(rangeMaxValue,newPosition,sliderWidth.width,options.units);
                    sliderBar.setAttribute('style', `${width} ${newPosition - rangeFromPosition}%;${direction} ${rangeFromPosition}%`)
                 } else {
                    rangeTo.setAttribute('style', `${direction} ${newPosition}%`)
                    sliderBar.setAttribute('style', `${width} ${newPosition}%`)
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
export function calcValue(elem:Element,coord: number,width:string,units:string|undefined) {
        if(units == undefined) {
            throw Error(`Ошибка: не определен options.units`)
        }
        elem.textContent =`${Math.ceil(coord*0.01*parseInt(width))} ${units}`
}
export function calcPositionAfterClick(elem:Element,coord: number,width: string) {
    return 
}
export function calcInitPosition(position:number|undefined,width:number|undefined) {
        return  `${100*(position/width)}%` 
}
export function sliderClick(slider: Element,options: sliderOptions) {
    let sliderWidth = getComputedStyle(slider)
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    let direction :string,width :string
    options.isVertical == true ? (direction ='bottom:',width=`height:`) : (direction = 'left: ',width = 'width: ')
    sliderBody.addEventListener('click',function(event) {
        let handler = getComputedStyle(rangeTo)
        if (options.isVertical) {
            var clickPosition = event.clientY - slider.getBoundingClientRect().bottom + parseInt(handler.height)/2 // number
            var newPosition = Math.abs(100 * clickPosition/parseInt(sliderWidth.height))//percent
            var rangeToPosition = parseInt(rangeTo.style.bottom)
        } else{
            var clickPosition = event.clientX - slider.getBoundingClientRect().left - parseInt(handler.width)/2 // number
            var newPosition = 100 * clickPosition/parseInt(sliderWidth.width)//percent
            var rangeToPosition = parseInt(rangeTo.style.left)
        }
        if (options.range) {
            var rangeFrom = sliderBody.children[4]
            if (options.isVertical) {
                var rangeFromPosition = parseInt(rangeFrom.style.bottom)
            }else {
                var rangeFromPosition = parseInt(rangeFrom.style.left)
            }
            if ( Math.abs(newPosition - rangeToPosition) >= Math.abs(newPosition - rangeFromPosition)) {
                if( newPosition >=97){
                    newPosition = 97 // пересчитать это расстояние не в процентах, а в px (с учетом ширины ползунка)
                }else if(newPosition <0){
                    newPosition = 0
                }       
                rangeFrom.setAttribute('style',`${direction} ${newPosition}%`)
                sliderBar.setAttribute('style',`${width} ${rangeToPosition - newPosition}%;${direction} ${newPosition}%`)
                if (options.showValues){
                    let rangeMinValue = sliderBody.children[6]
                    rangeMinValue.setAttribute('style',`${direction} ${newPosition}%`)
                    if (options.isVertical) {
                        calcValue(rangeMinValue,newPosition,sliderWidth.height,options.units)
                    } else {
                        calcValue(rangeMinValue,newPosition,sliderWidth.width,options.units)
                    }
                }   
            } else {  
                if(newPosition >=97){ // правильно посчитать
                        newPosition= 97
                }else if (newPosition<0){
                    newPosition = 0
                }
                rangeTo.setAttribute('style',`${direction} ${newPosition}%`)
                sliderBar.setAttribute('style',`${width} ${newPosition- rangeFromPosition}%;${direction} ${rangeFromPosition}%`)
                if (options.showValues){
                    let rangeMaxValue = sliderBody.children[5]
                    rangeMaxValue.setAttribute('style',`${direction} ${newPosition}%`)
                    if (options.isVertical) {
                        calcValue(rangeMaxValue,newPosition,sliderWidth.height,options.units)
                    } else {
                        calcValue(rangeMaxValue,newPosition,sliderWidth.width,options.units)
                    }
                }
            }
        }else {
            if (options.isVertical) {
                var rangeFromVal = Math.abs(100 * (clickPosition) / (parseInt(sliderWidth.height)))
                console.log(rangeFromVal)
            }else {
                var rangeFromVal = 100 * (clickPosition) / (parseInt(sliderWidth.width))
            }
            if (rangeFromVal >= 97) {
                rangeFromVal = 97;
            }else if (rangeFromVal<0){
                rangeFromVal = 0
            }
            rangeTo.setAttribute('style', `${direction}  ${rangeFromVal}%`);
            sliderBar.setAttribute('style',`${width} ${rangeFromVal}%`)
            }
    })
}