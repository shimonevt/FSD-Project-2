/* eslint-disable no-restricted-syntax */
import $ from 'jquery';

import { ISliderOptions, sliderOptionsDefault } from '../options/options.ts';
import { Presenter } from '../presenter/presenter.ts';

interface jQuery {
    rangeSlider (options:ISliderOptions): void
}
(function ($) {
  $.fn.extend({
    rangeSlider(options:ISliderOptions = sliderOptionsDefault) {
      const initOptions:ISliderOptions = {};
      options.containerClass = `.${this[0].classList.value}`;
      for (const key in options, sliderOptionsDefault) {
        if (options[key] === undefined) {
          initOptions[key] = sliderOptionsDefault[key];
        } else {
          initOptions[key] = options[key];
        }
      }
      return new Presenter(initOptions);
    },
  });
}(jQuery));
