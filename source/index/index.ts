import $ from 'jquery';

import './index.scss';
import '../slider/slider.ts';
import { Panel } from '../panel/panel';

$(document).ready(() => {
  const $slider1 = $('.js-container').rangeSlider({});
  const $slider2 = $('.js-container-2').rangeSlider({
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

  const $slider3 = $('.js-container-3').rangeSlider({
    minValue: 0,
    maxValue: 1000,
    isVertical: true,
    fromVal: 50,
    toVal: 400,
    sliderStep: 1,
    units: '$',
    showValues: false,
  });
  const panel1 = new Panel($slider1);
  const panel2 = new Panel($slider2);
  const panel3 = new Panel($slider3);
});
