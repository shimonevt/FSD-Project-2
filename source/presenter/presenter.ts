import { sliderOptions } from "../model/model"

export function addEventListeners(slider:Element,options:sliderOptions) {
    //1 случай - если слайдер вертикальный/горизонтальный
    //2 случай - range = true/false
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    let sliderWidth =  getComputedStyle(slider)
    rangeTo.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
    if (options.range == true) {
        var rangeFrom = sliderBody.children[4]
        rangeFrom.setAttribute('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
        sliderBar.setAttribute('style',`width: ${((options.toVal/options.maxValue)-(options.fromVal/options.maxValue))*100}%;left: ${(options.fromVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            var rangeMaxValue = sliderBody.children[5]
            rangeMaxValue.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.textContent = `${options.toVal} ${options.units}`
            var rangeMinValue = sliderBody.children[6]
            rangeMinValue.setAttribute('style',`left: ${(options.fromVal/options.maxValue)*100}%`)
            rangeMinValue.textContent =`${options.fromVal} ${options.units}`
            
        }
    } else {
        sliderBar.setAttribute('style',`width: ${(options.toVal/options.maxValue)*100}%`)
        if (options.showValues == true) {
            var rangeMaxValue = sliderBody.children[4]
            rangeMaxValue.setAttribute('style',`left: ${(options.toVal/options.maxValue)*100}%`)
            rangeMaxValue.textContent =`${options.toVal} ${options.units}`
        }
    }
    // нижепредставленный код нужно оформить в функцию для вызова при изменениях и инициализации
    sliderBody.setAttribute('style',`width: ${sliderWidth.width}`)
    sliderBody.addEventListener('click',(event)=>{
        let clickPosition = event.clientX - slider.getBoundingClientRect().x // number
        let newPosition = Math.ceil(100 * clickPosition/parseInt(sliderWidth.width))//percent
        if (options.range == true) {
            var rangeFromPosition = parseInt(rangeFrom.style.left)
            var rangeToPosition = parseInt(rangeTo.style.left)
            if ( Math.abs(newPosition - rangeToPosition) >= Math.abs(newPosition - rangeFromPosition)) {
                if( rangeToPosition >=97){
                        rangeToPosition = 97
                }       
                rangeFrom.setAttribute('style',`left: ${newPosition}%`)
                sliderBar.setAttribute('style',`width: ${rangeToPosition - newPosition}%;left: ${newPosition}%`)
                if (options.showValues){
                    rangeMinValue.setAttribute('style',`left: ${newPosition}%`)
                    calcValue(rangeMinValue,newPosition,sliderWidth.width,options.units);
                }   
            } else if (Math.abs(newPosition - rangeToPosition) < Math.abs(newPosition - rangeFromPosition)) {  
                if( newPosition >=97){
                        newPosition= 97
                } 
                rangeTo.setAttribute('style',`left: ${newPosition}%`)
                sliderBar.setAttribute('style',`width: ${newPosition- rangeFromPosition}%;left: ${rangeFromPosition}%`)
                if (options.showValues){
                    rangeMaxValue.setAttribute('style',`left: ${newPosition}%`)
                    calcValue(rangeMaxValue,newPosition,sliderWidth.width,options.units);
                }
            }
        } else {
           let rangeFromVal = Math.ceil(100 * (clickPosition) / parseInt(sliderWidth.width))
           if (rangeFromVal >= 97) {
                rangeFromVal = 97;
            }
                rangeTo.setAttribute('style', `left:  ${rangeFromVal}%`);
                sliderBar.setAttribute('style',`width: ${rangeFromVal+1}%`)
            }
        });
        //можно так же оформить в функции (elem.addEvent...)
        rangeTo.addEventListener('mousedown' , function(event) {
            event.preventDefault(); // предотвратить запуск выделения (действие браузера)
            if(options.range){
                var rangeFromPosition = 100*(parseInt(window.getComputedStyle(rangeFrom).getPropertyValue('left'))/parseInt(sliderWidth.width))
            }
            let shiftX = event.clientX - rangeTo.getBoundingClientRect().left;
          // shiftY здесь не нужен, слайдер двигается только по горизонтали
    
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
    
          function onMouseMove(event) {
            let newLeft = 100*(event.clientX - shiftX - slider.getBoundingClientRect().left)/parseInt(sliderWidth.width);
    
            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
              newLeft = 0;
            }
            let rightEdge = 98;
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
            }
    
            rangeTo.setAttribute('style',`left: ${newLeft}%`)
            if (options.range == true) {
                sliderBar.setAttribute('style',`width: ${newLeft-rangeFromPosition}%;left: ${rangeFromPosition}%`)
            }else {
                sliderBar.setAttribute('style',`width: ${newLeft}%`)
            }
          }
    
          function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
          }
    
        });
        rangeTo.addEventListener('dragstart', function() {
          return false;
        });
        
}
function calcValue(elem:Element,coord: number,width:string,units:string) {
        elem.textContent =`${Math.ceil(coord*0.01*parseInt(width))} ${units}`
}