import $ from 'jquery';

import './index.scss';
import '../slider/slider.ts';

$(document).ready(() => {
  $('.js-container').rangeSlider({});
  $('.js-container-2').rangeSlider({
    minValue: 0,
    maxValue: 600,
    isRange: false,
    isVertical: false,
    fromVal: 50,
    toVal: 400,
    sliderStep: 1,
    units: 'F',
    showValues: false,
  });

  $('.js-container-3').rangeSlider({
    minValue: 0,
    maxValue: 1000,
    isVertical: true,
    fromVal: 50,
    toVal: 400,
    sliderStep: 1,
    units: '$',
    showValues: false,
  });
});
