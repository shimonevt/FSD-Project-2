import '../view/view.scss';
import * as $ from 'jquery';
$(document).ready(function() {
    $('.slider').each(function(i,element){
        let rangeFrom = $(element).find('.bar__range.from');
        let rangeTo = $(element).find('.bar__range.to');
        let sliderLength = window.getComputedStyle(element).getPropertyValue("width")
        $(element).attr("style","width: "+sliderLength)
        let sliderBar = $(element).find('.slider__body')
            $(sliderBar).on('click',(event)=>{
                
                let rangeFromLeft = 100*(event.clientX - element.getBoundingClientRect().x-9)/parseInt(sliderLength);
                if(rangeFromLeft>100) {rangeFromLeft =100}
                console.log(rangeFromLeft)
                $(rangeFrom).attr("style", `left: ${rangeFromLeft}%`);
                
            })
            
    })
});

