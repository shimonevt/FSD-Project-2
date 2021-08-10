/* eslint-disable no-restricted-syntax */
import $ from 'jquery';
import { ISliderOptions, sliderOptionsDefault } from '../options/options.ts';
import Presenter from '../presenter/presenter.ts';
import './jquery.slider.d.ts';

$.fn.extend({
  rangeSlider(options: ISliderOptions = sliderOptionsDefault) {
    const initOptions: ISliderOptions = {};
    for (const key in options, sliderOptionsDefault) {
      if (options[key] === undefined) {
        initOptions[key] = sliderOptionsDefault[key];
      } else {
        initOptions[key] = options[key];
      }
    }
    const jqueryObj = this as JQuery<Object>;
    const container = jqueryObj[0] as HTMLElement;
    initOptions.containerClass = `.${container.classList.value}`;
    return new Presenter(initOptions);
  },
});
