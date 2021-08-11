/* eslint-disable no-restricted-syntax */
import $ from 'jquery';
import { ISliderOptions, sliderOptionsDefault } from '../options/options';
import Presenter from '../presenter/presenter';
import './jquery.slider.d';

$.fn.extend({
  rangeSlider(options: ISliderOptions = sliderOptionsDefault) {
    var initOptions: ISliderOptions = {...sliderOptionsDefault,...options};
    const jqueryObj = this as JQuery<Object>;
    const container = jqueryObj[0] as HTMLElement;
    initOptions.containerClass = `.${container.classList.value}`;
    return new Presenter(initOptions);
  },
});
