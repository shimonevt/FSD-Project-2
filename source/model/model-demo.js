var setting = true;
var $ = require("jquery");
$(document).ready(function () {
    $('.slider').each(function (i, element) {
        var rangeFrom = $(element).find('.bar__range.from');
        var rangeTo = $(element).find('.bar__range.to');
        var sliderLength = window.getComputedStyle(element).getPropertyValue("width");
        $(element).attr("style", "width: " + sliderLength);
        var sliderBar = $(element).find('.slider__body');
        $(sliderBar).on('click', function (event) {
            var rangeFromLeft = 100 * (event.clientX - element.getBoundingClientRect().x - 9) / parseInt(sliderLength);
            if (rangeFromLeft > 100) {
                rangeFromLeft = 100;
            }
            console.log(rangeFromLeft);
            $(rangeFrom).attr("style", "left: " + rangeFromLeft + "%");
        });
    });
});